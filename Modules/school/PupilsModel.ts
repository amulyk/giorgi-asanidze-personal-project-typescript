import {pupilsSchema} from './interfaces'
export class PupilsModel{

    _map: Map<string, pupilsSchema>;
    id: string;
    constructor(){
        this._map = new Map();
        this.id = "";
    }

    checkExistence(id: string){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }
    }

     async add(obj: pupilsSchema){
        this.id = Math.floor(Math.random() * 5001) + obj.name.first + Math.floor(Math.random() * 1001);
        obj.id = this.id
        this._map.set(obj.id, obj);
        return obj.id;
    }

    async read(id: string){
        this.checkExistence(id);
        return this._map.get(id);
    }

    async remove(id: string){
        this.checkExistence(id);
        this._map.delete(id);
    }

    async update(id: string, obj:pupilsSchema){
        this.checkExistence(id);
        this._map.set(id, obj);
    }
}

