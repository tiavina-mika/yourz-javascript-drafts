/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Space } from "antd";

import { useResponsive } from "../Responsive";

const Icons = () => {
  const { isTabletDesktop } = useResponsive();
  return (
    <Space size={isTabletDesktop ? 22 : 44}>
      <img alt="search" src="/icons/search.svg" />
      <img alt="heart" src="/icons/heart.svg" />
      <img alt="cart" src="/icons/cart.svg" />
    </Space>
  );
};

export default Icons;
