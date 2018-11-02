import { Component } from '@angular/core';
import { Plugins, LocalNotification } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   async triggerEvent() {
      const notifications: LocalNotification[] = [];

      notifications.push({
          title: 'Task is over',
          body: 'This is the content',
          id: 0,
      });

      await Plugins.LocalNotifications.schedule({notifications: notifications});
  }

}
