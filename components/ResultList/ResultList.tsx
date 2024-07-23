import { empoyees } from "@/mockdata/emploees";
import Employee from "./Employee";
import classes from './autogrid.module.css';
import { ParticlesComponent } from "../Particles/Particles";

export const ResultList: React.FC = () => {
    return (
        <>
        
        {/*} <ParticlesComponent /> */}
        <div className={classes.container}>
            {empoyees.map((employee) => (
                <Employee employee={employee}/>
            ))}
            
        </div>
       
        </>
    );
};