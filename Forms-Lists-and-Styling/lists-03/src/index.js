import { TodoList } from "./App";
import reactDOM from "react-dom";

const rootElement = document.getElementById("root");
const items = ["Buy Chocolate", "Jogging", "Study"];

reactDOM.render(<TodoList items={items} />, rootElement);
