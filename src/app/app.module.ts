import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import LocalEsMx from '@angular/common/locales/es-MX';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module';

registerLocaleData(LocalEsMx);
@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, SharedModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: LOCALE_ID,
			useValue: 'es-MX',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
