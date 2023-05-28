import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './config';

export const sendPasswordReset = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message);
    }
  }
};
