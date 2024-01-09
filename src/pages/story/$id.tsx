import { FileRoute } from "@tanstack/react-router";
import { wait } from "../../wait";

const stories = [
    "Honey never spoils and can remain edible for thousands of years.",
    "Octopuses have three hearts: two pump blood to the gills, while the third pumps it to the rest of the body.",
];

const Component = () => {
    const { id } = Route.useParams();

    return (
        <div style={{ background: "#ed553B", padding: "1em" }}>
            <h2>Story {id}</h2>

            {stories[Number(id) - 1]}
        </div>
    );
}

const PendingComponent = () => <p>Loading story ...</p>

export const Route = new FileRoute('/story/$id').createRoute({
    component: Component,
    pendingComponent: PendingComponent,
    loader: async () => {
        await wait(3);
        return {};
    },
});
