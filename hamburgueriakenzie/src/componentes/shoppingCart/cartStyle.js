import styled from "styled-components";

export const CartEmpty = styled.div`
  width: 345px;
  height: 223px;
  background-color: var(--Grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 18px;
  margin-bottom: 100px;
  h4 {
    font-size: 18px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
  .headerCartPosition {
    position: relative;
    bottom: 45px;
    width: 100%;
  }

  @media (min-width: 1600px) {
    margin-top: 16px;
  }
`;
export const HeaderCart = styled.div`
  width: 100%;
  height: 65px;
  background-color: var(--Color-primary);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;

  span {
    color: var(--White);
    font-size: 18px;
    font-weight: 700;
    position: relative;
    left: 20px;
  }
`;

export const FilledCart = styled.div`
  width: 345px;
  min-height: 223px;
  height: 1000px;
  height: max-content;
  background-color: var(--Grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 18px;
  margin-bottom: 100px;

  ul {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .btnRemoverTudo {
    width: 90%;
    height: 60px;
    color: var(--Grey-50);
    background-color: var(--Grey-20);
    border: transparent;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .btnRemoverTudo:hover {
    transition: 0.3s;
    color: var(--White);
    background-color: var(--Color-primary);
  }
  @media (min-width: 1600px) {
    margin-top: 16px;
  }
`;
export const LineCart = styled.div`
  width: 90%;
  height: 2px;
  background-color: var(--Grey-20);
`;
