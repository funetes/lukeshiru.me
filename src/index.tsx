import { render } from "preact";
import { registerSW } from "virtual:pwa-register";
import { App } from "./components/App";
import "./styles/index.css";

// eslint-disable-next-line functional/no-expression-statement
registerSW();

// eslint-disable-next-line functional/no-conditional-statement
if (
	typeof globalThis !== "undefined" &&
	(["#resume", "#cv"].includes(globalThis.location.hash) ||
		["/resume", "/cv"].includes(globalThis.location.pathname))
) {
	// eslint-disable-next-line functional/no-expression-statement
	globalThis.print();
}

// eslint-disable-next-line functional/no-expression-statement
console.log(`Want to checkout the source? https://lshi.ru/my-website-source`);

// eslint-disable-next-line functional/no-expression-statement
render(<App />, document.body);
