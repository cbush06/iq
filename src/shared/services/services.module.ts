import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from './database.service';
import { ModuleWithProviders } from '@angular/core';
import { PopulateService } from './populate.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders<ServicesModule> {
        return {
            ngModule: ServicesModule,
            providers: [
                { provide: DatabaseService },
                { provide: PopulateService }
            ]
        }
    }
}
