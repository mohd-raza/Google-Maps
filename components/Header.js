import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
// import { Rating } from "@material-ui/lab";
import { Autocomplete } from "@react-google-maps/api";
import {
  BiSearch,
  BiStar,
  BiChevronDown,
  BiHotel,
  BiMapAlt,
  BiRestaurant,
} from "react-icons/bi";
const Header = ({ setType, setRatings, setCoordinates }) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      {/* <Autocomplete> */}
      <InputGroup width={"35vw"} shadow={"lg"}>
        <InputRightElement
          pointerEvents={"none"}
          // eslint-disable-next-line react/no-children-prop
          children={<BiSearch color="gray" fontSize={20} />}
        />
        <Input
          type={"text"}
          placeholder="Search Google Map..."
          variant={"filled"}
          fontSize={20}
          bg={"white"}
          color={"gray.700"}
          _hover={{ bg: "whiteAlpha.800" }}
          _focus={{ bg: "whiteAlpha.800" }}
          _placeholder={{ color: "gray.700" }}
        />
      </InputGroup>
      {/* </Autocomplete> */}
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          px={4}
          py={2}
          bg={"white"}
          rounded={"full"}
          ml={4}
          shadow={"lg"}
          cursor={"pointer"}
        >
          <Menu>
            <BiStar fontSize={25} />
            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
              Choose ratings
            </MenuButton>
            <MenuList>
              <MenuItem
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => setRatings("")}
              >
                <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                  All Ratings
                </Text>
              </MenuItem>
              <MenuItem
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => setRatings("")}
              >
                <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                  2.0
                </Text>
                <Rating size="small" value={2} readOnly />{" "}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
