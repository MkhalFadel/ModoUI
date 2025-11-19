import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Components from "./Pages/ComponentsPage/Components";
import Playground from "./Pages/Playground/Playground";
import { getStorage } from "./sessionStorage";
import { componentsList } from "./Pages/ComponentsPage/ComponentsRegistry";

export default function App()
{
  const [theme, setTheme] = useState("dark");
  const [item, setItem] = useState(() => {
    const compName = getStorage();
    const storedComp = componentsList.filter(c => c.name === compName)
    return storedComp[0];
  });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("homepage");
    
    console.log(item)
  useEffect(() => {
    const body = document.querySelector("body");
    theme === 'dark' ? body.classList.add("darkMode") : body.classList.remove("darkMode")
  }, [theme])

  return (
      <Routes>
        <Route path="/" element={<Homepage theme={theme} setTheme={setTheme} page={page} setPage={setPage} />} />
        <Route path="/components" element={<Components theme={theme} setTheme={setTheme} page={page} setPage={setPage} item={item} setItem={setItem} search={search} setSearch={setSearch} />} />
        <Route path="/playground" element={<Playground theme={theme} setTheme={setTheme} page={page} setPage={setPage} item={item} />} />
      </Routes>
  )
}