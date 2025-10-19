import { Controller, Get, Post, Body, Query, Param, ParseIntPipe, HttpCode, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTasksQueryDto } from './dtos/get-tasks-query.dto';
import { AuthGuard } from './auth/auth.guard';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    /*
    DTO + ValidationPipe: Declarativo, limpio y escalable; valida y transforma automáticamente campos estándar como números, strings y enums.
    Pipe personalizado: Más control y flexibilidad para reglas complejas o condicionales, pero requiere más código y es menos reutilizable.
    */
    @Get()
    getTasks(@Query() query: GetTasksQueryDto) {
        console.log(query.page);
        return this.tasksService.getTasks();
    }

    //UseGuards para proteger rutas con condiciones personalizadas
    @Get('/provaGuard')
    @UseGuards(AuthGuard)
    getGuardTest() {
        return "Prova guard";
    }

    // ParseIntPipe convierte el id a number si falla lanzara una excepcion BadRequest
    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number) { 
        return this.tasksService.getTask(id);
    }

    //Control de validaciones
    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    //Ejemplo de custom response status code
    @Get('notFound')
    @HttpCode(404)
    notFound() {
        return { message: 'Task not found' };
    }
}
