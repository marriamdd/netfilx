import styled from "styled-components";

export const PopularContainer = styled.div`
  margin-top: 3rem;
  background-color: black;
  height: 170px;
  span {
    padding-left: 1.5rem;
    font-size: 20.921px;
    font-weight: 700;
    line-height: 15.643px;
    letter-spacing: -0.057px;
  }
`;
export const PopularItems = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  & > a {
    margin-top: 1.5rem;
    min-width: 130px;
    height: 150px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2px;
  }
`;
