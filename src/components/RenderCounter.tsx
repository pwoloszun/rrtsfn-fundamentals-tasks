import React, { useEffect, useRef } from 'react';

const cssStyles = {
  backgroundColor: '#ccc',
  padding: '4px',
  fontSize: '0.8rem',
  margin: '0 6px',
  display: 'inline-block',
};

export default function RenderCounter(): React.ReactElement {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (spanRef.current) {
      const val = parseFloat(spanRef.current.textContent || '0');
      spanRef.current.textContent = `${val + 1}`;
    }
  });

  return (
    <span ref={spanRef} style={cssStyles}>0</span>
  );
}
