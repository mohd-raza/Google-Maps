import Header from "../components/Header";
import Map from "../components/Map";
import List from "../components/List";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const [coordinates, setCoordinates] = useState({});
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [ratings, setRatings] = useState("");
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // get the users current location
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // console.log(latitude, longitude);
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);
  useEffect(() => {
    const filteredData = places.filter((place) => place.rating >= ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        maxWidth={"100vw"}
        maxHeight={"100vh"}
        position={"relative"}
      >
        <Header
          setType={setType}
          setRatings={setRatings}
          setCoordinates={setCoordinates}
        />
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          isLoading={isLoading}
        />
        <Map
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setBounds={setBounds}
          places={filteredPlaces.length ? filteredPlaces : places}
        />
      </Flex>
    </>
  );
}
