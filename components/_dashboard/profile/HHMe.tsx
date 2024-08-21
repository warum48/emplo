import React from 'react';

interface DataDisplayProps {
  data: Record<string, any>;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  const renderData = (data: Record<string, any>) => {
    return Object.entries(data || {} ).map(([key, value]) => (
      <div key={key} className="mb-4">
        <span className="font-semibold text-gray-700 dark:text-gray-200">{key}:</span>
        {typeof value === 'object' && value !== null ? (
          <div className="ml-4 border-l-2 border-gray-300 pl-4">
            {renderData(value)}
          </div>
        ) : (
          <span className="ml-2 text-gray-800 dark:text-gray-300">{String(value)}</span>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {renderData(data)}
    </div>
  );
};

export default DataDisplay;
