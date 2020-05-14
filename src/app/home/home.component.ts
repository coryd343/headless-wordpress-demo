import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../shared/services';
import { Post } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList: Post[]

  constructor(private wpService: WordpressService) { }

  async ngOnInit() {
    this.postList = [];
    //await this.getPosts();
    //console.log(this.postList);
  }

  async getPosts() {
    this.postList = await this.wpService.getPosts();
  }

}
