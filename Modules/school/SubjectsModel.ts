import {subjectSchema} from './interfaces'

export class SubjectsModel{
    title: string;
    lessons: number;
    description: string;
    id: string;
    constructor(obj:subjectSchema){
        this.title = obj.title;
        this.lessons = obj.lessons;
        this.description = obj.description;
        this.id = Math.floor(Math.random() * 5001) + obj.title + Math.floor(Math.random() * 1001);
    }
}  

