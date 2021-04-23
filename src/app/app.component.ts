import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: environment.useTailwindTemplate ? './app-tw.component.html' : './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'lightning-swap-templates';
}
