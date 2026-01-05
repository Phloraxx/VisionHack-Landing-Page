import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/_public")({
  loader: async () => {
    return {
      currentUser: null,
    };
  },
});
