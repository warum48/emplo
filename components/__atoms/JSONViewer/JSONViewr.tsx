import { Box, NavLink, Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

export const JSONViewer: React.FC<{ data: any }> = ({ data }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <Box>
      {isExpanded ? (
        <>
          <a onClick={()=>{setIsExpanded(false)}}>collapse</a>
          <pre>
            <Text c="dimmed" size="xs">
              {JSON.stringify(data, null, 2)}
            </Text>
          </pre>
        </>
      ) : (
        <a onClick={()=>{setIsExpanded(true)}}>expand debug</a>
      )}
    </Box>
  );
};
