import { FileRoute, redirect } from "@tanstack/react-router";

// File-based nested routes require matching parent/child names
// This tiny example has nowt to show on index, so we redirect
export const Route = new FileRoute("/").createRoute({
  component: () => <p>redirecting</p>,
  loader: () => redirect({ to: "/story" }),
});
