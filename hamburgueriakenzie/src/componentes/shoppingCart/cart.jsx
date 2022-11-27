import { CardCart } from "./cardCart/card";
import { CartEmpty, FilledCart, HeaderCart, LineCart } from "./cartStyle";

export const Cart = ({
  cartTotal,
  currentSale,
  removeCartTotal,
  removeCurretSale,
  cleanCart,
  haveItens,
}) => {
  return (
    <>
      {haveItens ? (
        <CartEmpty>
          <HeaderCart className="headerCartPosition">
            <span>Carrinho de compras</span>
          </HeaderCart>
          <h4>Sua sacola está vazia</h4>
          <span>Adicione itens</span>
        </CartEmpty>
      ) : (
        <FilledCart>
          <HeaderCart className="headerCartPosition">
            <span>Carrinho de compras</span>
          </HeaderCart>
          <ul>
            {currentSale.map((element, index) => (
              <CardCart
                removeCurretSale={removeCurretSale}
                removeCartTotal={removeCartTotal}
                element={element}
                key={index}
                cartTotal={cartTotal}
              />
            ))}
          </ul>
          <div>
            <span>Valor Total </span>
            <p>R$ {cartTotal}</p>
          </div>

          <LineCart />
          <button onClick={() => cleanCart()} className="btnRemoverTudo">
            Remover Tudo
          </button>
        </FilledCart>
      )}
    </>
  );
};
