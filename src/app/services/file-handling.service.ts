import { Injectable } from '@angular/core';
import { Directory, Filesystem, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class FileHandlingService {

     constructor() { }

     fileName: string = '';
     fileContents: any = '';
     fileList: string[] = [];
     
     async createFile() {
         try {
            await Filesystem.writeFile({
              path: this.fileName,
              data: this.fileContents,
              encoding: Encoding.UTF8,
              directory: Directory.Documents,
            }); 
            alert("File created successfully.");
         } catch (error) {
            alert("Error creating file {error}");
            alert("Failed to create file.");
         }
     }

     async readFile() {
         try {
            const fileContents = await Filesystem.readFile({
                path: this.fileName,
                encoding: Encoding.UTF8,
                directory: Directory.Documents,
            }); 
            this.fileContents = fileContents.data;
         } catch (error) {
            alert()    
         }
     }

}
