import { Component } from '@angular/core';
import { FileHandlingService } from '../services/file-handling.service';
import { IonActionSheet, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  fileName:string = 'newfile.note';
  fileContents: string = '';

  constructor(private fServices: FileHandlingService) {}

  actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  
    fileCreate(){
      if(this.checkFileName()){
          this.fServices.createFile(this.fileName, this.fileContents);
          this.clearEntries();
      } else {
          alert("The file name is empty.");

      }
    }

    private checkFileName(): boolean {
       return (this.fileName === '') ? false : true;
    }

    private clearEntries() {
        this.fileName = '';
        this.fileContents = '';
    }




}
