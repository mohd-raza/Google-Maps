import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
const Map = ({ setCoordinates, coordinates }) => {
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDMauGmFySD-J_SNNpdqnUrmTP1CCNNHBM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
