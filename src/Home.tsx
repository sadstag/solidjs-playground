import { Index, JSX, type Component } from 'solid-js';

import { A } from '@solidjs/router';

export const pages = ['basics', 'flow', 'lifecycle', 'bindings']


const App: Component = () => {
  return <>
    <h1>Solidjs playground</h1>
    <nav>
      <ul>
        <Index<string[], JSX.Element> each={pages}>
          {(page, index) => {
            const route = `/${(index + 1).toString().padStart(2, '0')}-${page()}`
            return <li>
              <A href={route}>{route}</A>
            </li>
          }}
        </Index>
      </ul>
    </nav>
  </>
};

export default App;
