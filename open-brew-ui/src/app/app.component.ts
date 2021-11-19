import { AfterViewInit, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { i18n } from './models/i18n'
import { OpenBrew, OpenBrewViewModel } from './models/open-brew-model';
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

  openBrew: OpenBrewViewModel = {} as OpenBrewViewModel;
  i18n: i18n = {} as i18n;

  menuItems: MenuItem[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchI18n();
  }

  ngAfterViewInit() {
    this.httpClient.get('assets/open-brew.json', { responseType: 'json' })
      .subscribe(response => {
        let openBrew = response as OpenBrew;
        this.openBrew = new OpenBrewViewModel(openBrew, this.language);
      });
  }

  changeLanguage() {
    if (this.language == "en")
      this.language = "de";
    else
      this.language = "en";

    this.fetchI18n();
  }

  fetchI18n() {
    this.httpClient.get('assets/i18n.json', { responseType: 'json' })
      .subscribe(response => {
        this.i18n = new i18n(response, this.language);
        
        this.menuItems = [
          {
            label: this.i18n.menu.LANGUAGE.key,
            icon: 'language',
          },
          {
            label: this.i18n.menu.PRICING.key,
            icon: 'attach_money',
          },
          {
            label: this.i18n.menu.SIGNUP.key,
            icon: 'login',
          },
        ];
      });
  }

  onClick($event: Event) {
    this.changeLanguage();
  }
}
