import { createEffect, createSignal } from "solid-js";

import { render } from "solid-js/web";

function Counter() {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 2;

  setInterval(() => setCount(count() + 1), 1000);

  createEffect(() => {
    console.log(doubleCount());
  });

  return <div>Count: {doubleCount()}</div>;
}

render(() => <Counter />, document.getElementById("app")!);
