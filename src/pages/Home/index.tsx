import { useState } from 'react'
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from '../../components/Loading';

export function Home() {
  const [removeLoading, setRemoveLoading] = useState(false);

  return (
    <>
      <Header />
      {!removeLoading && <Loading />}
      <CardList/>
      <Footer/>
    </>
  );
}
