import { useContext, useRef, useState } from "react";
import { RegisterContext } from "../../contexts/userContexts/registerContext";
import { useNavigate } from "react-router-dom";

import {
  RegisterContainer,
  RegisterContent,
  TopContainer,
  Icon,
  MiddleContainer,
  FirstContent,
  SecondContent,
  InputContainer,
  GetEmailButton,
  TextContent,
  BottomContainer,
  RegisterButton,
  PasswordVisibilityController,
  Checkbox,
  ErrorBox,
  DefaultMsg,
} from "./registerStyles";

import GoogleIcon from "../../assets/g-google.png";
import { WarningCircle } from "phosphor-react";
import { useAutoFocus } from "../../hooks/useAutoFocus";

function Register() {

  const [step, setStep] = useState<'name' | 'email' | 'password'>('name');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const autoFocus = useAutoFocus<HTMLInputElement>(step);

  const {
    name, setName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    error, setError,
    checkIfEmailExists,
    registerUser
  } = useContext(RegisterContext);

  const navigate = useNavigate()

  const handleNameForm = () => {
    if (!name.trim()) {
      setError('Enter your name');
      return;
    }
    setError('');
    setStep('email')
  };

  const handleEmailForm = async () => {
    if (!email.trim()) {
      setError('Enter an email address');
      return;
    }
    if (!email.includes('@')) {
      setError("Don't forget to include the '@'");
      return;
    }
    const response = await checkIfEmailExists(email);
    if (response.exists) {
      setError('That email is taken. Try another.');
    } else {
      setError('');
      setStep('password');
    }
  }

  const handleRegisterSubmit = async () => {
    if (!password.trim()) {
      setError('Enter a password');
      return;
    }
    if (password.length < 8) {
      setError('Password must contain at least 8 characters!');
      return;
    }
    if (!confirmPassword.trim()) {
      setError('Confirm your password');
      return;
    }
    if (password !== confirmPassword) {
      setError("Those passwords didn't match. Try again.");
      return;
    }
    const sucess = await registerUser(name, email, password);
    if (sucess) {
      navigate('/login');
    } else {
      setError('Error creating account!')
    }
  }

  return (
    <RegisterContainer>

      {step === 'name' && (
        <RegisterContent>

          <TopContainer>
            <Icon alt='G Google Icon' src={GoogleIcon} />
          </TopContainer>

          <MiddleContainer>
            <FirstContent>
              <h1>Create a Google Account</h1>
              <span>Enter your name</span>
            </FirstContent>

            <SecondContent>
              <InputContainer isError={!!error}> {/* double exclamation to convert the string in boolean and control the style. */}
                <input
                  ref={autoFocus}
                  type='text' value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Name'
                  onKeyDown={(e) => e.key === 'Enter' && handleNameForm()}
                />
              </InputContainer>

              <TextContent>
                {error ? (
                  <ErrorBox>
                    <WarningCircle size={16} weight="fill" />
                    {error}
                  </ErrorBox>
                ) : (
                  ''
                )}
              </TextContent>
            </SecondContent>
          </MiddleContainer>

          <BottomContainer>
            <RegisterButton onClick={handleNameForm}>Next</RegisterButton>
          </BottomContainer>

        </RegisterContent>
      )}

      {step === 'email' && (
        <RegisterContent>

          <TopContainer>
            <Icon alt='G Google Icon' src={GoogleIcon} />
          </TopContainer>

          <MiddleContainer>
            <FirstContent>
              <h1>Use your existing email</h1>
              <span>Enter the email address you want to use for your Google Account</span>
            </FirstContent>

            <SecondContent>
              <InputContainer isError={!!error}> {/* double exclamation to convert the string in boolean and control the style. */}
                <input
                  ref={autoFocus}
                  type='email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email address'
                  onKeyDown={(e) => e.key === 'Enter' && handleEmailForm()}
                />
              </InputContainer>

              <TextContent>
                {error ? (
                  <ErrorBox>
                    <WarningCircle size={16} weight="fill" />
                    {error}
                  </ErrorBox>
                ) : (
                  <DefaultMsg>
                    You'll need to confirm that this email belongs to you
                  </DefaultMsg>
                )}
              </TextContent>
              <GetEmailButton>Get a Gmail address instead</GetEmailButton>
            </SecondContent>
          </MiddleContainer>

          <BottomContainer>
            <RegisterButton onClick={handleEmailForm}>Next</RegisterButton>
          </BottomContainer>

        </RegisterContent>
      )}

      {step === 'password' && (
        <RegisterContent>

          <TopContainer>
            <Icon alt='G Google Icon' src={GoogleIcon} />
          </TopContainer>

          <MiddleContainer>
            <FirstContent>
              <h1>Create a strong password</h1>
              <span>Create a strong password with a mix of letters, numbers and symbols</span>
            </FirstContent>

            <SecondContent>
              <InputContainer isError={!!error}> {/* double exclamation to convert the string in boolean and control the style. */}
                <input
                  ref={autoFocus}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      confirmPasswordRef.current?.focus();
                    }
                  }}
                />
              </InputContainer>

              <InputContainer isError={!!error} margin='24px'> {/* double exclamation to convert the string in boolean and control the style. */}
                <input
                  ref={confirmPasswordRef}
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='Confirm'
                  onKeyDown={(e) => e.key === 'Enter' && handleRegisterSubmit()}
                />
              </InputContainer>

              <TextContent>
                {error ? (
                  <ErrorBox>
                    <WarningCircle size={16} weight="fill" />
                    {error}
                  </ErrorBox>
                ) : (
                  ''
                )}
              </TextContent>

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
            <RegisterButton onClick={handleRegisterSubmit}>Create account</RegisterButton>
          </BottomContainer>

        </RegisterContent>
      )}

    </RegisterContainer>
  )
}

export default Register;