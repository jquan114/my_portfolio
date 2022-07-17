import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/profile8.png')}
          title="Flip the page"
          description="Use an API for developers to search software engineering books for further studies."
          technologies="Javascript - Node.js - Express.js - Netlify"
          link_two="https://developerbooks.netlify.app/"
          link_three="https://github.com/jquan114/jquan-project-1"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/profile7.png')}
          title="React To-Do-List "
          description="My submission for a nice way to organize your day. "
          technologies="Javascript, Netlify, and Bootstrap"
          link_two="https://makeyourlistnow.netlify.app/"
          link_three="https://github.com/jquan114/react_to_do_list"
          link_one_text="Devpost"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/profile3.png')}
          title="Track Income and Expense"
          description="My personal website that you can start using now"
          technologies="Javascript - React.js -"
          technologies2="styled-components - Netlify"
          link_two="https://jquan-money-tracker.herokuapp.com/"
          link_three="https://github.com/jquan114/Track-Income-Expense"
          link_two_text="Website"
          link_three_text="Github"
        />
     
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }


    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 6rem;
    }
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 1rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Projects;
