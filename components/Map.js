import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
const Map = ({ coordinates, setCoordinates }) => {
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={0}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
