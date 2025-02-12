import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StateHandlingService {

     constructor() { }

     private appState: any = {
        fileName: '',
        fileContents: '',
     }

     async loadStateFromPreferences() {
         const storedState = await Preferences.get({ key: 'appState' });
         if(storedState.value){
            this.appState = JSON.parse(storedState.value);
         }
     } 

     async saveStateToPreferences() {
        await Preferences.set({
            key: 'appState',
            value: JSON.stringify(this.appState),
        });
     }

     getState() {
        return this.appState;
     }     

     updateState(newState: any) {
         this.appState = { ...this.appState, ...newState };
         this.saveStateToPreferences();
     }

     async clearState() {
        await Preferences.remove({ key: 'appState' });
        this.appState = {
          username: '',
          isLoggedIn: false,
        };
     }
}
