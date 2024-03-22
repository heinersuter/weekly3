import React from 'react';
import './AssigneeView.css';
import {Assignee} from "./model/Assignee";

interface AssigneeViewProps {
    assignee: Assignee | null
}

export default function AssigneeView({assignee}: AssigneeViewProps) {
    return (
        <span className={`assignee-view ${assignee?.name}`}>{assignee?.name}</span>
    );
}
