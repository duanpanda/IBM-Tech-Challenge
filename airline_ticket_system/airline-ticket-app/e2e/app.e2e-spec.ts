/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for airline-ticket-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be airline-ticket-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('airline-ticket-app');
    })
  });

  it('network-name should be airline_ticket_system@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('airline_ticket_system@0.0.1.bna');
    });
  });

  it('navbar-brand should be airline-ticket-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('airline-ticket-app');
    });
  });

  
    it('Flight component should be loadable',() => {
      page.navigateTo('/Flight');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Flight');
      });
    });

    it('Flight table should have 2 columns',() => {
      page.navigateTo('/Flight');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });
  
    it('Ticket component should be loadable',() => {
      page.navigateTo('/Ticket');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Ticket');
      });
    });

    it('Ticket table should have 9 columns',() => {
      page.navigateTo('/Ticket');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('AirlineAdmin component should be loadable',() => {
      page.navigateTo('/AirlineAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AirlineAdmin');
      });
    });

    it('AirlineAdmin table should have 3 columns',() => {
      page.navigateTo('/AirlineAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('AirlineAgency component should be loadable',() => {
      page.navigateTo('/AirlineAgency');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AirlineAgency');
      });
    });

    it('AirlineAgency table should have 3 columns',() => {
      page.navigateTo('/AirlineAgency');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('AirTicketClient component should be loadable',() => {
      page.navigateTo('/AirTicketClient');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AirTicketClient');
      });
    });

    it('AirTicketClient table should have 3 columns',() => {
      page.navigateTo('/AirTicketClient');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('TicketTransaction component should be loadable',() => {
      page.navigateTo('/TicketTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TicketTransaction');
      });
    });
  

});