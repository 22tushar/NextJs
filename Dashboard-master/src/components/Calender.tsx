import { ResponsiveCalendar } from "@nivo/calendar";
import { calenderData } from "../Data/calenderData";
import { useColorMode, ColorModeContextType } from "@chakra-ui/react";
import { NivoTheme } from "../assets/NivoTheme";

const MyResponsiveCalendar = () => {
  const { colorMode } = useColorMode();
  return (
    <ResponsiveCalendar
      theme={NivoTheme}
      data={calenderData}
      from="2015-03-01"
      to="2016-07-12"
      colors={
        colorMode === "light"
          ? ["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]
          : ["#0c3646", "#155e75", "#1f9aa7", "#5cc5cd"]
      }
      yearSpacing={20}
      dayBorderWidth={2}
      legends={[
        {
          anchor: "left",
          direction: "column",
          itemCount: 4,
          itemWidth: 50,
          itemHeight: 36,
          itemTextColor: "#777",
          itemDirection: "top-to-bottom",
          translateY: 20,
          symbolSize: 16,
        },
      ]}
    />
  );
};
export default MyResponsiveCalendar;
