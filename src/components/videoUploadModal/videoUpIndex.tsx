import {
  ButtonContainer,
  ButtonIcon,
  InputWrapper,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalHeaderButtons,
  UploadButton,
  UploadButtonContainer
} from "./videoUpStyles";

import FormField from "../UploadFormField/formFieldIndex";

import { useContext, useState } from "react";
import { VideoContext } from "../../contexts/userContexts/videoContext";
import { useAutoFocus } from "../../hooks/useAutoFocus";
import { useNavigate } from "react-router-dom";

import FeedbackIcon from "../../assets/feedback.png";
import CloseIcon from "../../assets/close.png";




function VideoUpload() {

  const {
    thumbnail, setThumbnail,
    title, setTitle,
    description, setDescription,
    isModalOpen, setIsModalOpen,
    createVideos
  } = useContext(VideoContext);

  const autoFocus = useAutoFocus<HTMLInputElement>(isModalOpen);

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validateAndsetErros = () => {
    const newError: { [key: string]: string | null } = {};

    if (!thumbnail.trim()) {
      newError.thumbnail = 'Enter a thumbnail URL';
    }
    if (!title.trim()) {
      newError.title = 'Enter a title';
    }

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const sendVideo = () => {
    if (!validateAndsetErros()) {
      return;
    }
    createVideos(title, description, thumbnail, new Date());
    setErrors({});
    setTitle('');
    setDescription('');
    setThumbnail('');
    setIsModalOpen(false);
    navigate('/yourvideos');
  }

  return (
    <ModalBackground modal={isModalOpen}>

      <ModalContainer>


        <ModalHeader>
          <h1>Upload videos</h1>

          <ModalHeaderButtons>
            <ButtonContainer margin='0 15px 0 0'>
              <ButtonIcon alt='Feedback Icon' src={FeedbackIcon} />
            </ButtonContainer>

            <ButtonContainer
              margin='0 15px 0 0'
              onClick={() => {
                setIsModalOpen(false);
                setErrors({})
              }}>
              <ButtonIcon alt='Close Icon' src={CloseIcon} />
            </ButtonContainer>
          </ModalHeaderButtons>
        </ModalHeader>

        <InputWrapper>
          <FormField
            ref={autoFocus}
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder='Thumbnail URL'
            error={errors.thumbnail}
          />

          <FormField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
            error={errors.title}
          />

          <FormField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Video description'
            error={errors.description}
            onKeyDown={(e) => e.key === 'Enter' && sendVideo()}
          />
        </InputWrapper>

        <UploadButtonContainer>
          <UploadButton onClick={sendVideo}>
            Save
          </UploadButton>
        </UploadButtonContainer>

      </ModalContainer>
    </ModalBackground>
  )
}

export default VideoUpload;