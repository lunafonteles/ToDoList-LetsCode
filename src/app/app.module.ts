import { DirtyWordsDirective } from './dirty-words.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LineComponent } from './line/line.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './wrapper/detail/detail.component';

const appRoutes: Routes = [
  {path: 'home', component: WrapperComponent},
  {path: "'tasks/:id'", component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    LineComponent,
    DirtyWordsDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
