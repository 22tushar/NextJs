import { Flex, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/SideBar";
import Table from "../components/Table";

const TablePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <span>
      <Flex minH="100vh" flexDirection="column">
        <Grid
          templateAreas={{
            base: '"nav nav" " table table" ',
            lg: '"dashboard nav " "dashboard table"  ',
          }}
          templateColumns={{
            base: "100%",
            lg: "auto minmax(10px,1fr)",
          }}
          templateRows={{
            base: "20vh 100vh ",
            lg: "auto 1fr  ",
          }}
          gap="4"
        >
          <GridItem
            className="NavBar"
            area="nav"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#d9ffcc"}
            borderRadius={10}
            shadow="dark-lg"
            marginY="10px"
          >
            <NavBar children="Table" />
          </GridItem>
          <Show above="lg">
            <GridItem
              className="DashBoard"
              area="dashboard"
              overflow="auto"
              bg={colorMode === "dark" ? "whiteAlpha.100" : "#c2d6d6"}
              borderRadius={10}
              shadow="dark-lg"
            >
              <Dashboard />
            </GridItem>
          </Show>
          <GridItem
            className="Table"
            area="table"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
            borderRadius={10}
            shadow="dark-lg"
          >
            <Table />
          </GridItem>
        </Grid>
      </Flex>
    </span>
  );
};

export default TablePage;
