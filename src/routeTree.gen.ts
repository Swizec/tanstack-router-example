import { Route as rootRoute } from "./pages/__root"
import { Route as StoryImport } from "./pages/story"
import { Route as IndexImport } from "./pages/index"
import { Route as StoryIdImport } from "./pages/story/$id"

const StoryRoute = StoryImport.update({
  path: "/story",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

const StoryIdRoute = StoryIdImport.update({
  path: "/$id",
  getParentRoute: () => StoryRoute,
} as any)

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/story": {
      preLoaderRoute: typeof StoryImport
      parentRoute: typeof rootRoute
    }
    "/story/$id": {
      preLoaderRoute: typeof StoryIdImport
      parentRoute: typeof StoryRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  StoryRoute.addChildren([StoryIdRoute]),
])
