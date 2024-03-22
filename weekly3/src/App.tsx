import React, {useEffect} from 'react';
import WeekView from "./week/WeekView";

export default function App() {
    useEffect(() => {
        document.title = 'Ämtliplan';
    }, []);

    return (
        <>
            <WeekView/>
        </>
    );
}
