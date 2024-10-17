import { TextUtils } from '@/utils/TextUtils';
import React from 'react';

interface DataDisplayProps {
  name?: string;
  data: Record<string, any>;
  textStyle?: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, name='', textStyle='opacity-50 text-xs' }) => {
  const renderData = (data: Record<string, any>) => {
    return Object.entries(data || {} ).map(([key, value]) => (
      <div key={key} className="mb-1 ">
        <span className="font-semibold text-gray-700 dark:text-gray-200">{key}:</span>
        {typeof value === 'object' && value !== null ? (
          <div className="ml-4 border-l-2 border-gray-300 pl-4">
            {renderData(value)}
          </div>
        ) : (
          <span className="ml-2 text-gray-800 dark:text-gray-300">{
            TextUtils.isHTMLString(value) ?
            <div dangerouslySetInnerHTML={{ __html: value }} className='^pl-4 richText'></div> :
            String(value) 
           
            
            }</span>
        )}
      </div>
    ));
  };

  return (
    <>
   {name && <div className="text-sm mb-1">{name}</div>} 
    <div className={`${textStyle} w-full max-w-3xl overflow-auto `}>
      {renderData(data)}
    </div>
    </>
  );
};

export default DataDisplay;
