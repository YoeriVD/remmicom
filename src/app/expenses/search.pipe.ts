import { PipeTransform, Pipe } from '@angular/core';
import { Expense } from './expense';

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(collection: Expense[], searchValue: string) {
        if (!collection) { return []; }
        if (!searchValue) { return collection; }
        return collection.filter(expense =>
            expense.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
    }
}
