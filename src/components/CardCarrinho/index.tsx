import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "../../store/counterSlice";
import { removeItem } from "../../store/cartSlice";

import {
  Container,
  WrapperQtd,
  CardCarrinhoImage,
  CardCarrinhoTexto,
  CardCarrinhoQtd,
  CardCarrinhoPrice,
  CardCarrinhoDelete,
} from "./styles";

import { CardProps } from "../../interface/interfaceCard";

export function CardCarrinho({ index, id, name, photo, price }: CardProps) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Container key={id}>
      <CardCarrinhoImage src={photo} alt="" />
      <CardCarrinhoTexto>{name}</CardCarrinhoTexto>
      <CardCarrinhoQtd>
        <span>Qtd:</span>
        <WrapperQtd>
          <button onClick={() => dispatch(decrement())}>-</button>
          <hr />
          <span>{count}</span>
          <hr />
          <button onClick={() => dispatch(increment())}>+</button>
        </WrapperQtd>
      </CardCarrinhoQtd>
      <CardCarrinhoPrice>{price}</CardCarrinhoPrice>
      <CardCarrinhoDelete onClick={() => dispatch(removeItem(id))}>
        X
      </CardCarrinhoDelete>
    </Container>
  );
}
