import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  TextContainer,
  UploadButton,
  UploadButtonContainer
} from "./deleteModalStyles";

import { useContext } from "react";
import { useDeleteVideos } from "../../hooks/useDeleteVideos";

import { VideoContext } from "../../contexts/userContexts/videoContext";


function DeleteModal() {

  const {
    isDeleteModalOpen, setIsDeleteModalOpen,
    selectedVideos,
    userVideos
  } = useContext(VideoContext);

  const { handleDeleteVideo } = useDeleteVideos(userVideos)

  function warningMsg() {

    if (selectedVideos.length === userVideos.length) {
      return ('Are you sure you want to delete all videos?');
    } else if (selectedVideos.length > 1) {
      return (`Are you sure you want to delete these ${selectedVideos.length} videos?`);
    } else {
      return ('Are you sure you want to delete this video?');
    }
  }

  return (
    <ModalBackground
      modal={isDeleteModalOpen}
      onClick={() => setIsDeleteModalOpen(false)}
    >
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h1>Detete Videos</h1>
        </ModalHeader>

        <TextContainer>
          <span>
            {warningMsg()}
          </span>
        </TextContainer>
        <UploadButtonContainer>
          <UploadButton
            variant='white'
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </UploadButton>
          <UploadButton
            variant='black'
            onClick={handleDeleteVideo}
          >
            Delete
          </UploadButton>
        </UploadButtonContainer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default DeleteModal;