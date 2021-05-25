import React from 'react';
import Bio from './Bio';
import Technologies from './Technologies';

export default function Home() {
  return (
    <div className="main-container">
      <Bio />
      <Technologies />
    </div>
  );
}
