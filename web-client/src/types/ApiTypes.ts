export type PaginatedInfiniteData = {
  pageParams: never;
  pages: GetAssetsQueryResult[];
};

export type GetAssetsQueryResult = {
  data: Asset[];
  links: NavigationLinks;
  meta: PaginationMetaInfo;
};

export type Asset = {
  id: number;
  name: string;
  description: string;
  type_id: number;
  type: AssetType;
  addition_time: string;
  priority: string;
};

export type AssetType = {
  id: number;
  name: string;
};

export type NavigationLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

export type PaginationMetaInfo = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};
