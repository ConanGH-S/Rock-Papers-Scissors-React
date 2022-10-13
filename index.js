import ReactDOM from "react-dom/client";
import App from './app'
import './styles.css'

const $root = document.querySelector('#root')
const root = ReactDOM.createRoot($root)

root.render(<App/>)