import { Component } from '@angular/core';

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

  changeStyle() {
    console.log(this.currentStyle);
    let bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = './../assets/bootstrap-dark.css';
    bootstrapLink.id = 'theme';
    if (this.currentStyle === 'default') {
      this.currentStyle = 'dark';
      this.anotherStyle = 'default';
      document.head.appendChild(bootstrapLink);
    } else {
      this.currentStyle = 'default';
      this.anotherStyle = 'dark';
      const mode = document.getElementById('theme') || null;
      mode?.remove();
    }
    console.log(this.currentStyle);
  }

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
