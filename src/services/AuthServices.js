import Parse from 'parse';

const authService = {
  login: async (email, password) => {
    try {
      const user = await Parse.User.logIn(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  },
  register: async (userDetails) => {
    try {
      const user = new Parse.User();
      user.set('username', userDetails.email); // using email as username
      user.set('email', userDetails.email);
      user.set('password', userDetails.password);
      user.set('firstName', userDetails.firstName);
      user.set('lastName', userDetails.lastName);
      const result = await user.signUp();
      return result;
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      await Parse.User.logOut();
      // Additional cleanup or actions after logout, if needed
    } catch (error) {
      throw error;
    }
  }
};

export default authService;
