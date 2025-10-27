import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Components from "./Pages/ComponentsPage/Components";
import Playground from "./Pages/Playground/Playground";

export default function App()
{
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const body = document.querySelector("body");
    theme === 'dark' ? body.classList.add("darkMode") : body.classList.remove("darkMode")
  }, [theme])

  console.log(theme)

  return (
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Playground" element={<Playground theme={theme} setTheme={setTheme} />} />
      </Routes>
  )
}