import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/_root";
import { indexRoute } from "./routes/index";

// const rootRoute = createRootRoute({
//   component: RootLayout,
// });

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: ListView,
// });

//Build the route tree(registering the child (indexRoute) to its parent(rootroute))

const routeTree = rootRoute.addChildren([indexRoute]);

// create and export the router
export const router = createRouter({ routeTree });

declare module "@tanStack/react-router" {
  interface Register {
    router: typeof router;
  }
}
