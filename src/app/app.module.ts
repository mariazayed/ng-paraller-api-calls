import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SequentialComponent} from './sequential/sequential.component';
import {ParallelComponent} from './parallel/parallel.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		SequentialComponent,
		ParallelComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
