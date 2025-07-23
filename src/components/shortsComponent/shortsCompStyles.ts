import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 8px 0 0;
`;

export const ImageBanner = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  overflow-x: hidden;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: #0f0f0f;
  margin: 12px 0 4px 0;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 linhas */
  -webkit-box-orient: vertical;
`;

export const TextCard = styled.span`
  width: fit-content;
  color: #606060;
  font-size: 1.4rem;
`;