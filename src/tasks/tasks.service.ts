import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

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

    getTask(id : number) : Task {
        const taskFound = this.tasks.find(task => task.id === id);

        if(!taskFound) {
            throw new NotFoundException('Tarea no encontrada');
        }

        return taskFound
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }
}