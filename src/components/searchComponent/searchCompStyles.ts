import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 840px) {
    max-width: none;
  }
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    border-radius: 0;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: fit-content;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: #0f0f0f;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* número máximo de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  font-size: 1.8rem;
  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  width: 24px;
`;

export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const ChannelImage = styled.div <{ imgUrl: string }>`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  margin-right: 8px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
`;

export const StatisticsInfo = styled.span`
  width: fit-content;
  color: #606060;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ChannelName = styled(StatisticsInfo)`
  &:hover {
    color: #0f0f0f;
  }
`;

export const VideoDescription = styled.span`
  color: #606060;
  margin-bottom: 8px;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;