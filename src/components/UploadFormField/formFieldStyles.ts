import styled from "styled-components";

export const FormFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const InputContainer = styled.div <{ isError: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
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

export const ErrorBox = styled.span`
  display: flex;
  color: #b3261e;

  svg {
    margin-right: 8px;
  }
`;