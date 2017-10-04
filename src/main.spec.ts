import { Person } from './main';
describe('main typescript file', ()=>{
    let p1: Person;
    beforeEach(()=>{
        p1 = new Person();        
    });
    it('person should have a name', ()=>{
        expect(p1.getName()).toEqual('debasis');
        expect(p1.getName()).not.toEqual('panda');
    });
    it('person should have a correct name', ()=>{
        expect(p1.getName()).not.toEqual('panda1');
    });
});