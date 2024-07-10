import { empoyees } from "@/mockdata/emploees";
import Employee from "./Employee";
import classes from './autogrid.module.css';

export const ResultList: React.FC = () => {
    return (
        <div className={classes.container}>
            {empoyees.map((employee) => (
                <Employee employee={employee}/>
            ))}
            
        </div>
    );
};