import BasicCreateDeleteButtons from "src/BasicCreateDeleteButtons.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAssetContext } from "src/context/AssetContext.tsx";

const AssetList = () => {
  const { assets, isFetching, fetchNextPage, hasNextPage } = useAssetContext();

  return (
    <main>
      <h1>Asset Management Application</h1>

      <BasicCreateDeleteButtons />

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
      </InfiniteScroll>

      {!hasNextPage && <p>Nothing left to fetch (Total: {assets.length} assets)</p>}
    </main>
  );
};

export default AssetList;
