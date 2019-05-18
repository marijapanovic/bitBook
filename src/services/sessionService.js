const isUserLogged = () => {
  if (localStorage.getItem("id")) {
    return true;
  }
  return false;
};

export default isUserLogged;