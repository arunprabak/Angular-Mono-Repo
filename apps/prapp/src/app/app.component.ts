import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pr App Tya';

  navList: any = [
    {
      id: 1,
      icon: 'compare_arrows',
      path: 'master',
      name: 'Master'
    },
    {
      id: 2,
      icon: 'label_important',
      path: 'mapping',
      name: 'Mapping'
    },
    {
      id: 3,
      icon: 'find_in_page',
      path: 'operation',
      name: 'Operation'
    },
    {
      id: 4,
      icon: 'settings_ethernet',
      path: 'report',
      name: 'Reports'
    },
    {
      id: 5,
      icon: 'call_split',
      path: 'finance',
      name: 'Journal Entry'
    }
  ];
}
