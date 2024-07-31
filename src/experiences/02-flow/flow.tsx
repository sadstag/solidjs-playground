import { createSignal, ErrorBoundary, For, Index, Match, Show, Switch } from "solid-js"
import { Dynamic, Portal } from "solid-js/web";

import "./styles.css";

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
    red: RedThing,
    green: GreenThing,
    blue: BlueThing
}

const Broken = () => {
    throw new Error("Oh No");
    return <>Never Getting Here</>
}

const Flow = () => {

    // conditional rendering
    const [loggedIn, setLoggedIn] = createSignal(false);
    const toggle = () => setLoggedIn(!loggedIn())

    // signal over an array
    const [cats, setCats] = createSignal([
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ]);

    // switch
    const [x, setX] = createSignal(3);

    // Dynamic
    const [selected, setSelected] = createSignal<keyof typeof options>("red");



    return <>
        <h1>02 - flow</h1>
        <h2>conditional rendering</h2>
        <Show
            when={loggedIn()}
            fallback={<button onClick={toggle}>Log in</button>}
        >
            <button onClick={toggle}>Log out</button>
        </Show>
        <h2>Using For : the signal is the index of the element</h2>
        <ul>
            <For each={cats()}>{(cat, i) =>
                <li>
                    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
                        {i() + 1}: {cat.name}
                    </a>
                </li>
            }</For>
        </ul>
        <h2>Using Index : the signal is the value of the element</h2>
        <ul>

            <Index each={cats()}>{(cat, i) =>
                <li>
                    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat().id}`}>
                        {i + 1}: {cat().name}
                    </a>
                </li>
            }</Index>
        </ul>
        <h2>Switch</h2>
        <button onClick={() => setX(x => x + 1)}>Inc X</button>
        <Switch fallback={<p>{x()} is between 5 and 10</p>}>
            <Match when={x() > 10} >
                <p>{x()} is greater than 10</p>
            </Match>
            <Match when={5 > x()}>
                <p>{x()} is less than 5</p>
            </Match>
        </Switch>
        <h2>Dynamic component instead of long switch </h2>
        <select value={selected()} onInput={e => setSelected(e.currentTarget.value as keyof typeof options)}>
            <For each={Object.keys(options)}>{
                color => <option value={color}>{color}</option>
            }</For>
        </select>
        <Dynamic component={options[selected()]} />
        <h2>Portal</h2>
        <div class="app-container">
            <p>Just some text inside a div that has a restricted size.</p>
            <Portal>
                <div class="popup">
                    <h1>Popup</h1>
                    <p>Portal : Outside of the root container.</p>
                </div>
            </Portal>
        </div>
        <h2>ErrorBoundary</h2>
        <ErrorBoundary fallback={err => err}>
            <Broken />
        </ErrorBoundary>
    </>
}

export default Flow