import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          Hi, I'm <strong>Jquan Collins</strong>. I'm a Software Engineer with a
          passion for writing scalable solutions in JavaScript, and SQL. With
          seven years of experience in marketing and client service, I have a
          strong foundation in communication.I am passionate about creating
          tangible solutions that make an impact on those around me.
        </p>
        <p>
          A beautiful blend of code and marketing is key to my development.I
          specialize in full-stack Javascript technologies to build complete web
          applications with API systems.
        </p>
        <p>
          <a
            class="shadow-underline"
            href="https://docs.google.com/document/d/1TlcEK3iu88Rr33ztxksoHLlfQ0xVN-EYfJ54rBw9mGk/edit?pli=1"
            target="_blank"
          >
            View Resume
          </a>
        </p>

        <p>
          <strong>
            Feel free to contact me anytime!
            <hr /> <br />
            <br />
            Email: jquancollins96@gmail.com
          </strong>
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
