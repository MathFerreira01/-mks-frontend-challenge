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
import { CardProps } from "../../interface/Card";

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

      <CardButton>
        <img src={Path} />
        <LinkText onClick={() => dispatch(addToCart({index, id, photo, name, price }))}>
          COMPRAR
        </LinkText>
      </CardButton>
    </CardWrapper>
  );
}
