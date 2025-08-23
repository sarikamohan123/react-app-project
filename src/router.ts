import { createRouter, NotFoundRoute } from "@tanstack/react-router";
import { rootRoute } from "./routes/_root";
import { indexRoute } from "./routes/index";
import { detailsRoute } from "./routes/details";
import NotFound from "./pages/NotFound";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
});

//Build the route tree(registering the child (indexRoute) to its parent(rootroute))

const routeTree = rootRoute.addChildren([indexRoute, detailsRoute]);

// create and export the router
export const router = createRouter({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
