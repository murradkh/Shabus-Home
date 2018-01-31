import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import {} from 'jasmine';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyClientPage } from './my-client';
import { IonicPage, NavController,AlertController } from 'ionic-angular';
import { Authunication} from '../../services/serverside'
import{ LoadingController} from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { AlertControllerMock,NavControllerMock, LoadingControllerMock} from 'ionic-mocks';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';

import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';


describe('MyClientPage Component:', () => {
    let fixture;
    let component;
    
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MyClientPage],
        imports: [
            HttpModule,
            IonicModule.forRoot(MyClientPage)
        ],
        providers: [
          { provide: NavController, useClass: NavController },
          { provide: LoadingController, useClass: LoadingControllerMock },
          { provide: AlertController, useClass: AlertControllerMock },
          { provide: XHRBackend, useClass: MockBackend },
            Authunication
        ]
      })
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MyClientPage);
      component = fixture.componentInstance;
    });

    it('MyClientPage should be created', () => {
        expect(component instanceof MyClientPage).toBe(true);
      });
    describe('Checking initial values:', () => {
      it('Client Counter value have to be 1', () => {
        expect(component.clientCounter).toBe(1);
            //    component.removeClient();
            //    component.removeClient();
            // expect(component.clientCounter).toBe(1);
        });
        it('PhoneNumer have to undefined', () => {
            expect(component.PhoneNumer).not.toBeDefined();
   });

});
describe('Checking the functions validition:', () => {
it("addClient function:Client Counter maximum have to be 5",()=>{
    component.addClient();
    expect(component.clientCounter).toBe(2);
    component.addClient();
    component.addClient();
    component.addClient();
    component.addClient();
    expect(component.clientCounter).toBeLessThan(6);
  });
  it('removeClient function:Client Counter value have to be minium 1', () => {
    component.removeClient();
         component.removeClient();
         expect(component.clientCounter).toBeGreaterThan(0);
  });
  xit("Send function:this function should call the navctrl.push function",()=>{
    expect(component.navCtrl.push).toHaveBeenCalled();
  });
});

  });