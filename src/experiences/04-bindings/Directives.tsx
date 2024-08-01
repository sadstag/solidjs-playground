import { createSignal, onCleanup, Show } from "solid-js";
import "./styles.directives.module.css";

export default function clickOutside(el: HTMLElement, accessor: () => () => void) {
    const onClick = (e) => !el.contains(e.target) && accessor()?.();
    document.body.addEventListener("click", onClick);

    onCleanup(() => document.body.removeEventListener("click", onClick));
}


export function Directives() {
    const [show, setShow] = createSignal(false);

    return (
        <Show
            when={show()}
            fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>}
        >
            { /* @ts-ignore */}
            <div class="modal" use:clickOutside={() => setShow(false)}>
                Some Modal
            </div>
        </Show>
    );
}

