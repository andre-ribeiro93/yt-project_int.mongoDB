import styled from "styled-components";

export const FooterContent = styled.div`
  width:100%;
  padding: 16px 0 0 12px;

  span {
    display: inline-block;
    font-size: 1.3rem;
    color: #606060;
    font-weight: 500;
    line-height: 1.8rem;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const CopyrightContainer = styled(FooterContent)`
  display: flex;
  column-gap: 2px;
  padding-bottom: 16px;
  
  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: #909090;
  }
`;
