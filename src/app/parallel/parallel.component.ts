import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {PostInterface} from '../interfaces/post.interface';
import {UserInterface} from '../interfaces/user.interface';

@Component({
	selector: 'app-parallel',
	templateUrl: './parallel.component.html'
})
export class ParallelComponent implements OnInit {

	postData!: PostInterface;
	userData!: UserInterface;
	isLoading = false;

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		this.isLoading = true;

		forkJoin({
			postData: this.http.get('https://jsonplaceholder.typicode.com/posts/1'),
			userDate: this.http.get('https://jsonplaceholder.typicode.com/users/1')
		}).subscribe(
			(results: any) => {
				this.postData = results.postData;
				this.userData = results.userDate;
				this.isLoading = false;
			},
			(error) => {
				console.error('Error in API calls', error);
				this.isLoading = false;
			}
		);
	}
}
