import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Components from "./Pages/ComponentsPage/Components";
import Playground from "./Pages/Playground/Playground";

export default function App()
{
  return (
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
  )
}