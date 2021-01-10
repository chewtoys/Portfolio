import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import Content from "../components/Content";

interface Props {
  isMobile: boolean;
}

export const About: FC<Props> = ({ isMobile }) => {
  return (
    <section id="about">
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1>About</h1>
        <p>
          I'm a self-taught software engineer who is currently working at
          Cerner. In my free time, I enjoy contributing to open-source,
          designing, and working on side projects. Some technologies I enjoy are
          Typescript, Rust, React.js, Ruby, and Node.js. I have been writing
          code for 5 years since I first got introduced to web development.
        </p>
      </Content>
    </section>
  );
};
