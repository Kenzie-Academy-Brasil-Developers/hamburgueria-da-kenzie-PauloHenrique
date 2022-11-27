import styled from "styled-components";

export const ProductsAndCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 1600px) {
    margin-top: 32px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;
