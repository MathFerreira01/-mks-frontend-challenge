import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <CardList/>
      <Footer/>
    </>
  );
}
