import React from 'react';
import './DayView.css';
import {formatDate, formatDayOfWeek, isToday, toDayOfWeek} from "../shared/dateHelpers";
import WorkItemView from "../work-item/WorkItemView";
import {WorkItemService} from "../work-item/work-item-service";

interface DayProps {
    date: Date;
}

export default function DayView({date}: DayProps) {
    const workItemService = new WorkItemService();
    const workItems = workItemService.getWorkItems(toDayOfWeek(date.getDay()));
    
    return (
        <div className={'day-view'}>
            <div className={`day-title${isToday(date) ? ' day-title-today' : ''}`}>
                <div>
                    {formatDate(date)}
                </div>
                <div>
                    {formatDayOfWeek(date)}
                </div>
            </div>
            <div className="work-item-container">
                {workItems.map(wi => (
                    <WorkItemView key={wi.id} workItem={wi} date={date}/>
                ))}
            </div>
        </div>
    );
}
