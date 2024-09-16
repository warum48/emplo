import Employee from './Employee';
import classes from './autogrid.module.css';

import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';
import { Debugger } from '../__atoms/Debugger/Debugger';

type TProps = {
  results?: any;
};

export const ResultList = ({ results }: TProps) => {
  return (
    <>
      <Debugger>
        <JSONViewer data={results} />
      </Debugger>
      <div className={classes.container}>
        {results.items.map((employee: any) => (
          <Employee employee={employee} />
        ))}
      </div>
    </>
  );
};
