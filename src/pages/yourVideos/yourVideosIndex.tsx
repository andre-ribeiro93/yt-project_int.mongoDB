
import YourVideosComp from "../../components/yourVideosComponent/yVideosCompIndex";
import {
  CheckBox,
  CheckboxContainer,
  Container,
  DeleteButton,
  DeletionSection,
  Divider,
  HeaderDateContainer,
  HeaderTag,
  PageTitleContainer,
  TableHeader,
  VideoTag,
  UserVideosContainer
} from "./yourVideosStyles";

import DeleteModal from "../../components/deleteModal/deleteModalIndex";
import { CaretDown } from "phosphor-react";

import { useContext } from "react";
import { VideoContext, type Video } from "../../contexts/userContexts/videoContext";

import { useDeleteVideos } from "../../hooks/useDeleteVideos";



function YourVideos() {

  const { userVideos, selectedVideos, setIsDeleteModalOpen } = useContext(VideoContext);
  const { handleSelectAll } = useDeleteVideos(userVideos);

  return (
    <Container>

      <PageTitleContainer>
        <h1>Channel Content</h1>
      </PageTitleContainer>

      <DeletionSection isVisible={selectedVideos.length > 0}>
        <span>
          {selectedVideos.length === userVideos.length ?
            'All videos selected' : `${selectedVideos.length} selected`
          }
        </span>

        <Divider />

        <DeleteButton onClick={() => setIsDeleteModalOpen(true)}>
          Delete
        </DeleteButton>
      </DeletionSection>

      <TableHeader>
        <CheckboxContainer>
          <CheckBox
            type='checkbox'
            onChange={handleSelectAll}
            checked={selectedVideos.length === userVideos.length}
          />
        </CheckboxContainer>

        <VideoTag>Video</VideoTag>

        <HeaderDateContainer>
          <HeaderTag>Date</HeaderTag>
          <CaretDown size={14} weight='regular' color='#606074' />
        </HeaderDateContainer>
      </TableHeader>

      <UserVideosContainer>
        {userVideos && userVideos.length > 0 ? (

          userVideos.map((video: Video) => (
            <YourVideosComp
              key={video.video_id}
              {...video}
            />
          ))
        ) : (
          <h1>Your channel has no videos!</h1>
        )}
      </UserVideosContainer>

      <DeleteModal />

    </Container>
  )
}

export default YourVideos;