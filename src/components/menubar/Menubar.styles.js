import { styled } from "styled-components";

const MenuBarWrapper = styled.div`
  display: flex;
  background-color: white;
  position: absolute;
  flex-direction: column;
  bottom: -205px;
  right: 0px;
  padding: 9px;
  min-width: 8.5em;
  gap: 0.2em;
  z-index: 5;
  border-radius: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 0.3em;
  border-radius: 3px;
  &:hover {
    background-color: antiquewhite;
  }
`;
const Line = styled.span`
  display: flex;
  width: 100%;
  height: 0.5px;
  background-color: #ffbebe;
`;
const List = styled.p`
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  text-transform: capitalize;
`;
const NewTag = styled.span`
  width: 7px;
  height: 7px;
  margin-right: 1em;
  border-radius: 50%;
  background-color: blue;
`;
export { MenuBarWrapper, List, ListWrapper, Line, NewTag };
