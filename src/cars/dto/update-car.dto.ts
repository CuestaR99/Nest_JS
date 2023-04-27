import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    // {message:`El campo enviado no es un argumento valido`} mensaje personalizado en @IsString()
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    // @MinLength(3) para definir los caracteres minimos aceptados en el campo de texto
    readonly model?: string;
    
}