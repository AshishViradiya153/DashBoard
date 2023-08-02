import { styled } from "styled-components";

const MenuContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
const ArrowWrapper = styled.div`
  display: "flex";
  justify-content: "center";
  rotate: "45deg";
  margin-top: "-10px";
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  border-radius: 3px;
`;
const Tag = styled.span`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  padding: 1em;
`;
const SpanArrow = styled.div`
  display: flex;
  width: 13px;
  height: 13px;
  z-index: 20;
  background-color: black;
`;
export { MenuWrapper, Tag, MenuContainer, SpanArrow, ArrowWrapper };
