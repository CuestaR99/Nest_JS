import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    
    // {message:`El campo enviado no es un argumento valido`} mensaje personalizado en @IsString()
    @IsString()
    readonly brand: string;

    @IsString()
    // @MinLength(3) para definir los caracteres minimos aceptados en el campo de texto
    readonly model: string;
    
}