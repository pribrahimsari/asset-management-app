import { Box, Button, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Tooltip } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import { Asset } from "src/types/ApiTypes.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAsset } from "src/api/apiService.ts";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import { RiDeleteBinFill } from "react-icons/ri";

const AssetDeleteButton = ({ asset }: { asset: Asset }) => {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const deleteMutation = useMutation({
    mutationKey: ["deleteAsset"],
    mutationFn: deleteAsset,
    onError: (error: AxiosError) => {
      console.error({ error });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      enqueueSnackbar(error?.response?.data?.message || error.message || "Error", { variant: "error" });
    },
    onSuccess: () => {
      setOpen(false);
      queryClient
        .invalidateQueries({
          queryKey: ["assets"],
          // NOTE: first, I tried to only refetch related paginated query result
          //  - but at the edge points, it duplicated the results,
          // refetchPage: (page, index, allPages) =>
          //   (page as GetAssetsQueryResult).data.findIndex((asset) => asset.id === Number(variables.assetId)) >
          //   -1,
        })
        .then(() => {
          enqueueSnackbar("Successfully deleted", { variant: "success" });
        });
    },
  });

  return (
    <>
      <Tooltip title="Delete">
        <IconButton variant="outlined" color="danger" size="sm" onClick={() => setOpen(true)}>
          <RiDeleteBinFill />
        </IconButton>
      </Tooltip>

      {/*  Are you sure dialog  */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ minWidth: { xs: "95%", md: "40%", lg: "40%", xl: "35%" } }}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>
            This action cannot be undone. Are you sure you want to delete this asset:
            <br />
            <b>{asset.name}</b>
          </DialogContent>

          <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
            <Box width="50%">
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                disabled={deleteMutation.isLoading}
                loading={deleteMutation.isLoading}
                onClick={() => {
                  setOpen(false);
                }}
              >
                No, Cancel
              </Button>
            </Box>

            <Box width="50%">
              <Button
                fullWidth
                variant="solid"
                color="danger"
                onClick={() => {
                  deleteMutation.mutate({ assetId: asset.id.toString() });
                }}
                disabled={deleteMutation.isLoading}
                loading={deleteMutation.isLoading}
              >
                Yes, Delete
              </Button>
            </Box>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AssetDeleteButton;
