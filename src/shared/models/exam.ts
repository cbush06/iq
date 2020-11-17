import IQObject from "./iqobject";

export default class Exam implements IQObject {
    
    _id?: string;
    title?: string;

    constructor( id?: string, title?: string ) {
        this._id = id;
        this.title = title;
    }
}