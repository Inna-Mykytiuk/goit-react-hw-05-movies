import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
  text-align: center;
`;

export const CastHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;

  color: #e4c3ad;
  text-shadow: 0 0 15px #eb9486;
  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const CastListItem = styled.li`
  /* flex-basis: calc((100% - 5 * 40px) / 6);
  word-wrap: break-word;
  width: 320px;
  height: 500px; */

  backdrop-filter: blur(10px);
  padding: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 18px;
  border-radius: 4px;
  background: rgba(110, 110, 110, 0.25);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  backdrop-filter: blur(10px);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.03;
  }
`;

export const CastInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
  color: #e4c3ad;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  margin: 0 auto;
`;

export const CastName = styled.h3`
  margin-bottom: 10px;
`;

export const NoCastText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: block;
  width: 100%;
  /* height: 350px; */
  object-fit: cover;
  object-position: center;
`;
