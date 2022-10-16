import { createContext } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

const themes = {
	light: {
		foreground: "#000",
		background: "#eee"
	},
	dark: {
		foreground: "#fff",
		background: "#222"
	}
}
const ThemeContext = createContext(themes.light)

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Main />
		</div>
	)
}

export default App
