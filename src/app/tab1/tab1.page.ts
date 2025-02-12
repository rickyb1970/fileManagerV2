import { Component } from '@angular/core';
import { FileHandlingService } from '../services/file-handling.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  fileName:string = '';
  fileContents: string = '';

  constructor(private fServices: FileHandlingService) {}

    fileCreate(){
      if(this.checkFileName()){
          this.fServices.createFile(this.fileName, this.fileContents);
      } else {
          alert("The file name is empty.");
          
      }
    }

    private checkFileName(): boolean {
       return (this.fileName === '') ? false : true;
    }


}
