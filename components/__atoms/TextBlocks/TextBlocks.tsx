import React from 'react';

const TitleLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-sm">{children}</span>
);

const TextInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-700 dark:text-gray-300">{children}</span>
);

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold uppercase ">{children}</span>
);

const CardPreTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);

export { TitleLabel, TextInfo, CardTitle, CardPreTitle };
