import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.16;
`;

export const Name = styled.span`
  margin-right: 10px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.16;
`;

export const Number = styled.span`
  color: #797c7c;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.16;
`;

export const Button = styled.button`
  width: 60px;
  padding: 3px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  overflow: hidden;
  color: #212121;
  background-color: rgb(243, 243, 243);
  border: 1px solid #3f51b5;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #3f51b5;
    color: white
  }
`;
