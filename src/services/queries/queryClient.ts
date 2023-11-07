import { MutationCache, QueryCache, QueryClient } from "react-query";
import toast from "react-hot-toast";

export const QueryClientStore = new QueryClient({
  mutationCache: new MutationCache({
    onError: (err) => {
      toast.error("This is an error");
    },
  }),

  queryCache: new QueryCache({
    onError: (err) => {
      toast.error("This is an error");
    },
  }),
});
