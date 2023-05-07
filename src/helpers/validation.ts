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
  return password.length >= 6;
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
    errors.password = 'Password must contain at least 6 characters';
  }
  if (fullName && !fullName.trim().includes(' ')) {
    errors.fullName = 'Please enter your full name through space (John Doe)';
  }

  return errors;
};
