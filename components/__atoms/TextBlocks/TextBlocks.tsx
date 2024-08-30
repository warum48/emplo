import React from 'react';

const TitleLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-sm text-gray-700 dark:text-gray-300">{children}</span>
);

const TextInfo: React.FC<{ children: React.ReactNode, dimmed?:boolean }> = ({ children, dimmed }) => (
  <span className={`${dimmed ? "text-gray-500 dark:text-gray-500" : "text-gray-700 dark:text-gray-300" }`}>{children}</span>
);

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold uppercase ">{children}</span>
);

const CardPreTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);

const Title1_main : React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);
const Title2_second: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);
const Title4_second: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);
const Card_pretitle : React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);
const Card_title : React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-900">{children}</span>
);

export { TitleLabel, TextInfo, CardTitle, CardPreTitle,   Title1_main,
  Title2_second,
  Title4_second, Card_pretitle,
  Card_title,};
