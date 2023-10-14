import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAsset } from "src/api/apiService.ts";
import { useState } from "react";

const BasicCreateDeleteButtons = () => {
  const queryClient = useQueryClient();

  const [assetId, setAssetId] = useState("");

  const deleteMutation = useMutation({
    mutationKey: ["deleteAsset"],
    mutationFn: deleteAsset,
    // todo onSuccess: notistack message
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
        // NOTE: first, I tried to only refetch related paginated query result
        //  - but at the edge points, it duplicated the results,
        // refetchPage: (page, index, allPages) =>
        //   (page as GetAssetsQueryResult).data.findIndex((asset) => asset.id === Number(variables.assetId)) >
        //   -1,
      });
    },
  });

  return (
    <div>
      <input type="text" value={assetId} onChange={(e) => setAssetId(e.target.value)} />
      <button onClick={() => assetId && deleteMutation.mutate({ assetId })}>Delete</button>
    </div>
  );
};

export default BasicCreateDeleteButtons;
