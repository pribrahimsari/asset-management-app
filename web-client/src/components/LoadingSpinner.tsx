import { Box, CircularProgress } from "@mui/joy";
import { RiImage2Fill } from "react-icons/ri";

const LoadingSpinner = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ padding: 20 }}>
      <CircularProgress color="primary" sx={{ "--CircularProgress-size": "200px" }}>
        <RiImage2Fill color="primary" />
      </CircularProgress>
    </Box>
  );
};

export default LoadingSpinner;
