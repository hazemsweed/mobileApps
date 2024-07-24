import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activeLang: string = 'ar';
  constructor(private menuCtrl: MenuController, private translocoService: TranslocoService) {
    this.translocoService.langChanges$.subscribe((activeLang) => {
      this.activeLang = activeLang;
    });
  }

  closeMenu() {
    this.menuCtrl.close();  // Close the menu
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

}
