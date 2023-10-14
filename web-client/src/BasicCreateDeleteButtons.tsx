import { useMutation } from "@tanstack/react-query";
import { createAsset, deleteAsset } from "src/api/apiService.ts";

const BasicCreateDeleteButtons = () => {
  const createMutation = useMutation({ mutationFn: createAsset });
  const deleteMutation = useMutation({ mutationFn: deleteAsset });

  return (
    <div>
      <button onClick={() => createMutation.mutate()}>Create New</button>
      &nbsp;
      <button onClick={() => deleteMutation.mutate()}>Delete</button>
    </div>
  );
};

export default BasicCreateDeleteButtons;
