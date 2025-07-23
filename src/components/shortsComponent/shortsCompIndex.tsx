import {
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
} from "./shortsCompStyles";

interface Props {
  thumbnail: string,
  title: string,
  videoDetails: string
}

function ShortsComponent(props: Props) {

  return (
    <Container>
      <ImageBanner alt='thumbnail' src={props.thumbnail} />

      <TextContainer>
        <Title>{props.title}</Title>
        <TextCard>{props.videoDetails}</TextCard>
      </TextContainer>

    </Container>
  )
}

export default ShortsComponent;