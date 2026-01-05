import {
  Outlet,
  createRootRoute,
} from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="scroll-smooth">
        <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
