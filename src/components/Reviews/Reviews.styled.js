import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
`;

export const ReviewHeader = styled.h3`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;

  color: #e4c3ad;
  text-shadow: 0 0 15px #eb9486;
  margin-bottom: 20px;
  margin: 0 auto;
`;

export const ReviewList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid #e4c3ad;
`;

export const Author = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
  color: #e4c3ad;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Review = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;

  color: #e4c3ad;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  margin: 0 auto;
`;

export const NoReviewsText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;
