import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardContainerText,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardButton,
  LinkText,
} from "./styles";

import Path from "../../images/shopping-bag.svg";

import { CardProps } from '../../interface/interfaceCard'

export function Card({
  id,
  index,
  name,
  brand,
  description,
  photo,
  price,
}: CardProps) {
  const dispatch = useDispatch();

  return (
    <CardWrapper key={index}>
      <CardImage src={photo} />
      <CardTextWrapper>
        <CardContainerText>
          <CardTextDate>{name}</CardTextDate>
          <CardTextTitle>R${price}</CardTextTitle>
        </CardContainerText>
        <CardTextBody>{description}</CardTextBody>
      </CardTextWrapper>

      <CardButton
        onClick={() => dispatch(addToCart({ index, id, photo, name, price }))}
      >
        <img src={Path} />
        <LinkText>COMPRAR</LinkText>
      </CardButton>
    </CardWrapper>
  );
}
