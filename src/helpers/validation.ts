export interface IAuthFormErrors {
  fullName?: string;
  email?: string;
  password?: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  const hasMinimumLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

  return hasMinimumLength && hasLetter && hasDigit && hasSpecialCharacter;
};

export const checkFields = (
  email: string,
  password?: string,
  fullName?: string
): IAuthFormErrors => {
  const errors = {} as IAuthFormErrors;

  if (email && !validateEmail(email)) {
    errors.email = 'Incorrect email';
  }
  if (password && !validatePassword(password)) {
    errors.password =
      'Password must contain minimum 8 symbols, at least one letter, one digit, one special characte';
  }
  if (fullName && !fullName.trim().includes(' ')) {
    errors.fullName = 'Please enter your full name through space (John Doe)';
  }

  return errors;
};
