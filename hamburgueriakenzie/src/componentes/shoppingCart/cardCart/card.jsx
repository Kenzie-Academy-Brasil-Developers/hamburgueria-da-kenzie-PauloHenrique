import { CardLi } from "./cardStyled";

export const CardCart = ({ element, removeCartTotal, removeCurretSale }) => {
  return (
    <CardLi>
      <div>
        <img src={element.img} alt="" />
      </div>
      <div className="cardInfo">
        <h4>{element.name}</h4>
        <span>{element.category}</span>
      </div>
      <button
        onClick={(e) => {
          removeCurretSale(element);
          removeCartTotal(element.price);
        }}
      >
        Remover
      </button>
    </CardLi>
  );
};
