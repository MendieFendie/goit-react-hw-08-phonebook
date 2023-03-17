const getItLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getItLoggedIn,
  getUserName,
};

export default authSelectors;
