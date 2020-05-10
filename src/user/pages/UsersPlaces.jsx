import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../places/components/PlaceList.component";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    imageUrl:
      "https://dicasnovayork.com.br/wp-content/uploads/2016/02/empire_header1-1000x700.jpg",
    address: "20 W 34th St, new York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    imageUrl:
      "https://dicasnovayork.com.br/wp-content/uploads/2016/02/empire_header1-1000x700.jpg",
    address: "20 W 34th St, new York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
const UsersPlaces = () => {
  const userId = useParams().userId;

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UsersPlaces;
