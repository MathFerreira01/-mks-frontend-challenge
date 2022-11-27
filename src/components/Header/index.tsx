import { useState } from "react";
import { useSelector } from 'react-redux';

import { Container, ContainerTitulo, ContainerCarrinho } from "./styles";

import loja from "../../images/Vector (9).svg";

import { Carrinho } from "../Carrinho";

export function Header() {
  const cart = useSelector((state) => state.cart.products)
  const [modal, setModal] = useState(false);

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  const togleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Container>
        <ContainerTitulo>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </ContainerTitulo>
        <ContainerCarrinho onClick={togleModal}>
          <img src={loja} />
          <p>{getTotalQuantity() || 0}</p>
        </ContainerCarrinho>
      </Container>
      {modal ? <Carrinho modal={modal} togleModal={togleModal} /> : null}
    </>
  );
}
