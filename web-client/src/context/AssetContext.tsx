import React, { createContext, useContext, useMemo } from "react";
import { InfiniteQueryObserverBaseResult, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAssets, getAssetTypes } from "src/api/apiService.ts";
import { Asset, AssetType, PaginatedInfiniteData } from "src/types/ApiTypes.ts";

export type AssetContextType = {
  assets: Asset[];
  hasNextPage?: boolean;
  fetchNextPage: InfiniteQueryObserverBaseResult["fetchNextPage"];
  isFetching?: boolean;
  allAssetTypes: AssetType[];
};

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export const AssetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["assets"],
    queryFn: getAssets,
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
        allAssetTypes,
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
