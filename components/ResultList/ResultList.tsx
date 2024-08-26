import { empoyees } from "@/mockdata/emploees";
import Employee from "./Employee";
import classes from './autogrid.module.css';
import { ParticlesComponent } from "../Particles/Particles";


import { useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { JSONViewer } from "../__atoms/JSONViewer/JSONViewr";
import { Debugger } from "../__atoms/Debugger/Debugger";

export const ResultList: React.FC = () => {
    const results = useSelector((state: RootState) => state.search.results);
    console.log('results'   , results);
    return (
        <>
        <Debugger>
        <JSONViewer data={results} /></Debugger>
        {/*} <ParticlesComponent /> */}
        <div className={classes.container}>
            {results.items.map((employee:any) => (
                <Employee employee={employee}/>
            ))}
            
        </div>
       
        </>
    );
};