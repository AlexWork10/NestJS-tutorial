import { Injectable } from '@nestjs/common';

export class Task {
    title: string;
    status: boolean;
    id: number;
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id : number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    createTask(task: Task): Task {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }
}