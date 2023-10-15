import InfiniteScroll from "react-infinite-scroll-component";
import { useAssetContext } from "src/context/AssetContext.tsx";
import List from "@mui/joy/List";

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
        <ul>
          {assets &&
            assets.length &&
            assets.map((asset) => (
              <li key={asset.id}>
                <p>
                  <b>
                    #{asset.id} - {asset.name}
                  </b>
                </p>
                <p>{asset.description}</p>
              </li>
            ))}
        </ul>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: 2,
          }}
        >
        </List>
      </InfiniteScroll>

      {!hasNextPage && <p>Nothing left to fetch (Total: {assets.length} assets)</p>}
    </>
  );
};

export default AssetList;
