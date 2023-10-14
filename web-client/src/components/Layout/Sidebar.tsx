import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "./layoutUtils";
import { GiLinkedRings } from "react-icons/gi";
import { Tooltip } from "@mui/joy";

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: "fixed",
          md: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />

      {/* Overlay for mobile */}
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />

      {/* Logos */}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <img src="/triangle.svg" width="50px" alt="" />
          <img src="/logo.svg" alt="" />
        </Box>

        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>

      <Divider />

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        {/*<Card invertedColors variant="soft" color="success" size="sm" sx={{ boxShadow: "none" }}>*/}
        {/*  <Stack direction="row" justifyContent="space-between" alignItems="center">*/}
        {/*    <Typography level="title-sm">Used space</Typography>*/}
        {/*    <IconButton size="sm">*/}
        {/*      <MdDarkMode />*/}
        {/*    </IconButton>*/}
        {/*  </Stack>*/}
        {/*  <Typography level="body-xs">Your team has used 80% of your available space. Need more?</Typography>*/}
        {/*  <LinearProgress variant="outlined" value={80} determinate sx={{ my: 1 }} />*/}
        {/*  <Button size="sm" variant="solid">*/}
        {/*    Upgrade plan*/}
        {/*  </Button>*/}
        {/*</Card>*/}
      </Box>

      <Divider />

      {/* Bottom Avatar */}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar variant="outlined" size="sm" src="https://avatars.githubusercontent.com/u/36038198" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Ibrahim SARI</Typography>
          <Typography level="body-xs">pr.ibrahimsari@gmail.com</Typography>
        </Box>
        <Tooltip arrow placement="right" title="Open My Website in New Tab">
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => {
              window.open("https://isari.me", "_blank", "noreferrer");
            }}
          >
            <GiLinkedRings />
          </IconButton>
        </Tooltip>
      </Box>
    </Sheet>
  );
}
