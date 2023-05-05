import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config';

export const logInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message);
    }
  }
};

export const logout = (): void => {
  signOut(auth);
};
