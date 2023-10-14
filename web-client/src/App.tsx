// todo: import from ENV when needed
// const ANY_API_URL = import.meta.env.VITE_ANY_API_URL;
// console.debug({ ANY_API_URL });

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchAssets = async ({ pageParam = 1 }) => {
  const response = await fetch(`http://localhost:8000/v1/assets?page=${pageParam}`);
  return await response.json();
};

const App = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    getNextPageParam: (lastPage) => {
      const lastPageNr = lastPage.meta.last_page;
      const currPageNr = lastPage.meta.current_page;
      return currPageNr < lastPageNr ? currPageNr + 1 : undefined;
    },
  });

  console.debug({ data });

  const assets = data?.pages.reduce((acc, page) => [...acc, ...page.data], []);
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
