const pkg = {
    name: "solid-js",
    version: 1,
    speed: "⚡️",
    website: "https://solidjs.com",
};

function Info(props: typeof pkg) {
    return (
        <p>
            The <code>{props.name}</code> package is {props.speed} fast. Download
            version {props.version} from{" "}
            <a href={`https://www.npmjs.com/package/${props.name}`}>npm</a> and{" "}
            <a href={props.website}>learn more here</a>
        </p>
    );
}

export function Spread() {
    return <Info {...pkg} />;
}