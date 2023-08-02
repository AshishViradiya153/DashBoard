import { styled } from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const FirstRow = styled.div`
  display: flex;
  padding: 0.7em 2.5em 0em 2.5em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FirstCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.3em;
  gap: 0.2em;
  border: 1px solid #cecece;
  border-radius: 0.5em;
`;
const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const SecondCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;
const InvitationMember = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 2px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: antiquewhite;
  }
`;
const ThirdCol = styled.div;

const Text = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  word-spacing: 2px;
  letter-spacing: -0.2px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f640e6;
  cursor: pointer;
  position: relative;
`;
const P = styled.p`
  padding: 1em;
  font-size: 12px;
  color: white;
`;
const Badge = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  display: flex;
  position: absolute;
  top: -2px;
  right: -12px;
  height: auto;
  color: white;
  padding: 0.1em 0.3em;
  border: 1px solid white;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  outline: 1.5px solid white;
  background-color: red;
`;
const Online = styled.span`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  outline: 2px solid white;
  position: absolute;
  bottom: 0;
  right: 4px;
  background-color: green;
`;
const SecondColumn = styled.div`
  display: flex;
  gap: 1.8em;
  align-items: center;
  font-size: 13px;
  padding: 0px 16px 0px;
`;
const Link = styled.li`
  list-style: none;
  padding-bottom: 0.3em;
  cursor: pointer;
  border-bottom: ${(props) =>
    !!props.border ? "2.5px solid red" : "2px solid transparent"};
`;
export {
  InvitationMember,
  MainWrapper,
  Online,
  AvatarWrapper,
  SecondCol,
  Badge,
  FirstCol,
  Avatar,
  Text,
  Link,
  Input,
  SecondColumn,
  FirstRow,
  P,
  SearchIconWrapper,
  InputWrapper,
  ThirdCol,
  SearchWrapper,
};
