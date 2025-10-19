// src/tasks/dto/get-tasks-query.dto.ts
import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTasksQueryDto {
  @Type(() => Number) // convierte de string a number
  @IsInt()
  @Min(1)
  page: number;

  @IsOptional()
  @IsString()
  filter?: string;
}