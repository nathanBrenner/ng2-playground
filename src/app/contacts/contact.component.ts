import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Http} from '@angular/http';

@Component({
	template: `
Contact {{(contact$ | async)?.name}}
`
})
export class ContactComponent {
	contact$;
	
	constructor(private route: ActivatedRoute, private http: Http){
		this.contact$ = route.params
				.map((p: any) => p.id)
				.switchMap(id => http.get(`https://starwars-json-server-ewtdxbyfdz.now.sh/people/${id}`))
				.map(res => res.json())
	}
}