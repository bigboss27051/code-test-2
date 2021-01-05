import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'code-test2';
  categories: string[] = [];
  categoriesItem: string[] = [];
  inputFilter = ''
  constructor(private http: HttpClient) {}

  getCategories() {
    this.http
      .get<string[]>('https://api.publicapis.org/categories')
      .subscribe((result) => {
        console.log({ result });
        this.categories = result;
        this.categoriesItem = result;
        console.log(this.categories);
      });
  }

  onFilter(word: string) {
    const data = this.categories.filter(function (str) {
      return str.toLowerCase().includes(word) ;
    });
    if (data) {
      this.categoriesItem = [...data]
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
