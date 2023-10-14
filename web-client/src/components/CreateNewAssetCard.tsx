import { Button, Card, Stack } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useState } from "react";
import CreateNewAssetModal from "src/components/CreateNewAssetModal.tsx";

const CreateNewAssetCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card invertedColors variant="soft" color="success" size="sm" sx={{ boxShadow: "none" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography level="title-sm">Add New Asset</Typography>
          <MdAddPhotoAlternate />
        </Stack>
        <Typography level="body-xs">
          An interface that allows users to <b>add new assets</b>.
        </Typography>
        <Button
          size="sm"
          variant="solid"
          startDecorator={<MdAddPhotoAlternate />}
          onClick={() => setOpen(true)}
          disabled={open}
        >
          Add
        </Button>
      </Card>

      <CreateNewAssetModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CreateNewAssetCard;
