import {Component, OnInit} from '@angular/core';
import {MockService} from './mockservice.service';
@Component({
  selector: 'mfs-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'My Food Story - works!';
  private resources: Array<any>;
  
  constructor(private resource: MockService) {
  }
  
  ngOnInit(): void {
    this.resource.getMockSource()
      .map(response => response.json().screenshots)
      .subscribe(x => this.resources = x);
  }
  
  likeMe(i) {
    if (this.resources[i].liked == 0)
      this.resources[i].liked = 1;
    else
      this.resources[i].liked = 0;
  }
  
  deleteMe(i) {
    this.resources.splice(i, 1);
  }
}
