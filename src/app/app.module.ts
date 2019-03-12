import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';

import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
// import { LyButtonModule } from '@alyle/ui/button';
// import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';

/** Import theme */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LyThemeModule.setTheme('minima-light'), // or minima-light 
    LyResizingCroppingImageModule,
    // LyButtonModule,
    // LyIconModule,
    LyTypographyModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }