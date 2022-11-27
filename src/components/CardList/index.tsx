import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./styles";
import { api } from "../../services/api";
import { CardProps } from "../../interface/interfaceCard";

export function CardList() {
  const [products, setProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    api
      .get(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
      )
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <Container>
      {products.map((product, index) => (
        <Card
          key={index}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          photo={product.photo}
          index={""}
          brand={product.brand}
          quantity={0}
        />
      ))}
    </Container>
  );
}
