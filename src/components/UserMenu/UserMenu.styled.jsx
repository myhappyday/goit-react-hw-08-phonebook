import styled from '@emotion/styled';
import { RxAvatar } from 'react-icons/rx';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 
  @media screen and (max-width: 300px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 300px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    justify-content: end;
    margin-top: 20px;
  } */
`;

export const Avatar = styled(RxAvatar)`
  margin-right: 4px;
  width: 32px;
  height: 32px;
  color: #3f51b5;
`;

export const UserName = styled.span`
  font-weight: 500;
  margin-right: 12px;
  color: #212121;
`;

export const LogOut = styled.button`
  display: inline-block;
  text-align: center;

  padding: 8px 16px;
  /* width: 60px; */
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  /* line-height: 1.15; */
  text-decoration: none;
  cursor: pointer;
  color: #212121;
  border-radius: 4px;
  border: 1px solid #3f51b5;
  background-color: rgb(243, 243, 243);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* @media screen and (min-width: 320px) {
    width: 112px;
  } */

  :hover,
  :focus {
    color: white;
    background-color: #3f51b5;
  }
`;
