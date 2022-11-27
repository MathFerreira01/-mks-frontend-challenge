import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  margin: 1em auto 1em;
  
  height: 11vh;
  max-width: 100%;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const CardCarrinhoImage = styled.img`
  height: 9vh;
  padding: 0.2em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CardCarrinhoTexto = styled.p`
  color: #2c2c2c;
  font-weight: 400;
  font-size: 1em;
`;

export const CardCarrinhoQtd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > span {
    font-weight: 400;
    font-size: 0.6em;
  }
`;

export const WrapperQtd = styled.div`
  padding: 0.2em;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.3px solid #bfbfbf;

  > button {
    margin: 0 0.5em 0;
    font-size: 1.3em;
    font-weight: 400;
    border: none;
    background: #ffff;
  }

  > span {
    padding: 0.5em;
    font-weight: 400;
  }

  > hr {
    border: 0.2px solid #bfbfbf;
    height: 25px;
  }
`;

export const CardCarrinhoPrice = styled(CardCarrinhoTexto)`
  font-weight: 700;
`;

export const CardCarrinhoDelete = styled.a`
  border-radius: 50%;
  padding: 0.5em;
  background-color: #000;
  cursor: pointer;
  color: #ffff;
  font-size: 15px;
`;
