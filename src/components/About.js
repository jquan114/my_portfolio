import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          Hi, I'm <strong>Jquan Collins</strong>. I currently graduated from 
           General Assembly Software Engineering Program in New York City. There
          I specialized in python, javascript, along with cloud development, data science, algorithms, and ux design.
        </p>
        <p>
          Besides studying I enjoy playing the piano, and reading. Im usually busy with side
          projects and scaling business. My favourite languages are Python and Javascript. Currently
          I love creating web applications using the PERN stack and Cloud development using AZURE. When I'm not in
          front of a computer, I like to spend time outdoors, do sports, and 
          explore new restaurants.
        </p>
        <p>
          <a
            class="shadow-underline"
            href="https://docs.google.com/document/d/1fZucwQFJn3cgK3MRZpqmxH4UTia-ZQMlleSDI0uAiSs/edit?usp=sharing"
            target="_blank"
          >
            View CV
          </a>
        </p>

        <p>
          <strong>Feel free to contact me anytime!< hr /> <br/>
          Phone: 516-532-4646 <br />
          Email: jquancollins96@gmail.com</strong>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;
