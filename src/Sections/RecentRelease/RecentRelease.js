import React from "react";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Image1 from "../../Assets/pic1.jpg";
import Image2 from "../../Assets/pic2.jpg";
import Image3 from "../../Assets/pic3.jpg";
import {
  Wrapper,
  ListItem,
  Item,
  Thumbnail,
  Title,
} from "./RecentRelease.styled";

const recentReleases = [
  {
    title: "White Walker",
    subtitle: "Daily",
    entryFee: "Free",
    imgSrc: Image1,
  },
  {
    title: "Hunter Killer",
    subtitle: "II",
    entryFee: "$25.00",
    imgSrc: Image2,
  },
  {
    title: "Cyberpunk",
    subtitle: "Daily",
    entryFee: "$25.00",
    imgSrc: Image3,
  },
];

const RecentRelease = () => {
  return (
    <Wrapper>
      <Container>
        <p>Latest Releases</p>
        <SectionTitle title="Create & Manage" isDark={true} />
        <ListItem>
          {recentReleases.map((release, index) => (
            <Item key={index}>
              <Thumbnail>
                <img src={release.imgSrc} alt={release.title} />
              </Thumbnail>
              <Title>
                <h1>
                  {release.title} <span>{release.subtitle}</span>
                </h1>
                <h4>
                  Entry Fee : <span>{release.entryFee}</span>
                </h4>
              </Title>
            </Item>
          ))}
        </ListItem>
      </Container>
    </Wrapper>
  );
};

export default RecentRelease;
