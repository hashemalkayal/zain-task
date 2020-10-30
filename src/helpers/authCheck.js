// Usually this is done in a more secure way, but will set it in a local storage for demonstration

export function getAuthState() {
  const user = sessionStorage.getItem("authUser");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}

export function setAuthState(user) {
  if (user) {
    sessionStorage.setItem("authUser", JSON.stringify(user));
  }
}
