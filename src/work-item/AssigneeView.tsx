import React, {useState} from 'react';
import './AssigneeView.css';
import {AllAssignees} from "./model/Assignee";
import {WorkItemService} from "./work-item-service";
import {WorkItem} from "./model/WorkItem";

interface AssigneeViewProps {
    workItem: WorkItem
}

export default function AssigneeView({workItem}: AssigneeViewProps) {
    const [selectedAssigneeName, setSelectedAssigneeName] = useState(workItem.assignee.name);
    const workItemService = new WorkItemService();

    function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        workItemService.updateWorkItem({...workItem, assignee: AllAssignees.find(a => a.name === e.target.value)!});
        setSelectedAssigneeName(e.target.value)
    }
    
    return (
        <select className={`assignee-view ${selectedAssigneeName}`}
                value={selectedAssigneeName}
                onChange={onSelectChange}>
            {AllAssignees.map(a => (
                <option className={a.name} value={a.name}>{a.name}</option>
            ))}
        </select>
    );
}
