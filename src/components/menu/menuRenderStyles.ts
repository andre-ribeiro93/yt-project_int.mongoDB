import styled from "styled-components";

export const MenuBackground = styled.div <{ openMenu: boolean }>`
  background-color: transparent;

  @media (max-width: 834px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: left;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    pointer-events: ${({ openMenu }) => openMenu ? 'auto' : 'none'};
    visibility: ${({ openMenu }) => openMenu ? 'visible' : 'hidden'};
    opacity: ${({ openMenu }) => openMenu ? '1' : '0'};
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
`

export const Container = styled.div <{ openMenu: boolean }>`
  width: ${({ openMenu }) => openMenu ? '240px' : '72px'};
  height: calc(100vh - 56px);
  box-sizing: border-box;
  padding: ${({ openMenu }) => openMenu ? '6px 13px' : '0 4px'};
  display: flex;
  align-items: ${({ openMenu }) => openMenu ? 'safe' : 'center'};
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  top: 56px;
  background-color: #fff;
  z-index: 2100;
  

  @media (max-width: 834px) {
    height: 100vh;
    width: 240px;
    top: 0;
    left: 0;
    position: fixed;
    transform: ${({ openMenu }) => openMenu ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

export const LogoContainer = styled.div`
  display: none;

  @media (max-width: 834px) {
    display: flex;
    align-items: center;
    margin: 0 0 17px 2px;
  }
`;

export const LogoImg = styled.img`
  width: 90px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: transparent;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color:#e5e5e5;
  };
`;

export const MenuItem = styled.div <{ openMenu: boolean }>`
  width: 98%;
  min-height: ${({openMenu}) => openMenu? '40px' : '72px'};
  border-radius: 10px;
  padding: ${({openMenu}) => openMenu? '0 12px' : '16px 0 14px'};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
  align-items: center;
  justify-content: ${({openMenu}) => openMenu? 'flex-start' : 'center'};
  cursor: pointer;

  span {
    width: ${({ openMenu }) => openMenu ? '240px' : '64px'};
    font-weight: 500;
    font-size: ${({openMenu}) => openMenu? '1.4rem' : '1rem'};
    padding-top: ${({openMenu}) => openMenu? '0' : '8px'};
    margin-left: ${({openMenu}) => openMenu? '24px' : '0'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};
  }


  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const Divider = styled.hr`
  margin: 12px 0;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  max-height: 2.2rem;
  padding: 0 12px;
  color: #0f0f0f;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.2rem;
`;

export const TitleButton = styled.div`
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;