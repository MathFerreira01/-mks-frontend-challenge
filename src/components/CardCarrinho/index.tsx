import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../../store/cartSlice";

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
import { RootState } from "../../store/store";

export function CardCarrinho({ index, id, name, photo, price, quantity }: CardProps) {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <Container key={index}>
      <CardCarrinhoImage src={photo} alt="" />
      <CardCarrinhoTexto>{name}</CardCarrinhoTexto>
      <CardCarrinhoQtd>
        <span>Qtd:</span>
        <WrapperQtd>
          <button
            disabled={cart[0].quantity === 1}
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <hr />
          <span>{quantity}</span>
          <hr />
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </WrapperQtd>
      </CardCarrinhoQtd>
      <CardCarrinhoPrice>{price}</CardCarrinhoPrice>
      <CardCarrinhoDelete onClick={() => dispatch(removeItem(id))}>
        X
      </CardCarrinhoDelete>
    </Container>
  );
}
