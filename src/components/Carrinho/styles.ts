import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  width: 38vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  float: right;

  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const CarrinhoTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7%;

  > h2 {
    font-weight: 700;
    font-size: 2em;
    color: #ffffff;
  }

  > a {
    color: #ffffff;
    background: #000000;
    font-weight: 400;
    font-size: 0.8rem;
    padding: 4%;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCardCarrinho = styled.div`
  padding: 1.5em;
`;

export const CarrinhoPreco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  color: #ffffff;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 6%;
  background: #000000;
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  cursor: pointer;
`;
