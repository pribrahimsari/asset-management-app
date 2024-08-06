import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import { MdCategory } from "react-icons/md";
import Chip from "@mui/joy/Chip";
import { Asset } from "src/types/ApiTypes.ts";
import { useMemo } from "react";
import dayjs from "dayjs";
import IconButton from "@mui/joy/IconButton";
import { AspectRatio, Tooltip } from "@mui/joy";
import { GrNotes } from "react-icons/gr";
import { slugify } from "src/utils/utils.ts";
import { BiSignal2, BiSignal3, BiSignal5 } from "react-icons/bi";
import AssetDeleteButton from "src/components/AssetCard/AssetDeleteButton.tsx";
import AssetViewButton from "src/components/AssetCard/AssetViewButton.tsx";

const AssetCard = ({ asset }: { asset: Asset }) => {
  // format addition date
  const additionDateFormatted = useMemo(() => {
    return asset.addition_time ? dayjs(asset.addition_time).format("MMM D, YYYY") : null;
  }, [asset.addition_time]);

  const createdDateFormatted = useMemo(() => {
    return asset.created_at ? dayjs(asset.created_at).format("MMM D, YYYY") : null;
  }, [asset.created_at]);

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
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1}>
        {/*Avatar + Name + Desc*/}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar
            children={asset.name[0].toUpperCase()}
            sx={{ borderRadius: "sm" }}
            color="success"
            variant="solid"
          />
          <div>
            {/*todo: ellipsify those if you have time*/}
            <Typography>{asset.name}</Typography>
            <Typography level="body-xs">
              {additionDateFormatted
                ? `Added on ${additionDateFormatted}`
                : createdDateFormatted
                ? `Created on ${createdDateFormatted}`
                : "-"}
            </Typography>
          </div>
        </Box>

        {/*Buttons */}
        <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
          <AssetDeleteButton asset={asset} />

          <AssetViewButton asset={asset} />

          {/*<Tooltip title="Add Note/Tags">*/}
          {/*  <IconButton variant="soft" color="danger" size="sm" onClick={function () {}}>*/}
          {/*    <MdOutlineRemoveCircleOutline />*/}
          {/*  </IconButton>*/}
          {/*</Tooltip>*/}
        </Box>
      </Box>

      <Divider component="div" sx={{ my: 2 }} />

      {/* Image about Asset */}
      <Box>
        <AspectRatio ratio="21/9">
          <img alt="" src={`https://picsum.photos/200/300/?noCache=${slugify(asset.type.name)},${asset.id}`} />
        </AspectRatio>
      </Box>

      <Divider component="div" sx={{ my: 2 }} />

      {/* Type Chip + Priority Avatar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1}>
        {/*Type */}
        <Box>
          <Tooltip title={`Asset Type: ${asset.type.name}`}>
            <Chip variant="outlined" startDecorator={<MdCategory />}>
              {asset.type.name}
            </Chip>
          </Tooltip>
        </Box>

        {/* Priority */}
        <Box>
          <Tooltip title={`Priority: ${asset.priority}`}>
            <Chip
              variant="solid"
              startDecorator={
                asset.priority === "Low" ? (
                  <BiSignal2 />
                ) : asset.priority === "Medium" ? (
                  <BiSignal3 />
                ) : (
                  <BiSignal5 />
                )
              }
              color={
                asset.priority === "Low" ? "primary" : asset.priority === "Medium" ? "warning" : "danger"
              }
            >
              {asset.priority}
            </Chip>
          </Tooltip>
        </Box>
      </Box>

      <Divider component="div" sx={{ my: 2 }} />

      {/* DESCRIPTION */}
      <Box>
        <Typography fontSize="sm">
          <b>Description</b>
        </Typography>
        {/*todo: ellipsify if have time*/}
        <Typography fontSize="sm">{asset.description}</Typography>
      </Box>

      <Divider component="div" sx={{ my: 2 }} />

      {/* Tags + Notes */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/*Tags*/}
        <Box>
          <Typography fontSize="sm">Tags:</Typography>
          <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
            {asset.tags?.length ? (
              asset.tags.map((tag) => (
                <Chip key={tag.id} variant="outlined" color="neutral" size="sm" sx={{ borderRadius: "sm" }}>
                  {tag.label}
                </Chip>
              ))
            ) : (
              <Chip variant="outlined" color="neutral" size="sm" sx={{ borderRadius: "sm" }}>
                -
              </Chip>
            )}
          </Box>
        </Box>

        {/*Notes*/}
        <Box>
          <Typography fontSize="sm">Note:</Typography>
          <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
            {asset.notes?.length
              ? asset.notes.map((note) => (
                  <Tooltip key={note.id} title={note.note}>
                    <IconButton variant="plain" color="neutral" size="sm" onClick={function () {}}>
                      <GrNotes />
                    </IconButton>
                  </Tooltip>
                ))
              : "-"}
          </Box>
        </Box>
      </Box>
    </Sheet>
  );
};

export default AssetCard;
