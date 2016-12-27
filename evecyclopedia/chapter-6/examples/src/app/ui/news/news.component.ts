import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  private newsId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['newsId'];
  }

}
