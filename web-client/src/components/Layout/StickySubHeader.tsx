import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

const StickySubHeader = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: {
          sm: -100,
          md: 0,
        },
        paddingTop: "10px",
        backgroundColor: "background.body",
        zIndex: 9995,
      }}
    >
      <Box
        sx={{
          px: {
            xs: 2,
            md: 6,
          },
        }}
      >
        <Typography
          level="h2"
          sx={{
            mt: 1,
            mb: 2,
          }}
        >
          🎨 Asset Management Application
        </Typography>
      </Box>

      <Divider />
    </Box>
  );
};

export default StickySubHeader;
