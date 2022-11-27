import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./styles";
import { CardProps } from "../../interface/interfaceCard";
import { getProductsServices } from "../../services/getProducts";

export function CardList() {
  const [products, setProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const apiReturn = await getProductsServices();
      if (!apiReturn.error) {
        setProducts(apiReturn);
      } 
    };
    getProducts();
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
          brand={product.brand}
          quantity={0}
        />
      ))}
    </Container>
  );
}
