import React from 'react';

export interface ErrorDetail {
  error: string;
}

export const HTMLError: React.FC<ErrorDetail> = ({ error }) => {
  return (
    <div className="error-container" dangerouslySetInnerHTML={{ __html: error }}>
      
    </div>
  );
};


