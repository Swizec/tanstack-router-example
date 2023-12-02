import { FileRoute } from "@tanstack/react-router";
import { wait } from "../../wait";

const stories = [
    "Honey never spoils and can remain edible for thousands of years.",
    "Octopuses have three hearts: two pump blood to the gills, while the third pumps it to the rest of the body.",
];

export const route = new FileRoute("/story/$id").createRoute({
    component: ({ useParams }) => {
        const { id } = useParams();

        return (
            <div style={{ background: "#ed553B", padding: "1em" }}>
                <h2>Story {id}</h2>

                {stories[Number(id) - 1]}
            </div>
        );
    },
    pendingComponent: () => <p>Loading ...</p>,
    load: async () => {
        await wait(3);
        return {};
    },
});
