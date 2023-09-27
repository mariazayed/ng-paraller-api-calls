import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostInterface} from '../interfaces/post.interface';
import {UserInterface} from '../interfaces/user.interface';

@Component({
	selector: 'app-sequential',
	templateUrl: './sequential.component.html',
	styleUrls: ['./sequential.component.css']
})
export class SequentialComponent {
	postData!: PostInterface;
	userData!: UserInterface;
	isLoading = false;

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		this.isLoading = true;
		this.http.get<PostInterface>('https://jsonplaceholder.typicode.com/posts/1').subscribe(
			(data: PostInterface) => {
				this.postData = data;
				this.http.get<UserInterface>('https://jsonplaceholder.typicode.com/users/1').subscribe(
					(data: UserInterface) => {
						this.userData = data;
						this.isLoading = false;
					},
					(error) => {
						console.error('Error in second API call', error);
						this.isLoading = false;
					}
				);
			},
			(error) => {
				console.error('Error in first API call', error);
				this.isLoading = false;
			}
		);
	}
}
