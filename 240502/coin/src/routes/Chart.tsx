import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId?: string;
}

interface IHistorical {}

const Chart = ({ coinId, isDark }: ChartProps) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () => {
    fetchCoinHistory(coinId);
  });

  return <div>Chart</div>;
};

export default Chart;
