import { onCleanup, onMount } from "solid-js";
import Canvas from "./Canvas";


export const Refs = () => {
    let canvas: HTMLCanvasElement;
    onMount(() => {
        const ctx = canvas.getContext("2d");
        if (ctx) {
            let frame = requestAnimationFrame(loop);

            function loop(t: number) {
                frame = requestAnimationFrame(loop);

                const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);

                for (let p = 0; p < imageData.data.length; p += 4) {
                    const i = p / 4;
                    const x = i % canvas.width;
                    const y = (i / canvas.height) >>> 0;

                    const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
                    const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
                    const b = 128;

                    imageData.data[p + 0] = r;
                    imageData.data[p + 1] = g;
                    imageData.data[p + 2] = b;
                    imageData.data[p + 3] = 255;
                }

                ctx!.putImageData(imageData, 0, 0);
            }

            onCleanup(() => cancelAnimationFrame(frame));

        }

    });

    // @ts-ignore
    return <Canvas ref={canvas} />
}
