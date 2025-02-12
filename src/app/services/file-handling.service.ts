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
     
     async createFile(fileName: string, fileContents: string) {
         this.fileName = fileName;
         this.fileContents = fileContents;
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
            alert("Error encountered reading file. {error}");    
         }
     }

     async deleteFile() {
         try {
            await Filesystem.deleteFile({
              path: this.fileName,
              directory: Directory.Documents,
            }); 
            alert("File deleted successfully.");
         } catch (error) {
            alert("Error deleting file. {error}");
         }
     }

     async listFiles() {
         try {
            const result = await Filesystem.readdir({
              path: '',
              directory: Directory.Documents,
            });      
            
            this.fileList = result.files.map(file => file.name || '');
         } catch (error) {
            alert("Error in listing files. {error}");  
         }
     }
}
