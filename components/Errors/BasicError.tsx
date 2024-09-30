import React from 'react';
import Value from '../__atoms/Value/Value';

export interface BasicErrorDetail {
  error: string | any;
  className?: string;
}

export const BasicError: React.FC<BasicErrorDetail> = ({ error, className }) => {
  return (
    <div className={className + " error-container" }
    //dangerouslySetInnerHTML={{ __html: error }}
    >
      <div className="font-bold">Error</div>
      <Value value={error} />
    </div>
  );
};


