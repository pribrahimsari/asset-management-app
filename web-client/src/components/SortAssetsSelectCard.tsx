import { Card, Option, Select, Stack } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { FaSortAlphaDown } from "react-icons/fa";
import { useAssetContext } from "src/context/AssetContext.tsx";
import { assetSortOptions } from "src/data/constants.ts";

const SortAssetsSelectCard = () => {
  const { sortBy, setSortBy } = useAssetContext();

  return (
    <Card variant="soft" color="warning" size="sm" sx={{ boxShadow: "none" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="title-sm">Sort</Typography>
        <FaSortAlphaDown />
      </Stack>
      <Typography level="body-xs">
        You can sort assets by id, type, name, addition date or priority
      </Typography>
      <Select
        variant="outlined"
        color="warning"
        placeholder="Sort By"
        startDecorator={<FaSortAlphaDown />}
        size="sm"
        value={sortBy}
        onChange={(_e, newValue) => newValue && setSortBy(newValue)}
        // joy ui is still in beta
        // select list box index error
        // fix temporarily
        slotProps={{
          listbox: {
            sx: {
              zIndex: "10000!important",
            },
          },
        }}
        // sx={{ width: 240 }}
      >
        {Object.entries(assetSortOptions).map(([key, val]) => (
          <Option key={key} value={key}>
            {val}
          </Option>
        ))}
      </Select>
    </Card>
  );
};

export default SortAssetsSelectCard;
