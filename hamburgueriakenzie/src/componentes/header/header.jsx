import { HeaderConteiner, SearchHeader } from "./headerStyle";

import img from "./../../assents/logo.png";
import { ButtonVerde } from "../../styles/Global/button";
export const Headers = ({ setFilteredProducts, filteredProducts }) => {
  return (
    <>
      <HeaderConteiner>
        <img src={img} alt="" />
        <SearchHeader>
          <input
            value={filteredProducts}
            onChange={(e) => setFilteredProducts(e.target.value)}
            placeholder="Digitar Pesquisa"
            type="text"
          />
          <ButtonVerde>Pesquisar</ButtonVerde>
        </SearchHeader>
      </HeaderConteiner>
    </>
  );
};
