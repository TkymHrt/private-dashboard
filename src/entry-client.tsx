import "./index.css";
import 'modern-normalize/modern-normalize.css';
import { hydrate } from "preact";
import { App } from "./app";

hydrate(<App />, document.getElementById("app") as HTMLElement);
