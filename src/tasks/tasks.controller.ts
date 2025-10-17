import { Controller, Delete, Get, Post, Put, Req, Res, Body, Query, Param } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import type { Request, Response } from 'express';

export interface GetTasksQuery {
    query: string;
}

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() query: GetTasksQuery) {
        console.log(query.query);
        return this.tasksService.getTasks();
    }

    @Get('/:id') 
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
    }

    //Sintaxis de express para utilizar en nestjs
    @Get('/express')
    getTasksExpress(@Req() req: Request, @Res() res: Response) {
        console.log(req.url);
        res.status(200).json({
            message: 'Tareas con express'
        });
    }

    @Post()
    createTask(@Body() task: Task) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(): string {
        return "actualizando tarea";
    }

    @Delete()
    deleteTask(): string {
        return "eliminando tarea";
    }
}
