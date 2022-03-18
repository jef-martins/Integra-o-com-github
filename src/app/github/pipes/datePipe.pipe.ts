import { Component, Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
    name: 'datePipe'
})

export class DatePipe implements PipeTransform {

    transform(date: string) {
        return format(new Date(date), 'dd/MM/yyyy');;
    }

}