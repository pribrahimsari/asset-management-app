import { AspectRatio, Box, Skeleton } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

const SkeletonAssetCard = () => {
  return (
    <Sheet
      component="li"
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: "sm",
        listStyle: "none",
      }}
    >
      <Box display="flex" flexDirection={"column"} gap={1}>
        <Typography>
          <Skeleton>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
          </Skeleton>
        </Typography>
        <Divider />
        <Box>
          <AspectRatio ratio="21/9">
            <Skeleton variant="overlay">
              <img alt="" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
            </Skeleton>
          </AspectRatio>
        </Box>

        <Divider />

        <Typography>
          <Skeleton>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
          </Skeleton>
        </Typography>

        <Divider />

        <Typography>
          <Skeleton>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
          </Skeleton>
        </Typography>

        <Divider />

        <Typography>
          <Skeleton>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
          </Skeleton>
        </Typography>
      </Box>
    </Sheet>
  );
};

export default SkeletonAssetCard;
