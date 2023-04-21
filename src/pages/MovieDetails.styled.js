import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #000;

  text-decoration: none;
  color: rgb(255, 255, 255);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 5px;
  background-color: #e4c3ad;
  transition: all 0.2s ease-in-out, background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #eb9486;
    color: #ffffff;
    box-shadow: 0 0 15px #eb9486;
  }
`;
