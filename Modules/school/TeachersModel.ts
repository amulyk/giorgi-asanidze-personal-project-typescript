import {teacherSchema} from './interfaces'

export class TeachersModel{

    _map: Map<string, teacherSchema>;
    constructor(){
        this._map = new Map();
    }

    newerror(id:string){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }
    }


    // Sex and Date validation
    async add(obj: teacherSchema){
        obj.id = (Math.floor(Math.random() * 5001) + obj.name.first + Math.floor(Math.random() * 1001)).toString();
        this._map.set(obj.id, obj);
        return obj.id;
    }

    async read(id:string){
        this.newerror(id);
        return this._map.get(id);
    }

    async remove(id:string){
        this.newerror(id);
        this._map.delete(id);   
    }

    async update(id:string, obj:teacherSchema){
        this.newerror(id);
        this._map.set(id, obj);
    }
}
