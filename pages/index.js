import Header from "../components/Header";
import Map from "../components/Map";
import List from "../components/List";
import PlaceDetail from "../components/PlaceDetail";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>
  );
}
