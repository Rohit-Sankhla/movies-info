import { Component, OnInit } from '@angular/core';
import { MovieService } from "../service/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: any
  constructor( private movieService: MovieService, private router: Router ) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((response) => {
      this.movie = response
    })
  }
  goToList() {
    this.router.navigate([''])
  }
}
