import React, { useState } from 'react';
import { LinkButton } from '../Buttons/LinkButton';

type ExpandableTextProps = {
  text: string;
  maxLength?: number;
};

export const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength=100 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const visibleText = expanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');

  return (
    <div>
      <p>{visibleText}</p>
      { text.length > maxLength &&
      <LinkButton onClick={handleExpandClick}>
        {expanded ? 'Свернуть' : 'Подробнее'}
      </LinkButton>
}
    </div>
  );
};

//export default ExpandableText;