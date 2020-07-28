import { App } from "./components/App";
import "./styles/index.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, functional/no-conditional-statement
if ((module as any).hot) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, functional/no-expression-statement
	require("preact/debug");
}

// eslint-disable-next-line functional/no-conditional-statement
if (
	typeof window !== "undefined" &&
	(["#resume", "#cv"].includes(window?.location?.hash) ||
		["/resume", "/cv"].includes(window?.location?.pathname))
) {
	// eslint-disable-next-line functional/no-expression-statement
	window?.print();
}

// eslint-disable-next-line functional/no-expression-statement
console?.log?.(
	"Do you want to checkout the source? https://lshi.ru/my-website-source"
);

export default App;
