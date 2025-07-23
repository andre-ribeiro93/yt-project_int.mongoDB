import { createContext, useState, type ReactNode } from "react";
import api from "../../api";
import type { AxiosError } from "axios";

interface RegisterContextProps {
  children: ReactNode,
}

export const RegisterContext = createContext({} as any);

export const RegisterStorage = ({ children }: RegisterContextProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  //function to verify if the filled email has already been registered.
  const checkIfEmailExists = async (email: string): Promise<{ exists: boolean }> => {
    try {
      const { data } = await api.post('/user/check-user', { email });

      const exists = data.exists;

      if (exists) {
        console.error('This email has already been registered by another user!');
        return { exists: true };

      } else {
        return { exists: false };
      }

    } catch (error: unknown) {

      const err = error as AxiosError;

      console.error('Email query error!', err.message);

      return { exists: false };
    }
  }

  //function to handle with user login, saving the authentication token.
  const registerUser = async (name: string, email: string, password: string) => {
    try {
      await api.post('/user/sign-up', { name, email, password });

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      return true;

    } catch (error: unknown) {
      
      const err = error as AxiosError

      console.error('Unable to create user!', err.message);

      return false;
    }
  }

  return (
    <RegisterContext.Provider value={{
      name, setName,
      email, setEmail,
      password, setPassword,
      confirmPassword, setConfirmPassword,
      error, setError,
      checkIfEmailExists,
      registerUser
    }}>

      {children}

    </RegisterContext.Provider>
  )
}