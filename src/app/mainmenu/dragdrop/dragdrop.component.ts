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
  maxEntries = 4;
  all = [1,2,3,4,5,6];
  computer = [1,2,3,4];
  even = [];
  result = []

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    //das geht nicht ?! Kein Zugriff auf this.even.length 
    // return this.even.length <= this.maxEntries;
    let laenge = item.dropContainer.data.length-1
 
    // Von 6 Element max 4 auswählen
    return laenge >= 2 
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

  getNumberOfElements() {
    return this.even.length >= this.maxEntries;
  }

  checkColors() {
    let a=this.even
    let b=this.computer
    this.result = []

    a.forEach(a_element => {
        if (b.includes(a_element)) {
            let index_a = a.indexOf (a_element);
            let index_b = b.indexOf (a_element);
            if (index_a === index_b) {
              this.result.push('Position!')
            } else {
              this.result.push('Farbe')
            }
        }
    });
  }
}