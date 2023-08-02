import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  margin-top: 1em;
  padding: 0em 4em;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  font-weight: 400;
  font-size: 28px;
`;

const Text = styled.div`
  display: flex;
  text-align: justify;
`;
const Subtitles = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 18px;
  margin: 0em 0em 0.5em;
`;

const EditorWrapper = styled.div`
  display: flex;
  padding: 1.5em 0em;
  flex-direction: column;
  font-size: 16px;
  gap: 1em;
`;
export { MainContainer, Title, Text, EditorWrapper, Subtitles };
