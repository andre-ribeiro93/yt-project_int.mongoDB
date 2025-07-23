import {
  ChannelImage,
  Container,
  ImageBanner,
  TextContainer,
  Title,
  InfoContainer,
  ChannelInfoContainer,
  VideoDescription,
  ImgContainer,
  ButtonContainer,
  ButtonIcon,
  TitleContainer,
  StatisticsInfo,
  ChannelName,
} from "./searchCompStyles";

import DotsIcon from "../../assets/dots.png";

interface Props {
  thumbnail: string,
  title: string,
  videoDetails: string,
  channelImage: string,
  channelName: string,
  description: string
}

function SearchComponent(props: Props) {

  return (
    <Container>

      <ImgContainer>
        <ImageBanner alt='thumbnail' src={props.thumbnail} />
      </ImgContainer>

      <InfoContainer>

        <TitleContainer>

          <TextContainer>
            <Title>{props.title}</Title>
            <StatisticsInfo>{props.videoDetails}</StatisticsInfo>
          </TextContainer>

          <ButtonContainer>
            <ButtonIcon alt='Video Menu Icon' src={DotsIcon} />
          </ButtonContainer>

        </TitleContainer>

        <ChannelInfoContainer>
          <ChannelImage imgUrl={props.channelImage} />
          <ChannelName>{props.channelName}</ChannelName>
        </ChannelInfoContainer>

        <TextContainer>
          <VideoDescription>{props.description}</VideoDescription>
        </TextContainer>

      </InfoContainer>

    </Container >
  )
}

export default SearchComponent;