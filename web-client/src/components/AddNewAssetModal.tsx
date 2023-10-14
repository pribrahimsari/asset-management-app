import {
  Button,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Stack,
  Textarea,
} from "@mui/joy";

const AddNewAssetModal = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  // name
  // description
  // type
  // addition date
  // priority

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog sx={{ minWidth: { xs: "95%", md: "40%", lg: "40%", xl: "35%" } }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <DialogTitle>Add New Asset</DialogTitle>
        {/* FORM */}
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Name *</FormLabel>
            <Input size="sm" name="name" autoFocus required placeholder="Name for asset" error={false} />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              size="sm"
              name="description"
              placeholder="Description for asset"
              minRows={2}
              maxRows={4}
            />
          </FormControl>

          {/* todo */}
          <FormControl>
            <FormLabel>Type *</FormLabel>
            <Select required name="type" variant="outlined" placeholder="Asset Type" size="sm">
              <Option value="dog">Dog</Option>
              <Option value="cat">Cat</Option>
            </Select>
          </FormControl>

          {/* todo: is it possible to find a date/datetime picker for JoyUI */}
          <FormControl>
            <FormLabel>Addition Date</FormLabel>
            <Input
              name="addition_time"
              type="date"
              size="sm"
              error={false}
              slotProps={{
                input: {
                  min: "2020-06-07T00:00",
                  max: "2023-10-31T00:00",
                },
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Priority *</FormLabel>
            <Select required name="priority" placeholder="Priority" size="sm">
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </FormControl>

          <Button type="submit">Add</Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default AddNewAssetModal;
