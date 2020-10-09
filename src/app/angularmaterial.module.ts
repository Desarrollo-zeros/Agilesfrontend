import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatInputModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule
    ],
    exports: [
        MatInputModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule
    ]
})
export class AngularMaterialModule { }
