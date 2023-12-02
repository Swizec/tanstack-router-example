import { FileRoute, Link, Outlet } from "@tanstack/react-router";
import { wait } from "../wait";

export const route = new FileRoute("/").createRoute({
    component: () => (
        <div style={{ background: "#173f5f", padding: "1em", color: "white" }}>
            <p>I'm the index body</p>

            <Outlet />

            <Link to="/story/1">Open story 1</Link>
            <br />
            <Link to="/story/2">Open story 2</Link>
        </div>
    ),
    pendingComponent: () => <p>Loading ...</p>,
    loader: async () => {
        await wait(1.5);
        return {};
    },
});
