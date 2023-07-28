import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  left = 0;
  top = 0;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  //Note Data
  @Input()
  title:string = ""
  @Input()
  subTitle:string = ""
  @Input()
  content:string = ""
  @Input()
  metaData?:string

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.left;
    this.offsetY = event.clientY - this.top;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.left = event.clientX - this.offsetX;
      this.top = event.clientY - this.offsetY;
    }
  }

  stopDragging() {
    this.isDragging = false;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.stopDragging();
  }
}
