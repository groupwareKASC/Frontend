import React from 'react';
import { CheckSquareSolid } from "@mynaui/icons-react";

interface CheckFieldProps {
  label: string;
  onClick?: () => void;
  checked?: boolean;
}

export const CheckField: React.FC<CheckFieldProps> = ({
  label,
  onClick,
  checked = false,
}) => {
  const iconColor = checked ? "#142F64" : "#D0D0D0";

  return (
    <div
      onClick={onClick}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onClick?.();
        }
      }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5vw',
        userSelect: 'none',
        cursor: 'pointer',
      }}
    >
      <CheckSquareSolid width="1.5vw" height="1.5vw" color={iconColor} />
      <span
        style={{
          fontSize: '1.04vw',
          color: '#000',
          fontWeight: 400,
        }}
      >
        {label}
      </span>
    </div>
  );
};
