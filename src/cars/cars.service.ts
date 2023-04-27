import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import {v4 as uuid} from 'uuid';
import { Car } from './Interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
import { urlToHttpOptions } from 'url';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id:uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // }
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find( car => car.id === id);
        if (!car){
            //Enviar un mensaje de error mas concreto al cliente
            throw new NotFoundException(`El id '${id}' no se encuentra espeificado`);
        }
        return car;

    }

    create(createCarDto: CreateCarDto){

        const car: Car ={
            id: uuid(),
            ...createCarDto
            // model: createCarDto.brand,
            // brand: createCarDto.model,
        }
        this.cars.push(car);
        return car;
    }
    update(id:string, updateCarDto:UpdateCarDto){
        
        let carBD = this.findOneById(id);

        // if (updateCarDto.id && updateCarDto.id !== id)
        //     throw new BadRequestException(`Car is not valid`);

        this.cars = this.cars.map(car =>{
            if (car.id === id){
                carBD = {
                    ...carBD,
                    ...updateCarDto,
                    id,
                }
                return carBD;
            }
            return car;
        });
        return carBD;    //carro actualizado
    }

    delete(id: string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !==id);

    }
    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }
}
