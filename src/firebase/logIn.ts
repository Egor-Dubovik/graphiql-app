import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config';

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<string | undefined> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

export const logout = async (): Promise<string | undefined> => {
  try {
    await signOut(auth);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};
