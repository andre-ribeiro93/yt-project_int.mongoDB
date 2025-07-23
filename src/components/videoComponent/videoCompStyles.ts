import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 8px 32px 0;
`;

export const ImageBanner = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
`;

export const ChannelImage = styled.div <{ imgUrl: string }>`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  margin: 12px 12px 0 0;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  overflow-x: hidden;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: #0f0f0f;
  margin: 12px 0 4px 0;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextCard = styled.span`
  width: fit-content;
  color: #606060;
  font-size: 1.4rem;
`;

export const TextCardHover = styled(TextCard)`
  &:hover {
    color: #0f0f0f;
  }
`;