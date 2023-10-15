import { useAssetContext } from "src/context/AssetContext.tsx";
import AssetTypeStatisticsPieChart from "src/components/AssetStatistics/AssetTypeStatisticsPieChart.tsx";
import Typography from "@mui/joy/Typography";
import { AiFillPieChart } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { useMemo } from "react";
import { Box } from "@mui/joy";
import Divider from "@mui/joy/Divider";

const AssetStatistics = () => {
  const { listedAssetTypes, allAssetTypes } = useAssetContext();

  const listedAssetsCount = useMemo(() => {
    return listedAssetTypes.reduce((acc, assetType) => acc + assetType.assets_count, 0);
  }, [listedAssetTypes]);

  const allAssetsCount = useMemo(() => {
    return allAssetTypes.reduce((acc, assetType) => acc + assetType.assets_count, 0);
  }, [allAssetTypes]);

  return (
    <>
      <Typography startDecorator={<AiFillPieChart />} level="title-sm">
        Types of Assets Listed ({listedAssetsCount})
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "60%" }}>
          <AssetTypeStatisticsPieChart assetTypes={listedAssetTypes} />
        </Box>
      </Box>

      <Divider />

      <Typography startDecorator={<FaChartPie />} level="title-sm">
        Types of All Assets Recorded ({allAssetsCount})
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
          <AssetTypeStatisticsPieChart assetTypes={allAssetTypes} />
        </Box>
      </Box>
    </>
  );
};

export default AssetStatistics;
