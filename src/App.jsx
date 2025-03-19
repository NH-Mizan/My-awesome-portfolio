import { Route, Routes } from "react-router"
import Home from "./page/Home"
import Root from "./Layouts/Root"
import About from "./page/About"
import Details from "./page/Projects/ProjectDetails/Details"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
        <Route path="/details/:id" element={<Details />}></Route>


    </Routes>
  )
}

export default App
