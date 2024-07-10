import { Button } from '@mantine/core';
import { IconInfoSmall } from '@tabler/icons-react';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type TProps = {
  expanded: boolean;
  showWhenCollapsed?: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
};

export const CardExpandButton = ({
  expanded = false,
  setExpanded,
  showWhenCollapsed = true,
}: TProps) => {
  return (
    <>
      {(showWhenCollapsed || expanded) && (
        <Button
          p={0}
          size="compact-xs"
          variant="light"
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            borderRadius: '100px',
            width: '30px',
            height: '30px',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '✕' : <IconInfoSmall size={36} />}
        </Button>
      )}
    </>
  );
};

//redeploy
