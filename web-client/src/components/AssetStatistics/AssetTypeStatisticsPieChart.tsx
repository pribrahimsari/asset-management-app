import { ArcElement, Chart as ChartJS, Legend, Tooltip, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useMemo } from "react";
import { AssetType } from "src/types/ApiTypes.ts";
import { generateRandomRgbAColor } from "src/utils/utils.ts";
import { useTheme } from "@mui/joy";

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions = {
  // responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const AssetTypeStatisticsPieChart = ({ assetTypes }: { assetTypes: AssetType[] }) => {
  const themeMode = useTheme().palette.mode;

  // prepare data format for pie chart
  const chartData = useMemo(() => {
    return {
      labels: assetTypes.map((assetType) => assetType.name),
      datasets: [
        {
          label: "# of Types",
          data: assetTypes.map((assetType) => assetType.assets_count),
          backgroundColor: assetTypes.map(() => generateRandomRgbAColor(themeMode)),
          borderWidth: 1,
        },
      ],
    };
  }, [assetTypes, themeMode]);

  return <Pie data={chartData} options={options} />;
};

export default AssetTypeStatisticsPieChart;
