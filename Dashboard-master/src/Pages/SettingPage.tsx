import { Flex, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/SideBar";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";

const LinePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [MongofilterData, setData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getalldata'); // Replace with your API endpoint
      const result = await response.json();
      setData(result);
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);  
  return (
    <span>
      <Flex minH="100vh" flexDirection="column">
        <Grid
          templateAreas={{
            base: '"nav" "chart" ',
            lg: '"dashboard nav " "dashboard chart"  ',
          }}
          templateColumns={{
            base: "auto",
            lg: "auto minmax(10px,1fr)",
          }}
          templateRows={{
            base: "12vh 100vh ",
            lg: "auto 1fr  ",
          }}
          gap="4"
          paddingEnd={4}
        >
          <GridItem
            className="NavBar"
            area="nav"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#d9ffcc"}
            borderRadius={10}
            shadow="dark-lg"
            marginY="10px"
          >
            <NavBar children="All Filters" />
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
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
            title="All Filters"
            className="Chart"
            area="chart"
            borderRadius={10}
            borderBottomColor="red"
            borderBlockStartColor="ActiveBorder"
            shadow="dark-lg"
          >
            <Filters data={MongofilterData}/>
          </GridItem>
        </Grid>
      </Flex>
    </span>
  );
};

export default LinePage;
