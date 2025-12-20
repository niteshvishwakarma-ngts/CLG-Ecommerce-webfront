export const getTokenLocal = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

export const setTokenLocal = (token) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
};

export const removeTokenLocal = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
};
