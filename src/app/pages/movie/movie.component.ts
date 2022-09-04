import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetail(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideo(id: string) {
    this.moviesService.getMovieVideo(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }
  getMovieImages(id: string) {
    this.moviesService.getMovieDImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
  // checkActorImg() {
  //   if (this.movieCredits) {
  //     this.movieCredits.cast.map((actor) => {
  //       if (actor.profile_path) {
  //         console.log(actor);
  //         return actor;
  //       } else {
  //         return;
  //       }
  //     });
  //     return this.movieCredits;
  //   } else {
  //     return;
  //   }
  // }
}
