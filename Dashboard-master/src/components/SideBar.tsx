import {
  IconButton,
  Flex,
  Divider,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FiHome, FiMenu } from "react-icons/fi";
import { useState } from "react";
import {
  FcLineChart,
  FcPieChart,
  FcDataSheet,
  FcTemplate,
  FcSettings,
  FcBarChart,
} from "react-icons/fc";
import SideItems from "./SideItems";

const SideBar = () => {
  const [navSize, setNavSize] = useState("sm");
  return (
    <Flex
      left="5"
      h="95vh"
      marginTop="2.vh"
      boxShadow="0 4px 12px 0 rgpa(0 , 0, 0, 0.05)"
      borderRadius={navSize === "sm" ? "15px" : "30px"}
      width={navSize === "sm" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <IconButton
          aria-label="h"
          background="none"
          mt={5}
          _hover={{ backgroung: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "sm") setNavSize("lg");
            else setNavSize("sm");
          }}
        />
        <SideItems
          children=" "
          sizeNav={navSize}
          icon={FcTemplate}
          title="DashBoard"
        />
        <Divider display={navSize === "sm" ? "none" : "flex"} />
        <SideItems
          children="piechart"
          sizeNav={navSize}
          icon={FcPieChart}
          title="Pie Chart"
        />
        <Divider display={navSize === "sm" ? "none" : "flex"} />
        <SideItems
          children="linechart"
          sizeNav={navSize}
          icon={FcLineChart}
          title="Line Chart"
        />
        <Divider display={navSize === "sm" ? "none" : "flex"} />
        <SideItems
          children="barchart"
          sizeNav={navSize}
          icon={FcBarChart}
          title="barchart"
        />
        <Divider display={navSize === "sm" ? "none" : "flex"} />
        <SideItems
          children="settings"
          sizeNav={navSize}
          icon={FcSettings}
          title="Settings"
        />
      </Flex>

      <Flex
        padding="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "sm" ? "none" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "sm" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "sm" ? "none" : "flex"}
          >
            <Heading as="h2" size="md">
              Prakash
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
