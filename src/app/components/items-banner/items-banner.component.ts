import { Component, Input, OnInit } from '@angular/core';
import { Tv } from '../../models/tv';
import { Movie } from '../../models/movie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() tvItems: Tv[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
