import styled from "styled-components";

export const CategoriesWrapper = styled.div <{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? 'calc(100% - 240px)' : 'calc(100% - 72px)')};
  height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* compatibilidade Safari */
    
  @media (max-width: 834px) {
    width: 100%;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: left;
  margin: 0 24px;
  overflow-x: auto;

  scroll-behavior: smooth;

  /* esconder scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
  scrollbar-width: none;
`;

export const CategoryBox = styled.div <{selected: boolean}>`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  padding: 0 12px;
  border-radius: 8px;
  background-color:${({selected}) => selected ? '#0f0f0f' : '#f2f2f2'};
  cursor: pointer;

  span {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: ${({selected}) => selected ? '#f2f2f2' : '#0f0f0f'};
    white-space: nowrap;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const ArrowButton = styled.button <{ position: 'left' | 'right' }>`
  position: fixed;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  z-index: 10;
  ${({ position }) => position}: 0;

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }

  &:hover > div {
    background-color: #e5e5e5
  }
`;

export const ButtonContent = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #0f0f0f;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

