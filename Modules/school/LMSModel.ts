import {subjectSchema} from './interfaces'

export class LMSModel {

  _map: any;
  constructor(){
    this._map = new Map();
  }

  checkExistence(obj: subjectSchema){
    if(!this._map.get(obj.id)){
      return false;
    }
    else{
      return true;
    }
  }

  async add(obj: subjectSchema){
    this._map.set(obj.id, obj);
  }

  async remove(obj: subjectSchema){
    if(this.checkExistence(obj)){
        this._map.delete(obj.id); 
    } 
  }

  async update(during: number, obj: subjectSchema){
    if(this.checkExistence(obj)){
      let curhitory = this._map.get(obj.id);
      curhitory.lessons = during;
      this._map.set(obj.id, curhitory);
    }
  }

  async verify(obj: subjectSchema){
    if(this.checkExistence(obj)){
      let result = false;
      if(!this._map.get(obj.id)){
        result = false;
      }
      else{
        result=true;
      }
      return result;
    }
    else{
      return false;
    }
  }

  async readAll(){
    let mas: subjectSchema[] = [];
    this._map.forEach((value: any, key: any, ownMap: any) => {
        mas.push(value);
    });
    return mas;
  }
}