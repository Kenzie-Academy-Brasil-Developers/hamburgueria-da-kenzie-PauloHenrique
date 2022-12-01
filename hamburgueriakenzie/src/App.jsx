import { useEffect, useState } from "react";
import { Headers } from "./componentes/header/header";
import { ProductList } from "./componentes/productsList/productList";
import { Cart } from "./componentes/shoppingCart/cart";
import { Api } from "./services/api";
import { ProductsAndCart } from "./styles/appStyle";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const notify = () =>
    toast.error(" Só é possivel adicionar um produto!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const newProductsList = products.filter((produto) =>
    produto.name.toLowerCase().includes(filteredProducts.toLowerCase())
  );

  const [haveItens, setHaveItens] = useState(false);

  function checkCartLength() {}

  function cleanCart() {
    setCartTotal(0);
    setCurrentSale([]);
    checkCartLength();
  }

  function addProductCart(data, valor) {
    const includs = currentSale.includes(data);

    if (includs === false) {
      setCurrentSale([...currentSale, data]);
      setCartTotal([parseInt(cartTotal) + parseInt(valor)]);
    } else {
      notify();
    }
  }

  function removeCartTotal(value) {
    setCartTotal([parseInt(cartTotal) - parseInt(value)]);
  }

  function removeCurretSale(element) {
    const newCardCart = currentSale.filter((cart) => cart !== element);

    setCurrentSale(newCardCart);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await Api.get("");

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="App">
      <Headers
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductsAndCart>
        <ProductList
          products={newProductsList}
          addProductCart={addProductCart}
          checkCartLength={checkCartLength}
        />
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeCartTotal={removeCartTotal}
          removeCurretSale={removeCurretSale}
          cleanCart={cleanCart}
          haveItens={haveItens}
        />
      </ProductsAndCart>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
