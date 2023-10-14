import { DialogContent, DialogTitle, Modal, ModalDialog, Stack } from "@mui/joy";

const AddNewAssetModal = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <DialogTitle>Add New Asset</DialogTitle>
        <DialogContent>Some text</DialogContent>
        {/* inputs */}
        <Stack spacing={2}></Stack>
      </ModalDialog>
    </Modal>
  );
};

export default AddNewAssetModal;
