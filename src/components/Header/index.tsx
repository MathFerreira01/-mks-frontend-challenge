import { useState } from "react";

import { Container, ContainerTitulo, ContainerCarrinho } from "./styles";

import loja from "../../images/Vector (9).svg";

import { Carrinho } from "../Carrinho";

export function Header() {
  const [modal, setModal] = useState(false);

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
          <p>0</p>
        </ContainerCarrinho>
      </Container>
      {modal ? <Carrinho modal={modal} togleModal={togleModal} /> : null}
    </>
  );
}
