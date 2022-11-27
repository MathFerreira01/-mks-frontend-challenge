import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { CardProps } from '../../interface/interfaceCard'

import Path from "../../images/shopping-bag.svg";

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

export function Card({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: CardProps) {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CardImage src={photo} />
      <CardTextWrapper>
        <CardContainerText>
          <CardTextDate>{name}</CardTextDate>
          <CardTextTitle>R${price}</CardTextTitle>
        </CardContainerText>
        <CardTextBody>{description}</CardTextBody>
      </CardTextWrapper>

      <CardButton
        onClick={() => dispatch(addToCart({  id, photo, name, price }))}
      >
        <img src={Path} />
        <LinkText>COMPRAR</LinkText>
      </CardButton>
    </CardWrapper>
  );
}
