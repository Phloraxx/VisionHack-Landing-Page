import { createFileRoute } from "@tanstack/react-router";
import Homepage from "@/landing-page/homepage/page";

export const Route = createFileRoute("/_public/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Homepage />
    </div>
  );
}
