import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
    providedIn: 'root'
})
export class ExamService {

    constructor(private dbSvc: DatabaseService) { }
}
