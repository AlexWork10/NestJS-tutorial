import { IsString, IsBoolean, MinLength, IsEmail, IsNotEmpty } from 'class-validator';


export class CreateTaskDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    title: string;
    
    @IsBoolean()
    status: boolean;

    @IsEmail()
    @IsString()
    email: string;
}