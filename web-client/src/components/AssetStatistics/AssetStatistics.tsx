import { useAssetContext } from "src/context/AssetContext.tsx";
import AssetTypeStatisticsPieChart from "src/components/AssetStatistics/AssetTypeStatisticsPieChart.tsx";

// todo responsive and titles
const AssetStatistics = () => {
  const { listedAssetTypes, allAssetTypes } = useAssetContext();

  return (
    <div>
      <AssetTypeStatisticsPieChart assetTypes={listedAssetTypes} />
      <AssetTypeStatisticsPieChart assetTypes={allAssetTypes} />
    </div>
  );
};

export default AssetStatistics;
