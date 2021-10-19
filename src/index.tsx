import react from "react"
import reactDOM from "react-dom"
import App from "./App"


const runApp  = () :void => {
// @ts-ignore
  if(module.hot) {
    // @ts-ignore
    module.hot.accept()
    reactDOM.render(<App/>, document.getElementById("root"))

  }
}



runApp()