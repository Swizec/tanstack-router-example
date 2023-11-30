import { route as rootRoute } from "./pages/__root";
import { route as IndexRoute } from "./pages/index";
import { route as StoryIdRoute } from "./pages/story/$id";

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute;
    };
    "/story/$id": {
      parentRoute: typeof rootRoute;
    };
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
});

Object.assign(StoryIdRoute.options, {
  path: "/story/$id",
  getParentRoute: () => IndexRoute,
});

export const routeTree = rootRoute.addChildren([IndexRoute, StoryIdRoute]);
