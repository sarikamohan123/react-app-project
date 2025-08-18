import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "./_root-layout";

export const rootRoute = createRootRoute({
  component: RootLayout,
});
