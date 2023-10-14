// todo: import from ENV when needed
// const ANY_API_URL = import.meta.env.VITE_ANY_API_URL;
// console.debug({ ANY_API_URL });

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchAssets = async (page = 1) => {
  const response = await fetch(`http://localhost:8000/v1/assets?page=${page}`);
  return response.json();
};

const App = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["assets"],
    queryFn: ({ pageParam = 1 }) => fetchAssets(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const lastPageNr = lastPage.meta.last_page;
      const currPageNr = lastPage.meta.current_page;
      return currPageNr < lastPageNr ? currPageNr + 1 : undefined;
    },
  });

  console.debug({ data });

  // adds eventListener to on scroll of document
  // triggers fetching after scroll calculations
  useEffect(() => {
    // instead of useQuery's loading state, this can be faster
    let fetching = false;

    const onScroll = async (event: Event) => {
      // scrollHeight: whole content height
      // scrollTop: how far away from content's top / other saying: how you did scroll
      // clientHeight: todo
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

      // if (
      //   window.innerHeight + document.documentElement.scrollTop !==
      //   document.documentElement.offsetHeight /*|| isLoading*/
      // ) {
      //   return;
      // }
      //   todo: better calculation

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.1) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <h1>Asset Management Application</h1>
      <ul>
        {/* NOTE: since we used useInfiniteQuery, data type has changed */}
        {/* there are paginated queries and their results are represented under pages array of useInfiniteQuery's result */}
        {data?.pages.map((page) =>
          page.data.map((asset) => (
            <li key={asset.id}>
              <p>
                <b>{asset.name}</b>
              </p>
              <p>{asset.description}</p>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};

export default App;
