import styled from "styled-components";

export const HeaderConteiner = styled.header`
  background-color: var(--Grey-0);
  width: 100%;
  height: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1600px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    img {
      margin-left: 10%;
    }
  }
`;

export const SearchHeader = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 8px;
  border: 2px solid var(--Grey-20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--White);

  @media (min-width: 1600px) {
    margin-right: 10%;
    max-width: 365px;
  }

  input {
    height: 85%;
    width: 90%;
    background-color: var(--White);
    border: solid transparent;
    font-size: 16px;
    border-radius: 6px;
  }
`;
