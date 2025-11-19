export function saveStorage(component)
{
   sessionStorage.setItem("component", JSON.stringify(component));
}

export function getStorage()
{
   return JSON.parse(sessionStorage.getItem("component"))
}