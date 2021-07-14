export default function commonMiddlewares({ next }) {
  const token = window.localStorage.getItem("token");
  if (!token) return next();
  return next({ name: "home" });
}
