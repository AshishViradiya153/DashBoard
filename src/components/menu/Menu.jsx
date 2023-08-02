import React from "react";
import {
  ArrowWrapper,
  MenuContainer,
  MenuWrapper,
  SpanArrow,
  Tag,
} from "./Menu.styles";

const Menu = ({ menus }) => {
  return (
    <MenuContainer>
      <MenuWrapper>
        {menus.map((menu) => {
          return <Tag key={menu.id}>{menu.icon}</Tag>;
        })}
      </MenuWrapper>
      <ArrowWrapper
        style={{
          display: "flex",
          justifyContent: "center",
          rotate: "45deg",
          marginTop: "-10px",
        }}
      >
        <SpanArrow />
      </ArrowWrapper>
    </MenuContainer>
  );
};

export default Menu;
