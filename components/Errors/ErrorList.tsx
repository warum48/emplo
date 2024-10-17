import React from 'react';

export interface ErrorDetail {
  type: string;
  loc: string[];
  msg: string;
  ctx?: Record<string, string>;
}

interface ErrorListProps {
  errors: ErrorDetail[];
}

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  return (
    <div className="border border-red-500 bg-red-100 dark:bg-red-900 dark:bg-opacity-10 p-4 text-black dark:text-white rounded-md text-xs">
      {errors.map((error, index) => (
        <div key={index} className="mb-2">
          <p>{error.msg}</p>
        </div>
      ))}
    </div>
  );
};

export default ErrorList;
