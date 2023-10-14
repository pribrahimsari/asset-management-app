import AssetList from "src/components/AssetList.tsx";
import { Box } from "@mui/joy";
import { makeStyles } from "tss-react/mui";
import Header from "src/components/Layout/Header.tsx";
import Sidebar from "src/components/Layout/Sidebar.tsx";
import StickySubHeader from "src/components/Layout/StickySubHeader.tsx";

// thanks to TSS-React lib for CSS in TS solution as in MUI v4
const useStyles = makeStyles()(() => ({
  mainBox: {
    pt: {
      xs: "calc(12px + var(--Header-height))",
      md: 3,
    },
    pb: {
      xs: 2,
      sm: 2,
      md: 3,
    },
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    // height: "100dvh", // <-- breaks InfiniteScrolling
    gap: 1,
    overflow: "auto",
  },
}));

const App = () => {
  const { classes, cx } = useStyles();

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />

      <Box component="main" className={cx(classes.mainBox, "MainContent")}>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            paddingTop: "var(--Header-height)",
          }}
        >
          <StickySubHeader />
          <Box
            sx={{
              padding: "10px",
            }}
          >
            <AssetList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
