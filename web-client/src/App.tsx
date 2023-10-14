// todo: import from ENV when needed
// const ANY_API_URL = import.meta.env.VITE_ANY_API_URL;
// console.debug({ ANY_API_URL });

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchAssets = async () => {
  const response = await fetch("http://localhost:8000/v1/assets?page=1");
  return response.json();
};

const App = () => {
  const { data } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  console.debug({ data });

  // adds eventListener to on scroll of document
  // triggers fetching after scroll calculations
  useEffect(() => {
    // instead of useQuery's loading state, this can be faster
    let fetching = false;

    const onScroll = (event: Event) => {
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

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        console.log("trigger fetch");
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
        {data.data.map((asset) => (
          <li key={asset.id}>
            <p>
              <b>{asset.name}</b>
            </p>
            <p>{asset.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
