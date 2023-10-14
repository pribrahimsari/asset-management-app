import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMemo } from "react";
import { getAssets } from "src/api/apiService.ts";
import { Asset, PaginatedResponseBody } from "src/types/ApiTypes.ts";

const App = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["assets"],
    queryFn: getAssets,
    getNextPageParam: (lastPage) => {
      const lastPageNr = lastPage.meta.last_page;
      const currPageNr = lastPage.meta.current_page;
      return currPageNr < lastPageNr ? currPageNr + 1 : undefined;
    },
  });

  const assets = useMemo(() => {
    // Why type assertion here?
    // issue on react-query v4: https://github.com/TanStack/query/issues/3065
    return (
      (data as PaginatedResponseBody)?.pages?.reduce((acc, page) => [...acc, ...page.data], [] as Asset[]) ||
      []
    );
  }, [data]);

  console.debug({ data });
  console.debug({ assets });

  return (
    <main>
      <h1>Asset Management Application</h1>

      <InfiniteScroll
        next={() => fetchNextPage()}
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
                  <b>{asset.name}</b>
                </p>
                <p>{asset.description}</p>
              </li>
            ))}
        </ul>
      </InfiniteScroll>
    </main>
  );
};

export default App;
