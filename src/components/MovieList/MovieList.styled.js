import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  text-align: center;

  color: #e4c3ad;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  margin: 0;
  text-shadow: 0 0 15px #eb9486;
`;
export const StyledSectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  color: #000;

  height: 100%;
  background: rgba(110, 110, 110, 0.25);
  -webkit-box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  padding-left: 40px;
  padding-right: 40px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #000;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  text-decoration: none;
  color: rgb(255, 255, 255);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;

  color: #e4c3ad;

  &:hover,
  &:focus {
    color: #eb9486;
    text-shadow: 0 0 15px #eb9486;
  }
`;
