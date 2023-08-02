import React from "react";
import {
  MainContainer,
  Title,
  Text,
  EditorWrapper,
  Subtitles,
} from "./Editor.styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Editor = () => {
  return (
    <MainContainer>
      <Title>WYSIWYG Editor</Title>
      <EditorWrapper>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          accusamus eos doloribus numquam odio rem sed aperiam, aliquid pariatur
          molestias sint. Delectus facere, dolorum earum labore perferendis
          nostrum pariatur veritatis? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Porro accusamus eos doloribus numquam odio rem sed
          aperiam, aliquid pariatur molestias sint. Delectus facere, dolorum
          earum labore perferendis nostrum pariatur veritatis?
        </Text>
        <hr />
        <div>
          <Subtitles>Topic Name</Subtitles>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            accusamus eos doloribus numquam odio rem sed aperiam, aliquid
            pariatur molestias sint. Delectus facere, dolorum earum labore
            perferendis nostrum pariatur veritatis? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Porro accusamus eos doloribus numquam
            odio rem sed aperiam, aliquid pariatur molestias sint. Delectus
            facere, dolorum earum labore perferendis nostrum pariatur veritatis?
          </Text>
        </div>
        <hr />
        <div>
          <Subtitles>Topic Name</Subtitles>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            accusamus eos doloribus numquam odio rem sed aperiam, aliquid
            pariatur molestias sint. Delectus facere, dolorum earum labore
            perferendis nostrum pariatur veritatis? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Porro accusamus eos doloribus numquam
            odio rem sed aperiam, aliquid pariatur molestias sint. Delectus
            facere, dolorum earum labore perferendis nostrum pariatur veritatis?
          </Text>
        </div>

        <AddCircleOutlineIcon
          fontSize="small"
          color="primary"
          style={{ cursor: "pointer" }}
        />
      </EditorWrapper>
    </MainContainer>
  );
};

export default Editor;
