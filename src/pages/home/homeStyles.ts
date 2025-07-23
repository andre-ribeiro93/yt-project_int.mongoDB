import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 50px;
  padding: 24px 24px 0;
  margin-top: 56px;

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0;
  margin-bottom: 16px;
`;

export const TitleContent = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 8px;

  span {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
    color: #0f0f0f;
  }
`;

export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: right;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  width: 24px;
`;

export const TitleImg = styled.img`
  width: 21px;
  height: 21px;
  min-height: 20px;
  min-width: 20px;
  margin-right: 8px;
`;

export const ShortsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 20px;
  padding: 0px 24px 0;
  
  @media (max-width: 834px) {
    grid-template-columns: repeat(3, 1fr);
  }

    @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;