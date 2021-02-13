import React from "react";
import Hero from "../components/Hero";
import Content from '../components/Content'

function about(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <h1>Hi, I'm Fanol Sela. I'm an aspiring full-stack developer that is hard-working, ambitious and determined to get the job done.</h1>
        <h1>I'm well versed on programming languages like Javascript, React, Node.js, Ruby, Ruby on Rails, and Python.</h1>
        <h1>I'm a team player, and I use my strong communication skills and education knowledge to help individuals and their problems.</h1>
      </Content>
    </div>
  );
}

export default about;