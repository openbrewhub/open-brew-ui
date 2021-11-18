import { AfterViewInit, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenBrew } from './models/open-brew-model';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  language: string = "de"
  content: any = [];
  json: any = {};
  openBrew: OpenBrew = {} as OpenBrew;

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'Docs',
      icon: 'notes'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
  ];


  constructor(private httpClient: HttpClient) {
   
  }

  ngAfterViewInit() {
    this.httpClient.get('assets/open-brew.json', { responseType: 'json' })
    .subscribe(response => {
      console.log(JSON.stringify(response))
      this.openBrew = response as OpenBrew;
    });
  } 

}
