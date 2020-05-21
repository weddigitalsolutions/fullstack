import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../places/components/PlaceList.component";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Card from "../../shared/components/UIElements/Card.component";
import Button from "../../shared/components/FormElements/Button.compoenent";

const UsersPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };

    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  if (!loadedPlaces && !isLoading) {
    return (
      <div className="center">
        <Card>
          <h2>No Places Founded!</h2>
          <Button to="/places/new">Share One</Button>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onCancel={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDelete={placeDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UsersPlaces;
