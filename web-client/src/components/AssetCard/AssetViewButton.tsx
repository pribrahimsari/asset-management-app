import IconButton from "@mui/joy/IconButton";
import { RiEyeFill } from "react-icons/ri";
import { DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, ModalOverflow, Tooltip } from "@mui/joy";
import { Asset } from "src/types/ApiTypes.ts";
import { useState } from "react";

const AssetViewButton = ({ asset }: { asset: Asset }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="View">
        <IconButton variant="outlined" color="primary" size="sm" onClick={() => setOpen(true)}>
          <RiEyeFill />
        </IconButton>
      </Tooltip>

      {/*  Asset Details Modal  */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalOverflow>
          <ModalDialog sx={{ minWidth: { xs: "95%", md: "40%", lg: "40%", xl: "35%" } }}>
            <ModalClose variant="plain" sx={{ m: 1 }} />

            <DialogTitle>{asset.name}</DialogTitle>

            <DialogContent>
              <p>Description</p>
              <div>{asset.description}</div>
              todo: other details fetch
            </DialogContent>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default AssetViewButton;
