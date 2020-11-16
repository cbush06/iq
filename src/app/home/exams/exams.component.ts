import { Component, OnInit } from '@angular/core';

interface Exam {
    id: number;
    name: string;
}

@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

    columnNames: string[] = ['id', 'name'];
    dataSource: Exam[] = [
        { id: 0, name: 'SEC+' },
        { id: 1, name: 'NET+' },
        { id: 2, name: 'A+' }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
