import styled from "styled-components";

export const ProductsListUl = styled.ul`
  max-width: 90%;
  display: flex;
  gap: 20px;
  margin-left: 16px;
  overflow-x: scroll;
  margin-top: 15px;

  @media (min-width: 1600px) {
    overflow-x: unset;
    width: 60%;
    flex-wrap: wrap;
  }
`;
