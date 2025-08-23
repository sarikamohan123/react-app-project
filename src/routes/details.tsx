import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./_root";
import EntityDetail from "../pages/EntityDetail";
import { DetailsParamsSchema } from "./detail-params";
import NotFound from "../pages/NotFound";

export const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$entity/$id",
  parseParams: (raw) => DetailsParamsSchema.parse(raw),
  stringifyParams: (p) => ({ ...p, id: String(p.id) }),
  component: EntityDetail,
  errorComponent: () => <NotFound />,
});
