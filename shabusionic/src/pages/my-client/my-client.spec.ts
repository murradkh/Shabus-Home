import {  TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import {} from 'jasmine';
import { MyClientPage } from './my-client';
import {  NavController,AlertController } from 'ionic-angular';
import { Authunication} from '../../services/serverside'
import{ LoadingController} from 'ionic-angular';
import { AlertControllerMock,NavControllerMock, LoadingControllerMock} from 'ionic-mocks';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('MyClientPage Component:', () => {
    let fixture:ComponentFixture<MyClientPage>;
    let component:MyClientPage;
    let el: DebugElement; 
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MyClientPage],
        imports: [
            HttpModule,
            IonicModule.forRoot(MyClientPage)
        ],
        providers: [
          { provide: NavController, useClass: NavControllerMock },
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
    //   let el: DebugElement; 
    //   el = fixture.debugElement.query(By.css('ion-icon')); 
    
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
        it('PhoneNumer have to defined', () => {
            expect(component.phoneNumber).toBeDefined();
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
  });
  describe("Checking the Template:",()=>{
 

it("The title of the page Should be 'זיהוי נוסע'",()=>{
 
    el = fixture.debugElement.query(By.css('ion-title')); 
expect(el.nativeElement.textContent.trim()).toBe('זיהוי נוסע');
});
  });
  });
