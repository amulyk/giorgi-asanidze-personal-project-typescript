import {teacherSchema, subjectSchema, pupilsSchema} from './interfaces'

export class GradebooksModel{

    _grdbook: any;
    _mainbook: any;
    _groups: any;
    _teachers: any;
    _lms: any;
    id: string;
    constructor(groups: any, teachers: any, lms: any){
        this._grdbook = new Map();
        this._mainbook = [];
        this._groups = groups;
        this._teachers = teachers;
        this._lms = lms;
        this.id = "";
    }

    checkIdtype(id:string){
        if(typeof id != "string"){
            throw new Error('invalid type');
        }
    }

    async add(level: any, idgr: any){
        let newobj = {id: "", level: undefined, groupid: undefined };
        this.id = (Math.floor(Math.random() * 80000001)).toString();
        newobj.id = this.id;
        newobj.level = level;
        newobj.groupid = idgr;
        this.checkIdtype(idgr);
        this._grdbook.set(this.id, newobj);
        return this.id;
    }

    async clear(){
        this._groups = null;
        this._teachers = null;
        this._lms = null;
    }

    async addRecord(gradebookId: any, record: any){
        let pupilName = "";
        for(let i=0; i<this._groups._tmp.length; i++){
            if( this._groups._tmp[i].pupil.id == record.pupilId){
                pupilName = this._groups._tmp[i].pupil.name.first;
            }
        }

        let newobj = {
            name: pupilName,
            records: [
              {
                teacher: this._teachers._map.get(record.teacherId).name.first,
                subject: this._lms._map.get(record.subjectId).title,
                lesson: record.lesson,
                mark: record.mark
              }
            ]
        };
        
        let finalobj = {gradebookid: gradebookId, record:  newobj, idpupil: record.pupilId};
        this._mainbook.push(finalobj);
    }

    async read(first: any, second: any){
        for(let i=0; i<this._mainbook.length; i++){
            if(this._mainbook[i].gradebookid==first && this._mainbook[i].idpupil==second)
            {
                return this._mainbook[i].record;
            }
        }
    }

    async readAll(mainid: any){
        let result = [];
        for(let i=0; i<this._mainbook.length; i++){
            if(this._mainbook[i].gradebookid==mainid)
            {
                result.push(this._mainbook[i].record);
            }
        }
        return result;
    }
}