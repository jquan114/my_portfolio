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
          I specialized in React Javascript, Python, Data Structures and Algorithms. 
          Combining the art of programming with the art of design to deliver web application is my true passion.
        </p>
        <p>
          Besides studying I enjoy playing the piano, and reading. Im usually busy with side
          projects and scaling businesses. 
          As a Front end developer I focus on react Javascript, and problem solving.
          Ienjoy building web applications using the MERN stack with React.js Eco System. When I'm not in
          front of my computer, I like to spend time outdoors, and reading self development books.
        </p>
        <p>
          <a
            class="shadow-underline"
            href="https://docs.google.com/document/d/1TlcEK3iu88Rr33ztxksoHLlfQ0xVN-EYfJ54rBw9mGk/edit?pli=1"
            target="_blank"
          >
            View CV
          </a>
        </p>

        <p>
          <strong>Feel free to contact me anytime!< hr /> <br/>
         <br />
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
