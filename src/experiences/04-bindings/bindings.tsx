import { createSignal } from "solid-js"

import styles from "./styles.module.css";

const Bindings = () => {
    const [pos, setPos] = createSignal({ x: 0, y: 0 });

    function handleMouseMove(event: MouseEvent) {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    const [num, setNum] = createSignal(0);
    setInterval(() => setNum((num() + 1) % 255), 30)


    const [current, setCurrent] = createSignal("foo");

    return <>
        <h1>04 - bindings</h1>
        <h2>events</h2>
        <div onMouseMove={handleMouseMove}>
            The mouse position is {pos().x} x {pos().y}
        </div>
        <h2>style</h2>
        <div style={{
            color: `rgb(${num()}, 180, ${num()})`,
            "font-weight": 800,
            "letter-spacing": `${num() / 8}px`
        }}
        >
            Some Text
        </div>
        <h2>classList</h2>
        <button
            classList={{ [styles.selected]: current() === 'foo' }}
            onClick={() => setCurrent('foo')}
        >foo</button>
        <button
            classList={{ [styles.selected]: current() === 'bar' }}
            onClick={() => setCurrent('bar')}
        >bar</button>
        <button
            classList={{ [styles.selected]: current() === 'baz' }}
            onClick={() => setCurrent('baz')}
        >baz</button>

    </>
}

export default Bindings