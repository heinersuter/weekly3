export type Assignee = { name: string, short: string };
export const Assignees = {
    Heiner: {name: "Heiner", short: "H"} as Assignee,
    Nilas: {name: "Nilas", short: "N"} as Assignee,
    Sabine: {name: "Sabine", short: "S"} as Assignee,
    Yannik: {name: "Yannik", short: "Y"} as Assignee,
    NoOne: {name: "Niemand", short: "O"} as Assignee,
};

export const AllAssignees : Assignee[] = Object.values(Assignees); 