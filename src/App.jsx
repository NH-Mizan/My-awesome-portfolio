import { Route, Routes } from "react-router"
import Home from "./page/Home"
import Root from "./Layouts/Root"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
      </Route>


    </Routes>
  )
}

export default App
