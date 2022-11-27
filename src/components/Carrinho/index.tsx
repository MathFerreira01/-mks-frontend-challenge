import { useSelector } from "react-redux";
import { CardCarrinho } from "../CardCarrinho";

import {
  CarrinhoContainer,
  CarrinhoTitulo,
  WrapperPrice,
  ContainerCardCarrinho,
  CarrinhoPreco,
  Text,
  Link,
} from "./styles";

interface Props {
  modal: boolean;
  togleModal: () => void;
}

export function Carrinho({ modal, togleModal }: Props) {
  const cart = useSelector((state) => state.cart.products);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  if (!modal) {
    return null;
  }

  return (
    <CarrinhoContainer>
      <CarrinhoTitulo>
        <h2>Carrinho de compras</h2>
        <a onClick={togleModal}>X</a>
      </CarrinhoTitulo>
      <ContainerCardCarrinho>
        {cart.map((cart) => (
          <CardCarrinho
            key={cart.index}
            id={cart.id}
            name={cart.name}
            photo={cart.photo}
            price={cart.price}
          />
        ))}
      </ContainerCardCarrinho>

      <WrapperPrice>
        <CarrinhoPreco>
          <Text>Total:</Text>
          <Text>{getTotal().totalPrice}</Text>
        </CarrinhoPreco>
        <Link>Finalizar compra</Link>
      </WrapperPrice>
    </CarrinhoContainer>
  );
}
