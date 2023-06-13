import { Component, OnInit } from '@angular/core';
import { MovieService } from "../service/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movie: any
  constructor( private movieService: MovieService, private router: Router ) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((response) => {
      this.movie = response
    })
  }
  redirectToDetail() {
    this.router.navigate(['detail'])
  }
}
