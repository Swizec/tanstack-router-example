import { FileRoute, Link, Outlet } from "@tanstack/react-router";
import { wait } from "../wait";

const Component = () => (
  <div style={{ background: "#173f5f", padding: "1em", color: "white" }}>
    <p>I'm the /story body that list stories</p>

    <Outlet />

    <Link to="/story/1">Open story 1</Link>
    <br />
    <Link to="/story/2">Open story 2</Link>
  </div>
);

const PendingComponent = () => <p>Loading ...</p>;

export const Route = new FileRoute("/story").createRoute({
  component: Component,
  pendingComponent: PendingComponent,
  loader: async () => {
    await wait(1.5);
    return {};
  },
});
