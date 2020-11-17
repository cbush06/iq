import { Injectable, isDevMode } from '@angular/core';


import PouchDB from 'pouchdb';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private _dbName = "iq";
    private _db: PouchDB.Database;

    constructor() {
        if (isDevMode()) {
            this._dbName = "iq_dev";
        }
        this._db = new PouchDB(this._dbName);
    }

    init() {
        this.db.info().then(info => console.log(info));
    }

    async wipe() {
        try {
            if(isDevMode()) {
                await this.db.destroy().then(() => this._db = new PouchDB(this._dbName));
            } else {
                console.warn("wipe() called when not running in DEV mode. Call has been ignored.")
            }
        } catch(e) {
            console.log(e);
        }
    }

    get db() {
        return this._db;
    }
}
