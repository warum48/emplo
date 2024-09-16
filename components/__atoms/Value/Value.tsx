import React from 'react';
import {JSONViewer} from '@/components/__atoms/JSONViewer/JSONViewr'; 

type TProps = {
    value: any;
    prefix?: string;
    postfix?: string;
    missing?: string;
}

const Value = ({ value, prefix='',postfix='', missing='—' }: TProps) => {
  if (value === undefined || value === null) {
    return missing ;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return <>{value + postfix}</>;
  }

  if (Array.isArray(value)) {
    return <>{value.join(', ') + postfix}</>;
  }

  if (typeof value === 'object') {
    try {
      return <JSONViewer data={value} />;
    } catch (error) {
      console.error('Error rendering JSONViewer:', error);
      return <>Invalid object</>;
    }
  }

  return <>Unsupported value</>;
};

export default Value;
