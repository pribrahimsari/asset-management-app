import IconButton from "@mui/joy/IconButton";
import { RiEyeFill } from "react-icons/ri";
import {
  Box,
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Tooltip,
} from "@mui/joy";
import { Asset } from "src/types/ApiTypes.ts";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAssetDetails } from "src/api/apiService.ts";
import LoadingSpinner from "src/components/LoadingSpinner.tsx";

const AssetViewButton = ({ asset }: { asset: Asset }) => {
  const [open, setOpen] = useState(false);

  const assetId = asset.id.toString();

  const { data, isLoading } = useQuery({
    queryKey: ["assetDetails", assetId],
    queryFn: () => getAssetDetails({ assetId }),
    refetchOnWindowFocus: false,
    enabled: open,
  });

  const assetDetails = useMemo(() => {
    return data?.data;
  }, [data?.data]);

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

              {isLoading && <LoadingSpinner />}

              {!isLoading && !assetDetails && <p>Error</p>}

              {!isLoading && assetDetails && (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <br />
                  <i>-- Data was fetched from db for this asset --</i>
                </Box>
              )}
            </DialogContent>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default AssetViewButton;
