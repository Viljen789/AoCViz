import React from 'react';
import { useParams } from 'react-router-dom';

import Day1 from '../components/Solutions/Day1';
 const solutions = {
    1: Day1
 }
    const ProblemPage = () => {
        const { day } = useParams();
        const dayInt = parseInt(day);
        const DayComponent = solutions[dayInt] || (() => <h1>Day not found</h1>);

        return(
            <div>
                <h1>Solution for Day {dayInt}</h1>
                <DayComponent />
            </div>
        )
    }
export default ProblemPage;