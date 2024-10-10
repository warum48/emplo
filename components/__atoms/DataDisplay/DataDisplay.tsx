import React from 'react';

interface DataDisplayProps {
  name?: string;
  data: Record<string, any>;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, name='' }) => {
  const renderData = (data: Record<string, any>) => {
    return Object.entries(data || {} ).map(([key, value]) => (
      <div key={key} className="mb-1 text-xs">
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
    <>
   {name && <div className="text-sm mb-1">{name}</div>} 
    <div className=" w-full max-w-3xl overflow-auto opacity-50">
      {renderData(data)}
    </div>
    </>
  );
};

export default DataDisplay;
