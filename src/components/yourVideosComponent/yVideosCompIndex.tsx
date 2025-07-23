import {
  CheckBox,
  CheckboxContainer,
  Description,
  DescriptionContainer,
  InfoContainer,
  PubliDate,
  TextWrapper,
  Thumbnail,
  Title,
  TitleContainer,
  UploadDataContainer,
  VideoContainer
} from "./yVideosCompStyles";

import type { Video } from "../../contexts/userContexts/videoContext";

import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { useDeleteVideos } from "../../hooks/useDeleteVideos";


function YourVideosComp(props: Video) {

  const { isChecked, handleCheckboxSelection } = useDeleteVideos(props);

  function publishedDataFormat(publishedAt: string): string {
    return format(
      new Date(publishedAt),
      'PP',
      { locale: enUS }
    );
  }

  return (
    <VideoContainer>

      <CheckboxContainer>
        <CheckBox
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxSelection}
          id={`checkbox-${props.video_id}`}
        />
      </CheckboxContainer>

      <InfoContainer>

        <Thumbnail alt='thumbnail' src={props.thumbnail} />

        <TextWrapper>
          <TitleContainer>
            <Title>{props.title}</Title>
          </TitleContainer>

          <DescriptionContainer>
            <Description>{props.description}</Description>
          </DescriptionContainer>
        </TextWrapper>

      </InfoContainer>

      <UploadDataContainer>
        <PubliDate>{publishedDataFormat(props.publishedAt)}</PubliDate>
        <Description>Uploaded</Description>
      </UploadDataContainer>

    </VideoContainer>
  )
}


export default YourVideosComp;