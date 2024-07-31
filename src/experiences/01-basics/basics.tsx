import { createEffect, createMemo, createSignal, Show } from "solid-js"

const Basics = () => {
    // signal
    const [count, setCount] = createSignal(15)

    // derived signal
    const doubleCount = () => 2 * count()

    // outrageously naive fibonacci implementation
    const naiveFib = (n: number): number => {
        if (n < 2) return 1;
        return naiveFib(n - 1) + naiveFib(n - 2)
    }

    const fibMemo = createMemo(() => naiveFib(count()))

    // effect (signal observer called after rendering)
    createEffect(() => {
        console.log("effect ! count is " + count())
    })

    return <>
        <h1>01 - basics</h1>
        <p>signal : counter : {count()}</p>
        <p>Derived sighnal : Double counter : {doubleCount()}</p>
        <p>Memoized read-only signal : memoized fib({count()}) = {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()}</p>
        <button onClick={() => setCount(count => count + 1)}>Add to counter</button>

    </>
}

export default Basics