import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../services/api/src/trpc/router";

export const trpc = createTRPCReact<AppRouter>();
