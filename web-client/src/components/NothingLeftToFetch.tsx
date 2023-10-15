import Divider from "@mui/joy/Divider";
import { Box } from "@mui/joy";

const NothingLeftToFetch = ({ totalAssetsCount }: { totalAssetsCount: number }) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Divider />
      <Divider>
        <p>Nothing left to fetch (Total: {totalAssetsCount} assets)</p>
      </Divider>
      <Divider />
    </Box>
  );
};

export default NothingLeftToFetch;
