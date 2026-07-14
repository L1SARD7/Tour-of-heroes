import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent {
  @Input() item = ''
  @Output() logEvent = new EventEmitter<string>()
  logMessage() {
    console.log('log')
    this.logEvent.emit('log')
  }

  ngOnChanges(changes: any) {
        console.log('Hero changed:', changes);
  }
  constructor(public messageService: MessageService) {}
}
