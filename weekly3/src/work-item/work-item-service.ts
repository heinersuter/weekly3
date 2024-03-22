import {DayOfWeek} from "../week/model/DayOfWeek";
import {WorkItem, WorkItemTemplate} from "./model/WorkItem";
import {Assignees} from "./model/Assignee";
import {isBeforeCurrentWeek} from "../shared/dateHelpers";

export class WorkItemService {

    private initialValues: WorkItemTemplate[] = [
        {title: "Abfall Entsorgen", dayOfWeek: DayOfWeek.Monday, assignee: Assignees.Heiner},
        {title: "Getränke kaufen", dayOfWeek: DayOfWeek.Monday, assignee: Assignees.Heiner},
        {title: "Wohnung aufräumen", dayOfWeek: DayOfWeek.Monday, assignee: Assignees.Heiner},
        {title: "Abfallsack parat machen", dayOfWeek: DayOfWeek.Monday, assignee: Assignees.Sabine},
        {title: "Abfallsack rausbringen", dayOfWeek: DayOfWeek.Tuesday, assignee: Assignees.Sabine},
        {title: "Kühlschrank kontrollieren", dayOfWeek: DayOfWeek.Tuesday, assignee: Assignees.Sabine},
        {title: "Grüncontainer rausstellen", dayOfWeek: DayOfWeek.Wednesday, assignee: Assignees.Sabine},
        {title: "Kinder in Turnhalle abholen", dayOfWeek: DayOfWeek.Thursday, assignee: Assignees.Heiner},
        {title: "Kinder baden", dayOfWeek: DayOfWeek.Friday, assignee: Assignees.Heiner},
        {title: "Papier bündeln", dayOfWeek: DayOfWeek.Friday, assignee: Assignees.Heiner},
        {title: "Essen in Keller kontrollieren", dayOfWeek: DayOfWeek.Friday, assignee: Assignees.Sabine},
        {title: "Einkaufen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.Sabine},
        {title: "Ämtlis besprechen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.Sabine},
        {title: "WC Papier nachfüllen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Badetücher austauschen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Handtücher austauschen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Waschen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Bad staubsaugen", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Bettwäsche wechseln", dayOfWeek: DayOfWeek.Saturday, assignee: Assignees.NoOne},
        {title: "Kinder baden", dayOfWeek: DayOfWeek.Sunday, assignee: Assignees.Heiner},
    ];

    getWorkItems(dayOfWeek: DayOfWeek): WorkItem[] {
        this.resetIfNeeded()
        
        const workItems: WorkItem[] = [];
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('workItemService.workItems')) {
                workItems.push(JSON.parse(localStorage.getItem(key)!));
            }
        });
        return workItems.filter(wi => wi.dayOfWeek === dayOfWeek);
    }
    
    updateWorkItem(workItem: WorkItem) {
        localStorage.setItem(`workItemService.workItems.${workItem.id}`, JSON.stringify(workItem));        
    }
    
    private resetIfNeeded() {
        const lastReset = this.getLastReset();
        if (lastReset === null || isBeforeCurrentWeek(lastReset)){
            this.clearWorkItems();
            const workItems = this.initialValues.map((wi, index) => {
                return (
                    {
                        ...wi,
                        id: index + 1,
                        isCompleted: false
                    } as WorkItem)
            });
            workItems.forEach(wi => {
                localStorage.setItem(`workItemService.workItems.${wi.id}`, JSON.stringify(wi));
            });
            localStorage.setItem('workItemService.lastReset', new Date().toISOString());
        }
    }
    
    private getLastReset(): Date | null {
        const lastResetString = localStorage.getItem('workItemService.lastReset');
        if (lastResetString === null) {
            return null;
        }
        
        return new Date(lastResetString);
    }
    
    private clearWorkItems(){
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('workItemService.workItems')) {
                localStorage.removeItem(key);
            }
        });
    }
}