import styled from "styled-components";

import CheckIcon from "../../assets/check.png";

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f4f9;
  padding: 48px 0;

  @media (max-width: 580px) {
    height: 100%;
    padding: 0;
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  padding: 36px;
  border-radius: 28px;
  background-color: #fff;

  @media (max-width: 580px) {
    padding: 36px 24px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 24px;

  h1 {
    font-size: 4.4rem;
    line-height: 1.2;
  }

  span {
    font-size: 1.6rem;
    line-height: 1.5;
    margin-top: 16px;
  }

  @media (max-width: 580px) {
    width: 100%;
    padding: 0;
    margin-bottom: 32px;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding-left: 24px;

  @media (max-width: 580px) {
    width: 100%;
    padding: 0;
  }
`;

interface InputProps {
  isError: boolean,
  margin?: string
}

export const InputContainer = styled.div<InputProps>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-top: ${({ margin }) => margin};
  border-radius: 4px;
  border:${({ isError }) =>
    isError ? '#D93025 solid 0.5px' : '#747775 solid 0.5px'};
  
  &:focus-within {
    border: ${({ isError }) =>
      isError ? '#b3261e solid 2px' : '#0b57d0 solid 2px'};
  }

  input {
    width: 100%;
    height: 28px;
    font-size: 1.6rem;
    font-weight: 400;
    margin: 1px 1px 0 1px;
    padding: 13px 15px;
    color: #1f1f1f;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const TextContent = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    margin-left: 16px;
    padding-top: 4px;
`;

export const DefaultMsg = styled.span`
  color: #444746;
`;

export const ErrorBox = styled.span`
  display: flex;
  color: #b3261e;

  svg {
    margin-right: 8px;
  }
`;

export const GetEmailButton = styled.button`
    color: #0b57d0;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    background-color: transparent;
    border: none;
    margin-top: 9px;
    cursor: pointer;

  &:hover {
    background-color: #ecf2fc;
  }
`;

export const PasswordVisibilityController = styled.label`
  padding-top: 8px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  color: #1f1f1f;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    margin-left: 16px;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #1f1f1f;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;

  &:checked {
    border:2px solid #0b57d0;
    background-image: url(${CheckIcon});
    background-size: 18px 18px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const RegisterButton = styled.button`
  min-width: 80px;
  height: 40px;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 40px;
  margin: 6px 0 0px 24px;
  padding: 0 16px;
  color: #fff;
  background-color: #0b57d0;
  cursor: pointer;

  &:hover {
    background-color: #0e4eb5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;