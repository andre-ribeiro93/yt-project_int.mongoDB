import styled from "styled-components";
import  WCheckIcon  from "../../assets/check-w.png";

export const VideoContainer = styled.div`
  min-height: 84px;
  display: grid;
  grid-template-columns: 32px 1fr 1fr;

  @media (max-width: 834px) {
    grid-template-columns: 32px 2fr 1fr;
  }
`;

export const CheckboxContainer = styled.label`
  min-width: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  padding-top: 8px;
`;
  
export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #909090;
  border-radius: 2px;
  margin-left: 0;
  background-color: transparent;
  cursor: pointer;

  &:checked {
    background-image: url(${WCheckIcon});
    background-size: 15px 15px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1f1f1f;
    border-color: #1f1f1f;
  }
`;

export const InfoContainer = styled.div`
  min-width: 382px;
  display: flex;
  align-items: flex-start;
  padding:8px 0 0 12px;
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: 68px;
  min-width: 120px;
  min-height: 68px;
  border-radius: 8px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  margin-right: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 834px) {
    max-width: 300px;
  }

  @media (max-width: 500px) {
    max-width: 200px;
  }
`;

export const TitleContainer = styled.div`
  height: 24px;
  margin: 8px 0 0 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  color: #1f1f1f;
`;

export const DescriptionContainer = styled(TitleContainer)`
  height: 32px;
  margin-top: 0;
`;

export const Description = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: .011em;
  color: #606060;
`;

export const UploadDataContainer = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  padding: 16px 12px 0;
`;

export const PubliDate = styled(Title)`
  height: 24px;
`;