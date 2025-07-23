import { createContext, useEffect, useState, type ReactNode } from "react";
import api from "../../api";
import type { AxiosError } from "axios";

interface LoginContextProps {
  children: ReactNode,
}

export const LoginContext = createContext({} as any);

export const LoginStorage = ({ children }: LoginContextProps) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [error, setError] = useState('');

  //função para puxar os dados do usuário.
  const getUser = (token: string) => {
    api.get('/user/get-user', { headers: { Authorization: `Bearer ${token}` } })

      .then(({ data }) => {

        const userPayload = data.user;

        setUser(userPayload);
        setUserName(userPayload.name);
        setUserID(userPayload.user_id);
        setEmail(userPayload.email);
        setLogin(true);
      })
      .catch((error: AxiosError) => {
        console.error('Unauthenticated user!', error.message);

        if (error.response?.status === 401) {
          logOut();
        }
      })
  }

  //hook para puxar os dados do usuário, após a realização do login, enquanto o token estiver válido e o mesmo se manter logado.
  useEffect(() => {
    if (token) {
      getUser(token);
    }
  }, [token]);

  //função para realização do logOut do usuário.
  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
    setUserID('');
    setUserName('');
    setEmail('');
    setToken('');
  };

  //função para validar o e-mail do usuário e pegar nome do mesmo no processo de login em duas páginas.
  const checkUserByEmail = async (email: string): Promise<{ exists: boolean, name: string | null }> => {
    try {
      const { data } = await api.post('user/check-user', { email });

      const exists = data.exists;
      const name = data.user.name;

      if (exists && name) setUserName(name)

      return { exists, name };

    } catch (error: unknown) {

      const err = error as AxiosError;

      console.error('Email not found!', err.message);

      return {
        exists: false,
        name: null
      };
    }
  };

  //função para lidar com o login do usuário, salvando o token de autenticação.
  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/user/sign-in', { email, password });

      setLogin(true);
      localStorage.setItem('token', data.token); //salva o token no local storage.
      setToken(data.token); //puxando o token
      getUser(data.token); //para puxar os dados do usuário.
      setLogin(true);
      setError('');

    } catch (error: unknown) {

      const err = error as AxiosError

      console.error('Unable to login!', err.message);

      throw new Error('Wrong password. Try again or click Forgot password to reset it.');
    }
  };

  return (
    <LoginContext.Provider value={{
      login,
      user,
      userID,
      email, setEmail,
      password, setPassword,
      userName, setUserName,
      error, setError,
      getUser,
      checkUserByEmail,
      handleLogin,
      logOut,
      token
    }}>

      {children}

    </LoginContext.Provider>
  )
}