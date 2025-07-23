import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  max-width: 300px;
  max-height: 100vh;
  top: 11px;
  right: 76px;
  padding: 8px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
`;

export const UserDataContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`;

export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border-radius: 50%;
  font-size: 2rem;
  color: #fff;
  background-color: #aa47bc;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 8px;
  color: #065fde;
  cursor: pointer;
`;

export const UINavigationContent = styled.div`
  max-height: calc(100vh - 130px);
  overflow-y: auto;
`;

export const Divider = styled.hr`
  width: auto;
  margin: 8px 0;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
`;


export const MenuItem = styled.div`
  min-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  span {
    width: 240px;
    font-weight: 500;
    font-size: 1.4rem;
    padding-top: 0;
    margin-left: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: flex-start;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  box-sizing: border-box;
  width: 20px;
`;

export const ArrowIcon = styled(ButtonIcon)`
  width: 18px;
  margin: 0 6px 0 14px;
`;