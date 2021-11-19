import { AfterViewInit, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { I18n, OpenBrew, OpenBrewViewModel } from './models/open-brew-model';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  get language(): string {
    let language = localStorage.getItem("language") as string;
    if (!language) {
      language = "de"
      localStorage.setItem("language", language);
    }

    return language;
  }

  set language(value: string) {
    localStorage.setItem("language", value)
  }

  i18n: any = {};
  openBrew: OpenBrewViewModel = {} as OpenBrewViewModel;

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login',
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
    },
    {
      label: 'Language',
      icon: 'english',
    },
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngAfterViewInit() {
    this.httpClient.get('assets/open-brew.json', { responseType: 'json' })
      .subscribe(response => {
        let openBrew = response as OpenBrew;
        this.openBrew = new OpenBrewViewModel(openBrew, this.language);
      });
  }

  setLanguage() {
    if (this.language == "en")
      this.language = "de"
    else
      this.language = "en"

    this.httpClient.get('assets/i18n.json', { responseType: 'json' })
      .subscribe(response => {
        this.i18n = new I18n(response, this.language);
      });
  }

  onClick($event: Event) {
    this.setLanguage()
  }

}
