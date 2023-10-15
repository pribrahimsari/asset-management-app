import { useAssetContext } from "src/context/AssetContext.tsx";
import AssetTypeStatisticsPieChart from "src/components/AssetStatistics/AssetTypeStatisticsPieChart.tsx";
import Typography from "@mui/joy/Typography";
import { AiFillPieChart } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";

// todo responsive
const AssetStatistics = () => {
  const { listedAssetTypes, allAssetTypes } = useAssetContext();

  return (
    <div>
      <Typography startDecorator={<AiFillPieChart />} level="title-sm">
        Types of Listed Assets
      </Typography>
      <AssetTypeStatisticsPieChart assetTypes={listedAssetTypes} />

      <Typography startDecorator={<FaChartPie />} level="title-sm">
        Types of All Assets
      </Typography>
      <AssetTypeStatisticsPieChart assetTypes={allAssetTypes} />
    </div>
  );
};

export default AssetStatistics;
