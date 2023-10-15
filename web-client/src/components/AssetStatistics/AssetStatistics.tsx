import { useAssetContext } from "src/context/AssetContext.tsx";
import AssetTypeStatisticsPieChart from "src/components/AssetStatistics/AssetTypeStatisticsPieChart.tsx";
import Typography from "@mui/joy/Typography";
import { AiFillPieChart } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { useMemo } from "react";

const AssetStatistics = () => {
  const { listedAssetTypes, allAssetTypes } = useAssetContext();

  const listedAssetsCount = useMemo(() => {
    return listedAssetTypes.reduce((acc, assetType) => acc + assetType.assets_count, 0);
  }, [listedAssetTypes]);

  const allAssetsCount = useMemo(() => {
    return allAssetTypes.reduce((acc, assetType) => acc + assetType.assets_count, 0);
  }, [allAssetTypes]);

  return (
    <div>
      <Typography startDecorator={<AiFillPieChart />} level="title-sm">
        Types of Listed Assets ({listedAssetsCount})
      </Typography>
      <AssetTypeStatisticsPieChart assetTypes={listedAssetTypes} />

      <Typography startDecorator={<FaChartPie />} level="title-sm">
        Types of All Assets ({allAssetsCount})
      </Typography>
      <AssetTypeStatisticsPieChart assetTypes={allAssetTypes} />
    </div>
  );
};

export default AssetStatistics;
