import styled from "styled-components";
import WCheckIcon from "../../assets/check-w.png";


export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageTitleContainer = styled.div`
  padding: 0 32px 12px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 32px;
    padding-top: 23px;
    color: #1f1f1f;
  }
`;

export const DeletionSection = styled.div<{ isVisible: boolean }>`
  height: ${({ isVisible }) => isVisible ? '64px' : '0'};
  display: flex;
  align-items: center;
  padding: 0 32px;
  background-color: #1f1f1f;
  overflow: hidden;
  transition: height 0.3s ease;

  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const Divider = styled.div`
  height: 48px;
  width: 1px;
  margin: 8px 23px;
  background-color: #363636;
`;

export const DeleteButton = styled.button`
    border: none;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #fff;
    }
`;

export const TableHeader = styled.div`
  height: 47px;
  display: grid;
  grid-template-columns: 32px 1fr 1fr;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  padding: 0 32px;

  @media (max-width: 834px) {
    grid-template-columns: 32px 2fr 1fr;
  }
`;

export const CheckboxContainer = styled.label`
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: left;
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

export const HeaderTag = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #606074;
  margin-right: 4px;
  margin-left: 12px;
`;

export const VideoTag = styled(HeaderTag)`
  min-width: 366px;
`;

export const HeaderDateContainer = styled.div`
  display: flex;
  min-width: 68px;
`;

export const UserVideosContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: solid #e5e5e5;
  border-width: 1px 0;
  padding: 0 32px;

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1f1f1f;
    align-self: center;
  }
`;