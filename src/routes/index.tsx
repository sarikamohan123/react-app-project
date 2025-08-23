import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./_root";
import ListView from "./ListView";
import { z } from "zod";
// import type  { AllowedEntity}   from "./detail-params";

const searchSchema = z.object({
  entity: z.string().optional(),
  limit: z.coerce.number().optional(),
  offset: z.coerce.number().optional(),
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ListView,
  validateSearch: (search) => searchSchema.parse(search),
});
