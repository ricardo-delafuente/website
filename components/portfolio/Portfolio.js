import React, { Component } from 'react';
import Project from './Project';

// Temporarily hardcoded proj data
import projects from './projects.json';

class Portfolio extends Component {
  state = { projects: projects.data };

  render() {
    return (
      <div className="row">
        {this.state.projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            url={project.url}
          />
        ))}
        <article className="col col-3 center">
          {"I'll be adding more projects soon!"}
        </article>
      </div>
    );
  }
}

export default Portfolio;
