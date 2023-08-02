import { styled } from "styled-components";

const MainWrapper = styled.div`
  filter: blur(${(props) => (props.showSidebar ? "0px" : "2px")});
  display: flex;
  overflow: auto;
  flex: ${(props) => (props.showSidebar ? 1 : 0)};
  min-width: ${(props) => (props.showSidebar ? "22em" : "0em")};
  flex-direction: column;
  background-color: #f6f6f6ab;
  transform: -translateX(22em);
  transition: all 0.3s ease-in;
  padding: ${(props) => (props.showSidebar ? "0.5em" : "0em")};
  border-right: 1px solid #a7a7a7;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 1em;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 20;
  border-radius: 3px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #afafaf;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8em;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.p``;
const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: row;
`;

export { Label, LabelWrapper, MainWrapper, IconsWrapper, Header, Title, Icons };
