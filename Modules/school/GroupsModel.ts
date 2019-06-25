import {  PupilsModel } from '../index';
export class GroupsModel{

    _map: any;
    _tmp: any;
    constructor(){
        this._map = new Map();
        this._tmp = [];
    }

    checkExistence(id: string){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }
    }

    iderror(){
        throw new Error('There is no such id !');
    }

    async add(rom: any){
        let obj = {room: undefined, id: ""};
        obj.room = rom;
        obj.id = ((Math.floor(Math.random() * 5001) + rom.toString()) + Math.floor(Math.random() * 1001)).toString();
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

    async update(id: string, obj: any){
        let oldid = this._map.get(id).id;
        this.checkExistence(id);
        obj.id = oldid;
        this._map.set(id, obj);
    }

    async readAll(){
        let mas: any = [];
        this._map.forEach((key: any) => {
            mas.push(this._map.get(key));
        });
        return mas;
    }

    async addPupil(groupId: string, pupil: any){
        if(this._map.get(groupId)){
            this._tmp.push({group:this._map.get(groupId), pupilId:pupil.id, "pupil": pupil._map.get(pupil.id)});
        }
        else{
            this.iderror();
        }
    }

    async removePupil(groupId: string, pupil: any){
        for(let i=0; i<this._tmp.length; i++){
            if(this._tmp[i].group.id == groupId && this._tmp[i].pupilId == pupil.pid){
                this._tmp.slice(i,i);
            }
        }
    }
}