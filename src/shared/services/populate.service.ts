import { Injectable, isDevMode } from '@angular/core';
import Exam from '../models/exam';
import { v4 as uuidv4 } from 'uuid';

import { DatabaseService } from './database.service';

@Injectable({
    providedIn: 'root'
})
export class PopulateService {

    constructor(private dbSvc: DatabaseService) {}

    init() {
        // Delete the database
        if(isDevMode()) {
            this.wipeDb()
                .then(() => this.loadDb())
                .catch(e => console.log(e));
        }
    }

    private async wipeDb() {
        await this.dbSvc.wipe();
    }

    private async loadDb() {
        try {
            await this.dbSvc.db.put(new Exam(uuidv4(), 'Exam1'));
        } catch(e) {
            console.log(e);
        }
    }
}
