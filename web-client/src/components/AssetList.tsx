import InfiniteScroll from "react-infinite-scroll-component";
import { useAssetContext } from "src/context/AssetContext.tsx";
import List from "@mui/joy/List";
import AssetCard from "src/components/AssetCard/AssetCard.tsx";
import SkeletonAssetCard from "src/components/AssetCard/SkeletonAssetCard.tsx";
import LoadingSpinner from "src/components/LoadingSpinner.tsx";
import NothingLeftToFetch from "src/components/NothingLeftToFetch.tsx";

const AssetList = () => {
  const { assets, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage } = useAssetContext();

  return (
    <>
      <InfiniteScroll
        next={() => !isFetching && fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<LoadingSpinner />}
        dataLength={assets.length || 0}
      >
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {assets && assets.length && assets.map((asset) => <AssetCard key={asset.id} asset={asset} />)}

          {/* beautiful fetching next items animation */}
          {isFetchingNextPage && [1, 2].map((i) => <SkeletonAssetCard key={i} />)}
        </List>
      </InfiniteScroll>

      {!hasNextPage && <NothingLeftToFetch totalAssetsCount={assets.length} />}
    </>
  );
};

export default AssetList;
