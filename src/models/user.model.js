export default class UserModel {
  static registerValidation(payload) {
    let isFormValid = true;
    let message = '';
    if (typeof payload.email !== 'string' || payload.length < 4) {
      isFormValid = false;
    }
    if (payload.username.length < 4 || typeof payload.username !== 'string') {
      isFormValid = false;
    }
    if (payload.password.length < 6) {
      isFormValid = false;
    }
    if (!isFormValid) {
      message = 'Check the form for errors!';
    }

    return {
      isFormValid,
      message,
    };
  }

  static loginValidation(payload) {
    let isFormValid = true;
    let message = '';
    if (typeof payload.email !== 'string' || payload.length < 4) {
      isFormValid = false;
    }
    if (payload.password.length < 6) {
      isFormValid = false;
    }
    if (!isFormValid) {
      message = 'Check the form for errors!';
    }

    return {
      isFormValid,
      message,
    };
  }
}
