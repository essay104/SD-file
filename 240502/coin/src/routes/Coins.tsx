import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCoins } from "../api";
import { useQuery } from "@tanstack/react-query";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  margin: 0 auto;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-contents: center;
  align-items: center;
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_news: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinProps {
  toggleDar: () => void;
}

const Coins = ({ toggleDark }: ICoinProps) => {
  const setterFn = useSetRecoilState(isDarkAtom);
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json);
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Header>
        <Title>Coins Information</Title>
        <button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                Now Rank : {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} 상세정보 보러가기
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
