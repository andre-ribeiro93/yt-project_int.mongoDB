import styled from "styled-components";

interface modalProps {
  isError?: boolean,
  modal?: boolean,
  margin?: string
}

export const ModalBackground = styled.div<modalProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ modal }) => modal ? 'visible' : 'hidden'};
  position: fixed;
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  width: 95%;
  height: 80%;
  max-width: 960px;
  max-height: 492px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 38px 3px rgba(0,0,0,.14),
              0 9px 46px 8px rgba(0,0,0,.12),
              0 11px 15px -7px rgba(0,0,0,.4);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 28px;
  }
`;

export const ModalHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div<modalProps>`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  };
`;

export const ButtonIcon = styled.img`
  width: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 50px 0;
`;

export const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UploadButton = styled.button<modalProps>`
  min-width: 80px;
  height: 36px;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 2px;
  border: none;
  border-radius: 40px;
  margin-top: 50px;
  padding: 0 16px;
  color: #fff;
  background-color: #0f0f0f;
  cursor: pointer;

  &:hover {
    background-color: #272727;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: #0b57d0 solid 2px;
    outline-offset: 2px;
  }
`;