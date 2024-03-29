import { redirect } from "react-router-dom";

export function requireAuth() {
  const isLoggedIn = getUserLoggedStatus();
  if (isLoggedIn === "false") {
    throw redirect("/login?message=You must log in first");
  }
  return null;
}

export function getUserLoggedStatus() {
  return window.localStorage.getItem("loggedIn");
}
