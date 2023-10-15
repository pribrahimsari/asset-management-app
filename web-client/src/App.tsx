import AssetList from "src/components/AssetList.tsx";
import { Box } from "@mui/joy";
import { makeStyles } from "tss-react/mui";
import Header from "src/components/Layout/Header.tsx";
import Sidebar from "src/components/Layout/Sidebar.tsx";
import StickySubHeader from "src/components/Layout/StickySubHeader.tsx";
import { useAssetContext } from "src/context/AssetContext.tsx";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import LoadingSpinner from "src/components/LoadingSpinner.tsx";

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
  const { isInitialLoading, isRefetching } = useAssetContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const triggerRefetchingSnackbarMsg = () => {
      enqueueSnackbar("updating the list...", { variant: "info" });
    };

    isRefetching && triggerRefetchingSnackbarMsg();
  }, [enqueueSnackbar, isRefetching]);

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
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <StickySubHeader />
          <Box
            sx={{
              padding: "10px",
            }}
          >
            {isInitialLoading ? <LoadingSpinner /> : <AssetList />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
