import { ProductCard } from "./productCard/productCard";
import { ProductsListUl } from "./productListStyle";

export const ProductList = ({
  products,
  addProductCart,

  checkCartLength,
}) => {
  return (
    <ProductsListUl>
      {products.map((element) => (
        <ProductCard
          addProductCart={addProductCart}
          element={element}
          key={element.name}
          checkCartLength={checkCartLength}
        ></ProductCard>
      ))}
    </ProductsListUl>
  );
};
