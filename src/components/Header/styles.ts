import styled from "styled-components";

export const Container = styled.header`
  background-color: #0f52ba;
  width: 100%;
  height: 12vh;
  position: absolute;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4em;

  > h1 {
    font-weight: 600;
    font-size: 2.2em;
    color: #ffffff;
  }

  > p {
    font-weight: 300;
    font-size: 1.2em;
    color: #ffffff;
    margin-left: 0.4em;
  }
`;

export const ContainerCarrinho = styled.a`
  margin-right: 4em;
  display: flex;
  background-color: #fff;
  color: #000;

  padding: 10px 1% 10px; 
  border-radius: 8px;
  cursor: pointer;

  > img {
    padding-right: 1em;
  }

  > p {
    font-weight: 700;
    font-size: 1.1em;
  }
`;
