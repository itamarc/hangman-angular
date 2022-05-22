import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HmControlsComponent } from './hm-controls/hm-controls.component';
import { HmWordComponent } from './hm-word/hm-word.component';
import { HmLettersComponent } from './hm-letters/hm-letters.component';
import { HmHangmanImgComponent } from './hm-hangman-img/hm-hangman-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HmControlsComponent,
    HmWordComponent,
    HmLettersComponent,
    HmHangmanImgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
