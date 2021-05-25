import React from 'react';
import Bio from './Bio';
import Projects from './Projects';
import Technologies from './Technologies';

export default function Home() {
  return (
    <div className="main-container">
      <Bio />
      <Technologies />
      <Projects />
    </div>
  );
}
