import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentItem = 'Logo'
  currentStyle = 'default';
  anotherStyle = 'dark'
  title = 'Tour of heroes';

  onClick () {
      console.log(this.currentStyle)
    if (this.currentStyle === 'default') {
      this.currentStyle = 'dark'
      this.anotherStyle = 'default'

    } 
    else {
      this.currentStyle = 'default'
      this.anotherStyle = 'dark'
    }

      console.log(this.currentStyle)}

  isShowActive = false
  actualDate = 0
  getDate() {
    return Date.now()
  }  
      
  showDate() {
    console.log(this.actualDate, this.isShowActive)
    this.actualDate = this.getDate()
    this.isShowActive = true
  }

  log!: string
  getLogs($event: string) {
    console.log('fsdf')
    this.log = $event
  }

} 
