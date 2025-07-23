import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextCardHover,
  TextContainer,
  Title,
  TitleContainer
} from "./videoCompStyles";

interface Props {
  thumbnail: string,
  channelImage: string,
  title: string,
  channelName: string,
  videoDetails: string
}

function VideoComponent(props: Props) {

  return (
    <Container>
      <ImageBanner alt='thumbnail' src={props.thumbnail} />

      <TitleContainer>
        <ChannelImage imgUrl={props.channelImage} />

        <TextContainer>
          <Title>{props.title}</Title>
          <TextCardHover>{props.channelName}</TextCardHover>
          <TextCard>{props.videoDetails}</TextCard>
        </TextContainer>
        
      </TitleContainer>

    </Container>
  )
}

export default VideoComponent;