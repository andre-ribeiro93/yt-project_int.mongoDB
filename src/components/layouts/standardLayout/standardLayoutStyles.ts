import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResponiveMenuWrapper = styled.div`
  display: none;

  @media (max-width: 834px) {
    display: block;
    width: 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const MenuWrapper = styled.div <{ openMenu: boolean }>`
  width: ${({openMenu}) => (openMenu ? '240px' : '72px')};

  @media (max-width: 834px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow-x: auto;
`;