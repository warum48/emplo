import { empoyees } from "@/mockdata/emploees";
import Employee from "./Employee";
import classes from './autogrid.module.css';
import { ParticlesComponent } from "../Particles/Particles";


import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { JSONViewer } from "../__atoms/JSONViewer/JSONViewr";

export const ResultList: React.FC = () => {
    const results = useSelector((state: RootState) => state.search.results);
    console.log('results'   , results);
    return (
        <>
        <JSONViewer data={results} />
        {/*} <ParticlesComponent /> */}
        <div className={classes.container}>
            {results.candidates.map((employee:any) => (
                <Employee employee={employee}/>
            ))}
            
        </div>
       
        </>
    );
};