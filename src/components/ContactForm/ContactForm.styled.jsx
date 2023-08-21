import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 20px 10px;
  border: 1px solid #212121;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #797c7c;
  margin-bottom: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    color: #3f51b5
    // color: rgba(15, 7, 238, 0.8);
  }
`;

export const Input = styled.input`
  width: 420px;
  height: 36px;
  font-size: 16px;
  line-height: 1.16;
  // background-color: inherit;
  color: #3f51b5;
  margin-top: 8px;
  padding-left: 12px;
  border: 1px solid rgb(191, 192, 192);
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    outline: transparent;
    border: 1px solid #3f51b5
    // box-shadow: rgba(63, 81, 181, 0.8) 0px 0px 3px 1px;
  }

  :focus + label {
    color: #3f51b5;
  }
`;

export const Button = styled.button`
  width: 130px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  overflow: hidden;
  color: #212121;
  background-color: rgb(243, 243, 243);
  border: 1px solid #3f51b5;
  border-radius: 4px;
  transition: all 250ms ease-Out;

  :hover {
    color: white;
    background-color: #3f51b5
    // box-shadow: inset rgba(15, 7, 238, 0.4) 0px 0px 16px 2px;
  }
`;
