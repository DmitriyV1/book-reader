import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBook } from "./api";

export function useAddBook() {
  const queryClient = useQueryClient();

  const { mutate: addCustomBook, isLoading } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });

  return { isLoading, addCustomBook };
}
