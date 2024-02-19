import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile } from "./api";

export function useUploadFile() {
  const queryClient = useQueryClient();
  const {
    isLoading: isUploading,
    mutate: uploadBook,
    isSuccess,
  } = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
      console.log("Book added");
    },
    onError: (err) => console.log(err.message),
  });

  return { isUploading, uploadBook, isSuccess };
}
