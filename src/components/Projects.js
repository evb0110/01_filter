import React from 'react';
import Project from './Project';
import '../css/Projects.css';

export default function Projects(props) {
  return (
    <div class="images">
      {props.pics.map(pic => (
      <Project pic={pic} key={JSON.stringify(pic)} />
      ))}
    </div>
  );
}
