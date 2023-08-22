import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #797c7c;
  margin-bottom: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    color: #3f51b5;
  }
`;

export const Input = styled.input`
  width: 445px;
  height: 36px;
  font-size: 16px;
  line-height: 1.16;
  color: #3f51b5;
  margin-top: 8px;
  padding-left: 12px;
  border: 1px solid rgb(191, 192, 192);
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    outline: transparent;
    border: 1px solid #3f51b5;
  }

  :focus + label {
    color: #3f51b5;
  }
`;
