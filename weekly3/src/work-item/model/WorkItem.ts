import {DayOfWeek} from "../../week/model/DayOfWeek";

import {Assignee} from "./Assignee";

export interface WorkItem {
    id: number;
    title: string;
    assignee: Assignee;
    dayOfWeek: DayOfWeek;
    isCompleted: boolean;
}

export interface WorkItemTemplate {
    title: string;
    assignee: Assignee;
    dayOfWeek: DayOfWeek;
}
