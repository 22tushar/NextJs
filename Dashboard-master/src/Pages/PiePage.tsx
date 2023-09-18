import { Flex, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/SideBar";
import MyResponsivePie from "../components/PieChart";
import { useEffect, useState } from "react";
// import "/Users/sarav/Dashboard/src/index.css";

const PiePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const [MongoPieData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getalldata'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
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
            base: '"nav" "chart1" ',
            lg: '"dashboard nav " "dashboard chart1"  ',
          }}
          templateColumns={{
            base: "auto ",
            lg: "auto minmax(10px,1fr)",
          }}
          templateRows={{
            base: "12vh 100vh",
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
            <NavBar children="Piechart" />
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
            title="PieChart"
            className="Chart1"
            area="chart1"
            borderRadius={10}
            borderBottomColor="red"
            borderBlockStartColor="ActiveBorder"
            shadow="dark-lg"
          >
            <MyResponsivePie MongoPieData={MongoPieData} />
          </GridItem>
        </Grid>
      </Flex>
    </span>
  );
};

export default PiePage;
