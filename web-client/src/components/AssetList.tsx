import InfiniteScroll from "react-infinite-scroll-component";
import { useAssetContext } from "src/context/AssetContext.tsx";
import List from "@mui/joy/List";
import AssetCard from "src/components/AssetCard/AssetCard.tsx";

const AssetList = () => {
  const { assets, isFetching, fetchNextPage, hasNextPage } = useAssetContext();

  return (
    <>
      <InfiniteScroll
        next={() => !isFetching && fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<div>Loading</div>}
        dataLength={assets.length || 0}
      >
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: 2,
          }}
        >
          {assets && assets.length && assets.map((asset) => <AssetCard key={asset.id} asset={asset} />)}
        </List>
      </InfiniteScroll>

      {!hasNextPage && <p>Nothing left to fetch (Total: {assets.length} assets)</p>}
    </>
  );
};

export default AssetList;
