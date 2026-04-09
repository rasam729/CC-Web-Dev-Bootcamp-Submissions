import { forwardRef, useMemo, useRef, useEffect, useState } from 'react';

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 100,
    className = '',
    ...rest
  } = props;

  const words = label.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`} {...rest} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex', marginRight: '0.25em' }}>
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} style={{ display: 'inline-block', fontVariationSettings: fromFontVariationSettings }}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
});

export default VariableProximity;