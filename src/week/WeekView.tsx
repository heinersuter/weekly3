import React from 'react';
import './WeekView.css';
import DayView from './DayView';
import {getCurrentWeekDates} from "../shared/dateHelpers";

const days:Date[] = getCurrentWeekDates();

export default function WeekView() {
    return (
        <div className="week-view">
            <h1 className="week-title">
                Ämtliplan
            </h1>
            <div className="days-container">
                {days.map((date, index) => (
                    <DayView key={index} date={date} />
                ))}
            </div>
        </div>
    );
}
