import { Button, Group } from '@mantine/core';
import { Preloader } from '../Preloader/Preloader';

type TProps = {
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  hideText?: boolean;
  [key: string]: any;
};

export const ButtonWithPreloader = ({
  disabled,
  loading,
  children,
  onClick = () => {},
  hideText = false,
}: TProps) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      { !loading && !hideText &&children}{' '}
      {loading && (
        <span className="-mt-1">
          <Preloader />
        </span>
      )}
    </Button>
  );
};
