// todo: import from ENV when needed
// const ANY_API_URL = import.meta.env.VITE_ANY_API_URL;
// console.debug({ ANY_API_URL });

import { useQuery } from "@tanstack/react-query";

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
