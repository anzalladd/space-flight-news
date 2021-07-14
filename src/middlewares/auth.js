export default function nonAuthMiddlewares({ next }) {
  const token = window.localStorage.getItem("token");
  if (token) return next();
  return next({ name: "auth" });
}
