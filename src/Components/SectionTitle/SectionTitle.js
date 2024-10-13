import React from "react";
import underlineImage from "../../Assets/title-underline.png";
import {
  TitleContainer,
  MainTitle,
  LastWord,
  Underline,
} from "./SectionTitle.styled";

const SectionTitle = ({ title, isDark }) => {
  const words = title.split(" ");
  const mainTitle = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <TitleContainer>
      <MainTitle isDark={isDark}>
        {mainTitle} <LastWord>{lastWord}</LastWord>
      </MainTitle>
      <Underline src={underlineImage} alt="Underline" />
    </TitleContainer>
  );
};

export default SectionTitle;
