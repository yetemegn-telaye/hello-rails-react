// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import ReactDOM from "react-dom"

function App() {
  return <div>Hello World</div>
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);