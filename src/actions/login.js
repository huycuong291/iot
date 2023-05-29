export const setLogin = (isLogin) => {
  window.isLogin = isLogin;
  //  console.log("you clicked", user.name);
  return {
    payload: isLogin,
  };
};
