import isEmail from 'validator/lib/isEmail';

const PASSWORD_RGXP = /^[a-zA-Z0-9_]*$/;

export default {
  LOGIN: (v) => {
    if (!isEmail(v)) {
      return {
        message: 'Only email',
        status: 'error',
      };
    }
  },
  PASSWORD: [
    (v) => {
      if (v.length <= 7) {
        return {
          message: 'Min 7 latters',
          status: 'error',
        };
      }
    },
    (v) => {
      if (!v.match(PASSWORD_RGXP)) {
        return {
          message: 'Only letters and underscore',
          status: 'error',
        };
      }
    },
  ],
};
