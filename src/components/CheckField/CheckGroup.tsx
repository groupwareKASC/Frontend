import React, { useState } from 'react';
import { CheckField } from './CheckField';

export const CheckGroup = () => {
  const [selected, setSelected] = useState<string | null>('불일치');

  const options = ['전체', '불일치'];

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {options.map((option) => (
        <CheckField
          key={option}
          label={option}
          checked={selected === option}
          onClick={() => handleSelect(option)}
        />
      ))}
    </div>
  );
};
