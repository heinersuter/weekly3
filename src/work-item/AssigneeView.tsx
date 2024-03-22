import React, {useState} from 'react';
import './AssigneeView.css';
import {Assignee, Assignees} from "./model/Assignee";

interface AssigneeViewProps {
    assignee: Assignee
}

export default function AssigneeView({assignee}: AssigneeViewProps) {
    const [selectedAssigneeName, setSelectedAssigneeName] = useState(assignee.name);

    return (
        <>
            <select
                value={selectedAssigneeName}
                onChange={e => setSelectedAssigneeName(e.target.value)}>
                <option value={Assignees.Heiner.name}>{Assignees.Heiner.name}</option>
                <option value={Assignees.Nilas.name}>{Assignees.Nilas.name}</option>
                <option value={Assignees.Sabine.name}>{Assignees.Sabine.name}</option>
                <option value={Assignees.Yannik.name}>{Assignees.Yannik.name}</option>
            </select>
        </>
    );
}
