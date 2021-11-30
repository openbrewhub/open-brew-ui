import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { i18n } from './models/i18n'
import { OpenBrew, OpenBrewViewModel } from './models/open-brew-model';
import { MenuItem } from './models/menu-item';
import { Auth } from 'aws-amplify';
import { MatDialog, } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  currentUser: any = null;
  username: string = "";
  password: string = "";

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

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog,
  ) {
    Auth.currentAuthenticatedUser().then((user) => {
      this.currentUser = user;
    }).finally(() => {
      this.fetchI18n();
    });
  }

  openDialog(newPasswordRequired: boolean = false): void {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '250px',
      data: {
        newPasswordRequired,
      },
    });

    dialogRef.beforeClosed().subscribe(result => {
      if (!newPasswordRequired) {
        this.username = result.user;
        this.password = result.password;
      }

      this.login(this.username, this.password, result.newPassword);
    });
  }

  ngAfterViewInit() {
    this.getSchema();
  }

  private getSchema() {
    this.httpClient.get('https://openbrew-definition-prod.s3.eu-central-1.amazonaws.com/open-brew-1-0-0.example.json', { responseType: 'json' })
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
    this.getSchema();
  }

  login(username: string, password: string, newPassword: string = "") {
    try {
      Auth.signIn(username, password).then(user => {
        this.currentUser = user;

        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          if (newPassword) {
            Auth.completeNewPassword(user, newPassword).then(user => {
              this.currentUser = user;
            }).catch(e => {
              console.log(e);
            }).catch(err => {
            });
          } else {
            this.openDialog(true);
          }
        }
      })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          this.fetchI18n();
        });
    } catch (error) {
      console.log('error signing in', error);
    }
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
            label: this.currentUser ? `Hi ${this.currentUser.username}` : this.i18n.menu.LOGIN.key,
            icon: this.currentUser ? '' : 'login',
          },
        ];

        if (this.currentUser) {
          this.menuItems.push({
            label: "Logout",
            icon: "logout",
          })
        }
      });
  }

  onClick($event: Event) {
    switch (($event.currentTarget as any).id) {
      case "language": {
        this.changeLanguage();
        break;
      }
      case "login": {
        this.openDialog();
        break;
      }
      case "logout": {
        Auth.signOut().then((data) => {
          this.currentUser = null;
          this.fetchI18n();
        });
        break;
      }
    }
  }
}
