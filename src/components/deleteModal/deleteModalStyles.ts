import styled from "styled-components";

interface Props {
  modal?: boolean,
  variant?: 'black' | 'white',
}

const variants = {
  black: {
    color: '#fff',
    backgoundColor: '#0f0f0f',
    backgroundHover: '#272727',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
  },

  white: {
    color: '#0f0f0f',
    backgoundColor: '#f5f8fd',
    backgroundHover: '#f5f8fd',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  }
};

export const ModalBackground = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ modal }) => modal ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
`;

export const ModalContainer = styled.div`
  width: 95%;
  height: 80%;
  max-width: 960px;
  max-height: 300px;
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

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 24px 0;

  span {
    font-size: 1.6rem;
    font-weight: 400;
    color: #1f1f1f;
  }
`;

export const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UploadButton = styled.button<Props>`
  min-width: 80px;
  height: 36px;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 2px;
  border: none;
  border-radius: 40px;
  margin: 50px 10px 0;
  padding: 0 16px;
  color: #fff;
  background-color: #0f0f0f;
  cursor: pointer;

  ${({ variant = 'black' }) => {
    const v = variants[variant];
    return `
      color: ${v.color};
      background-color: ${v.backgoundColor};

      &:hover {
        background-color: ${v.backgroundHover};
        box-shadow: ${v.boxShadow};
      }
    `;
  }}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: #0b57d0 solid 2px;
    outline-offset: 2px;
  }
`;