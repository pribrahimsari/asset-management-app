import React, { createContext, useContext, useMemo, useState } from "react";
import { InfiniteQueryObserverBaseResult, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAssets, getAssetTypes } from "src/api/apiService.ts";
import { Asset, AssetType, PaginatedInfiniteData } from "src/types/ApiTypes.ts";
import { AssetSortOptionsTypes } from "src/types/CustomTypes.tsx";

export type AssetContextType = {
  assets: Asset[];
  hasNextPage?: boolean;
  fetchNextPage: InfiniteQueryObserverBaseResult["fetchNextPage"];
  isFetching?: boolean;
  isInitialLoading?: boolean;
  isRefetching?: boolean;
  isFetchingNextPage?: boolean;
  allAssetTypes: AssetType[];
  listedAssetTypes: AssetType[];
  sortBy: AssetSortOptionsTypes;
  setSortBy: (option: AssetSortOptionsTypes) => void;
};

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export const AssetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortBy, setSortBy] = useState<AssetSortOptionsTypes>("id-desc");

  const { data, hasNextPage, fetchNextPage, isFetching, isRefetching, isInitialLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["assets", sortBy],
      queryFn: ({ pageParam }) => getAssets({ pageParam, sortBy }),
      getNextPageParam: (lastPage) => {
        const lastPageNr = lastPage.meta.last_page;
        const currPageNr = lastPage.meta.current_page;
        return currPageNr < lastPageNr ? currPageNr + 1 : undefined;
      },
      refetchOnWindowFocus: false,
    });

  const assets = useMemo(() => {
    // Why type assertion here?
    // issue on react-query v4: https://github.com/TanStack/query/issues/3065
    return (
      (data as PaginatedInfiniteData)?.pages?.reduce((acc, page) => [...acc, ...page.data], [] as Asset[]) ||
      []
    );
  }, [data]);

  //--------------------------

  const listedAssetTypes = useMemo(() => {
    return assets.reduce((acc, asset) => {
      //is available in accumulator?
      const i = acc.findIndex((t) => t.id === asset.type_id);
      if (i > -1) {
        // available in accumulator:
        acc[i].assets_count++;
      } else {
        // n/a in acc
        acc.push({ id: asset.type_id, name: asset.type.name, assets_count: 1 });
      }
      return acc;
    }, [] as AssetType[]);
  }, [assets]);

  //--------------------------

  // Get Asset Types with asset counts --> use in Type Select + Statistics
  const { data: allAssetTypesData } = useQuery({
    queryKey: ["assetTypes"],
    queryFn: getAssetTypes,
    refetchOnWindowFocus: false,
  });
  const allAssetTypes = useMemo(() => allAssetTypesData?.data || [], [allAssetTypesData?.data]);

  //--------------------------

  return (
    <AssetContext.Provider
      value={{
        assets,
        hasNextPage,
        fetchNextPage,
        isFetching,
        isRefetching,
        isInitialLoading,
        isFetchingNextPage,
        allAssetTypes,
        listedAssetTypes,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

// since the application is small, we do not need to separate this context for now
// so--> suppress only export components warning
// eslint-disable-next-line react-refresh/only-export-components
export const useAssetContext = () => {
  const context = useContext(AssetContext);

  if (!context) throw new Error("Context must be defined");

  return context;
};
