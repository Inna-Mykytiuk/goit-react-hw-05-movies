import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: #e4c3ad;
  width: 280px;
  position: relative;
  border-bottom: 0.5px solid #e4c3ad;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: 0;
  background: transparent;

  padding: 10px 10px;

  &:focus-within {
    border-bottom: 1px solid #eb9486;
    box-shadow: 0 0 15px #eb9486;
    border-radius: 5px;
  }

  /* @include tablet {
    width: 336px;
  }

  @include desktop {
    width: 394px;
  } */
  &::placeholder {
    color: #e4c3ad;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    /* background-color: #0d57aa; */
    color: #eb9486;
    fill: #eb9486;
    stroke: #eb9486;
  }
`;
