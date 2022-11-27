import { ButtonVerde } from "../../../styles/Global/button";
import { ProductsLi } from "./productCardStyle";

export const ProductCard = ({ element, addProductCart, checkCartLength }) => {
  return (
    <ProductsLi>
      <img src={element.img} alt={element.name} />
      <div>
        <p>{element.name}</p>
        <span>{element.category}</span>
        <p className="priceText">R$ {element.price}</p>
        <ButtonVerde
          onClick={() => {
            checkCartLength();
            addProductCart(element, element.price);
          }}
        >
          Adicionar
        </ButtonVerde>
      </div>
    </ProductsLi>
  );
};
