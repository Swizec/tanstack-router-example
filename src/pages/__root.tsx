import { RootRoute, Outlet } from "@tanstack/react-router";

function Skeleton() {
  return (
    <div style={{ background: "#f6d55c", padding: ".5em" }}>
      <h1>I'm the skeleton</h1>
      <Outlet />
      <p>This could be a footer</p>
    </div>
  );
}

export const Route = new RootRoute({
  component: Skeleton,
});
