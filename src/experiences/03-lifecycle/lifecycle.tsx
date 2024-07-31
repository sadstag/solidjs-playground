import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js"

type Photo = {
    title: string;
    thumbnailUrl: string;
}

const Lifecycle = () => {


    const [photos, setPhotos] = createSignal<Photo[]>([]);

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        setPhotos(await res.json());
    });

    const [count, setCount] = createSignal(0);

    const timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));

    return <>
        <h1>03 - lifecycle</h1>
        <h2>onMount()</h2>
        <div class="photos">
            <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                <figure>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <figcaption>{photo.title}</figcaption>
                </figure>
            }</For>
        </div>
        <h2>onCleanup()</h2>
        <div>Count: {count()}</div>
    </>;

}

export default Lifecycle