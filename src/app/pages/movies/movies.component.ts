import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] | Tv[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies(1);
  }

  getMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.getMovies(event.page + 1);
  }
}
