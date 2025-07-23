import styled from 'styled-components';

interface Props {
  margin?: string,
  backgroundColor?: string,
  hoverColor?: string,
}

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff
`;

export const Container = styled.header`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* compatibilidade Safari */

  @media (max-width: 580px) {
   padding: 0;
   justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 90px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div<Props>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#e5e5e5'};
  };

  @media (max-width: 580px) {
   margin: 0 10px 0 8px;
  }
`;

export const UserButtonContainer = styled(ButtonContainer)<Props>`
  width: 32px;
  height: 32px;
  background-color: #aa47bc;
  color: #fff;

  &:hover {
    background-color: #aa47bc;
  }

  @media (max-width: 580px) {
    margin-right: 8px;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const ResponsiveSearch = styled.div`
  display: none;

  @media (max-width: 580px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  background-color: #fff;
  color: #0f0f0f;
  font-size: 16px;
`;

export const SearchButton = styled.div`
  width: 64px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 0 40px 40px 0;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const HeaderButtons = styled.div`
  min-width: fit-content;
  display: flex;
  justify-content: right;
`;

export const CreateButton = styled.div`
  height: 36px;
  border-radius: 40px;
  padding: 0 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: #f2f2f2;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
  }
`;

export const SignButton = styled.div`
  width: 90px;
  height: 35px;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: none;
  cursor: pointer;

  &:hover {
    background-color: #def1ff;
    border: none;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
    color: #065fd4;
  }
`;