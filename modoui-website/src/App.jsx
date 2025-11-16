import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Components from "./Pages/ComponentsPage/Components";
import Playground from "./Pages/Playground/Playground";

export default function App()
{
  const [theme, setTheme] = useState("dark");
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("homepage");

  useEffect(() => {
    const body = document.querySelector("body");
    theme === 'dark' ? body.classList.add("darkMode") : body.classList.remove("darkMode")
  }, [theme])

  return (
      <Routes>
        <Route exact path="/" element={<Homepage theme={theme} setTheme={setTheme} page={page} setPage={setPage} />} />
        <Route path="/Components" element={<Components theme={theme} setTheme={setTheme} page={page} setPage={setPage} item={item} setItem={setItem} search={search} setSearch={setSearch} />} />
        <Route path="/Playground" element={<Playground theme={theme} setTheme={setTheme} page={page} setPage={setPage} item={item} />} />
      </Routes>
  )
}