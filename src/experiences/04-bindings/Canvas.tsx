import "./styles.ref.module.css";

export default function Canvas(props: { ref: HTMLCanvasElement }) {
    return <canvas ref={props.ref} width="256" height="256" />;
}
