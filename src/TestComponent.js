import React from 'react';
import { useEffect } from 'react';
import Typewriter from './typewriter';
import animate from './animate';

function TestComponent(props) {
  useEffect(() => {
    let typewriter = new Typewriter("terminal");
    typewriter.setCaret("_");
    typewriter.setCaretPeriod(500);
    typewriter.setDelay(150, 50);
    animate(typewriter);
  });

  return (
    <div className="test-component">
      <p id="terminal"></p>
    </div>
  );
}

export default TestComponent;
