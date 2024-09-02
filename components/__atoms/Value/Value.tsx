import React from 'react';
import { JSONViewer } from '../JSONViewer/JSONViewr';
//import JSONViewer from '@/components/__atoms/JSONViewer'; // Adjust the import path to where your JSONViewer component is located

type TProps = {
    value: any;
    postfix?: string;
}

const Value = ({ value, postfix='' }: TProps) => {
  if (value === undefined || value === null) {
    return <span>-</span>;
  }

  if (typeof value === 'string') {
    return <span>{value + postfix}</span>;
  }

  if (typeof value === 'object') {
    try {
      return <JSONViewer data={value} />;
    } catch (error) {
      console.error('Error rendering JSONViewer:', error);
      return <span>Invalid object</span>;
    }
  }

  return <span>Unsupported value</span>;
};

export default Value;
