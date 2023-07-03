import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts1: any[];
  posts2: any[];

  constructor(private http: HttpClient) {
    this.fetchData();
  }
  fetchData() {
    this.http.get<any>('assets/homedata.json').subscribe(
      (data) => {
        this.posts1 = data.posts1;
        this.posts2 = data.posts2;
        console.log(data); // Logging the fetched data
      },
      (error) => {
        console.error(error);
      }
    );
  }





  searchQuery: string;
  showSearchHint: boolean = false;

  userProfilePhoto = 'assets/profile.jpg';
  tweetMessage = '';
  tweets: Tweet[] = [];



  toggleSearchHint(): void {
    this.showSearchHint = !this.showSearchHint;
  }
 

  postTweet() {
    if (this.tweetMessage) {
      const newTweet: Tweet = {
        username: 'Shweta Kale',
        handle: 'shweta',
        message: this.tweetMessage,
        image: 'https://images.unsplash.com/your-image-url',
        likes: 0,
       comments: []
      };

      this.tweets.unshift(newTweet);
      this.tweetMessage = ''; 
    }
  }

  likePost(tweet: any) {
    
    tweet.likes++;
  }

  promptComment(tweet: any) {
    const comment = prompt('Enter your comment:');
    if (comment) {
      tweet.comments.push(comment);
    }
  }
}

interface Tweet {
  username: string;
  handle: string;
  message: string;
  image: string;
  likes: number; 
  comments: string[];
}


