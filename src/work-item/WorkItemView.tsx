import React from 'react';
import './WorkItemView.css';
import AssigneeView from "./AssigneeView";
import {WorkItem} from "./model/WorkItem";
import {WorkItemService} from "./work-item-service";
import {isToday} from "../shared/dateHelpers";  

interface WorkItemCardProps {
    workItem: WorkItem;
    date: Date;
}

export default function WorkItemView({workItem, date}: WorkItemCardProps) {
    const [isCompleted, setIsCompleted] = React.useState(workItem.isCompleted);
    const workItemService = new WorkItemService();

    function onCheckBoxChange() {
        workItemService.updateWorkItem({...workItem, isCompleted: !isCompleted});
        setIsCompleted(!isCompleted);
    }
    
    return (
        <div className={getClassForCheckedAndToday(isToday(date), isCompleted)}>
            <div className={'work-item-title'}>
                {workItem.title}
            </div>
            <div className={'work-item-status-row'}>
                <input type="checkbox" className={'assignee-checkbox'} checked={isCompleted}
                       onChange={onCheckBoxChange}/>
                <AssigneeView assignee={workItem.assignee}/>
            </div>
        </div>
    );
}

function getClassForCheckedAndToday(isToday:boolean, isCompleted: boolean):string{
    if(isToday && !isCompleted){
        return 'work-item-view work-item-view-uncompleted-today';
    }
    if(isCompleted){
        return 'work-item-view work-item-view-completed';
    }
    return 'work-item-view work-item-view-uncompleted';
}