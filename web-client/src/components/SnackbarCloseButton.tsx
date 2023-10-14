import { IconButton } from "@mui/material";
import { closeSnackbar, SnackbarKey } from "notistack";
import { AiOutlineCloseCircle } from "react-icons/ai";

// ref: https://github.com/iamhosseindhv/notistack/issues/156
const SnackbarCloseButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <AiOutlineCloseCircle fontSize="small" />
    </IconButton>
  );
};

export default SnackbarCloseButton;
