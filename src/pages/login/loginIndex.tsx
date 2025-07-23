import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/userContexts/loginContext";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  LoginContent,
  TopContainer,
  Icon,
  MiddleContainer,
  FirstContent,
  SecondContent,
  InputContainer,
  ForgotButton,
  TextContent,
  BottomContainer,
  LoginButton,
  PasswordVisibilityController,
  Checkbox,
  EmailReturnButton,
  UserIcon,
  ErrorBox
} from "./loginStyles";

import GoogleIcon from "../../assets/g-google.png";
import ArrowDownIcon from "../../assets/arrow-down.png";
import { WarningCircle } from "phosphor-react";
import type { AxiosError } from "axios";
import { useAutoFocus } from "../../hooks/useAutoFocus";

function Login() {

  const {
    handleLogin,
    checkUserByEmail,
    email, setEmail,
    password, setPassword,
    userName, setUserName,
    error, setError
  } = useContext(LoginContext);

  const navigate = useNavigate()

  const [step, setStep] = useState<'email' | 'password'>('email');
  const [showPassword, setShowPassword] = useState(false);

  const autoFocus = useAutoFocus<HTMLInputElement>(step);

  const handleEmailSubmit = async () => {
    const isValid = await checkUserByEmail(email);
    if (!email.trim()) {
      setError('Enter an email address');
      return;
    }
    if (!email.includes('@')) {
      setError("Don't forget to include the '@'");
      return;
    }
    if (isValid.exists) {
      if (isValid.name) setUserName(isValid.name);
      setStep('password');
      setError('');
    } else {
      setError('Email not found');
      return;
    }
  };

  const handlePasswordSubmit = async () => {
    if (password.length === 0) {
      setError('Enter a password');
      return;
    }

    try {
      await handleLogin(email, password);
      setError('');
      setEmail('');
      setPassword('');
      setUserName('');
      navigate('/');

    } catch (error: unknown) {
      const err = error as AxiosError

      setError(err.message || 'An unexpected error accured');
    }
  };

  return (
    <LoginContainer>

      {step === 'email' && (
        <LoginContent>

          <TopContainer>
            <Icon alt='G Google Icon' src={GoogleIcon} />
          </TopContainer>

          <MiddleContainer>
            <FirstContent>
              <h1>Sign in</h1>
              <span>with your Google Account to continue to YouTube. This account will be available to other Google apps in the browser.</span>
            </FirstContent>

            <SecondContent>
              <InputContainer isError={!!error}>
                <input
                  ref={autoFocus}
                  type='email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
                />
              </InputContainer>

              {error ? (
                <ErrorBox>
                  <WarningCircle size={16} weight="fill" />
                  {error}
                </ErrorBox>
              ) : (
                ''
              )}

              <ForgotButton>Forgot email?</ForgotButton>
              <TextContent>
                <span>Not your computer? Use Guest mode to sign in privately.</span>
                <a href=''>Learn more about using Guest mode</a>
              </TextContent>
            </SecondContent>
          </MiddleContainer>

          <BottomContainer>
            <LoginButton
              variant='transparent'
              onClick={() => navigate('/register')}
            >
              Create account
            </LoginButton>
            <LoginButton
              variant='blue'
              onClick={handleEmailSubmit}
            >
              Next
            </LoginButton>
          </BottomContainer>

        </LoginContent>
      )}

      {step === 'password' && (
        <LoginContent>

          <TopContainer>
            <Icon alt='G Google Icon' src={GoogleIcon} />
          </TopContainer>

          <MiddleContainer>
            <FirstContent>
              {userName ? <h1>Hi, {userName}</h1> : <h1>Hi</h1>}
              <EmailReturnButton onClick={() => setStep('email')}>
                <UserIcon>{userName ? userName[0].toUpperCase() : '?'}</UserIcon>
                <span>{email}</span>
                <img alt='arrow down icon' src={ArrowDownIcon} />
              </EmailReturnButton>
            </FirstContent>

            <SecondContent>
              <InputContainer isError={!!error}>
                <input
                  ref={autoFocus}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Senha'
                  onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                />
              </InputContainer>

              {error ? (
                <ErrorBox>
                  <WarningCircle size={16} weight="fill" />
                  {error}
                </ErrorBox>
              ) : (
                ''
              )}

              <PasswordVisibilityController>
                <Checkbox
                  type='checkbox'
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span>Show password</span>
              </PasswordVisibilityController>
            </SecondContent>
          </MiddleContainer>

          <BottomContainer>
            <LoginButton variant='transparent'>Forgot Password</LoginButton>
            <LoginButton variant='blue' onClick={handlePasswordSubmit}>Login</LoginButton>
          </BottomContainer>

        </LoginContent>
      )}

    </LoginContainer>
  )
}

export default Login;