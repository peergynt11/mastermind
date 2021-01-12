import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { stringify } from '@angular/compiler/src/util';

/**
 * @title Drag&Drop enter predicate
 */
@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css'],
})
export class DragdropComponent {
  all = [1,2,3,4,5,6];
  even = [];

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.even)
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return true;
    // return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return true;
  }
 /** Set the right background-color */
  setBackground(entry: number) {
    let farbe: string = '';
    switch (entry) {
      case 1:       
        farbe = 'red';
        break;
      case 2:       
        farbe = 'blue';
        break;
      case 3:       
        farbe = 'green';
        break;
      case 4:
        farbe = 'yellow';
        break;
      case 5:
        farbe = 'orange';
        break;
      case 6:
        farbe = 'black';
        break;
      default:
        farbe = 'black';
        break;
      }
    let styles = {
      'background':  farbe
    };
    return styles;
  }
}