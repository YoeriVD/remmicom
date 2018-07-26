import { SearchPipe } from './search.pipe';
import { Expense } from './expense';

describe('SearchPipe', () => {
    let pipe: SearchPipe;
    beforeEach(() => {
        pipe = new SearchPipe();
    });
    it('should filter a list of expenses', () => {
        const inputList: Expense[] = [
            { description: 'aaa', amount: 15.5, date: new Date(2018, 1, 1) },
            { description: 'bbb', amount: 15.5, date: new Date(2018, 1, 1) },
        ];
        expect(pipe.transform(inputList, 'a').length).toBe(1);
    });

    it('should handle null values', () => {
        expect(pipe.transform(null, 'a')).toEqual([]);
    });
    it('should handle undefined values', () => {
        expect(pipe.transform(undefined, 'a')).toEqual([]);
    });
    it('should handle empty collections', () => {
        expect(pipe.transform([], 'a')).toEqual([]);
    });
});
