import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

const ProgressBarLine = ({ current = 40, total, color = '#FFEA82' }) => {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  

  const percentage = total > 0 ? current / total : 0;

  useEffect(() => {
    if (!containerRef.current) return;

    barRef.current = new ProgressBar.Line(containerRef.current, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color,
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: { width: '100%', height: '100%' },
      text: {
        style: { display: 'none' },
        autoStyleContainer: false,
      },
      from: { color },
      to: { color },
    });

    return () => {
      barRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.animate(percentage);
      barRef.current.path.setAttribute('stroke', color);
    }
  }, [current, total, color]);

  return (
    <div>
      <div style={{ position: 'relative', height: '10px' }} ref={containerRef}></div>
     
    </div>
  );
};

export default ProgressBarLine;
