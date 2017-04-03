var consts = require('../../utils/constants');
var utils = require('../../utils/utils');

var NewWorkorderPage = function() {
  var workorderFormSelector = 'form[name="workorderForm"]';
  var locators = {
    workorderForm: element(by.css(workorderFormSelector)),
    fields: {
      title: element(by.css(workorderFormSelector + ' #inputTitle')),
      address: element(by.css(workorderFormSelector + ' #inputAddress')),
      latitude: element(by.css(workorderFormSelector + ' input[name="lattitude"]')),
      longitude: element(by.css(workorderFormSelector + ' input[name="longitude"]')), // ID is wrong in UI
      summary: element(by.css(workorderFormSelector + ' #inputSummary')),
    },
    dropdowns: {
      workflow: element(by.css(workorderFormSelector + ' #workflow')),
      assignee: element(by.css(workorderFormSelector + ' #assignee')),
    },
    finish: {
      date: element(by.css(workorderFormSelector + ' #inputFinishDate')),
      time: element(by.css(workorderFormSelector + ' #inputFinishTime')),
    },
    warnings: {
      workflowWarning: element(by.css('[ng-messages="workorderForm.workflow.$error"] div')),
      titleWarning: element(by.css('[ng-messages="workorderForm.title.$error"] div')),
      addressWarning: element(by.css('[ng-messages="workorderForm.address.$error"] div')),
      latitudeWarning: element(by.css('[ng-messages="workorderForm.lattitude.$error"] div')),
      longitudeWarning: element(by.css('[ng-messages="workorderForm.longitude.$error"] div')),
      finishDateWarning: element(by.css('[ng-messages="workorderForm.finishDate.$error"] div')),
      finishTimeWarning: element(by.css('[ng-messages="workorderForm.finishTime.$error"] div')),
      summaryWarning: element(by.css('[ng-messages="workorderForm.summary.$error"] div')),
    },
    createButton: element(by.css('button[aria-label="Create Workorder"]')),
    updateButton: element(by.css('button[aria-label="Update Workorder"]')),
    cancelButton: element(by.css('button[aria-label="Close"]'))
  };

  var commands = {

    navigate: function() {
      return browser.get(consts.HASH + consts.workorders.URL_NEW);
    },
    selfCheck: function() {
      browser.getLocationAbsUrl().then(function(result) {
        utils.expectResultIsEquelTo(result, consts.workorders.URL_NEW);
        return locators.workorderForm.isPresent();
      }).then(function(result) {
        utils.expectResultIsTrue(result);
      });
    },
    // enter data into page fields
    enterTitle: function(title) {
      return locators.fields.title.sendKeys(title);
    },
    enterAddress: function(address) {
      return locators.fields.address.sendKeys(address);
    },
    enterLatitute: function(latitude) {
      return locators.fields.latitude.sendKeys(latitude);
    },
    enterLongitude: function(longitude) {
      return locators.fields.longitude.sendKeys(longitude);
    },
    enterFinishDate: function(finishDateEdit) {
      return locators.finish.date.sendKeys(finishDateEdit);
    },
    enterFinishTime: function(finishTime) {
      return locators.finish.time.sendKeys(finishTime);
    },
    enterSummary: function(summary) {
      return locators.fields.summary.sendKeys(summary);
    },
    // clear date and time data
    clearFinishDate() {
      locators.finish.date.sendKeys(protractor.Key.BACK_SPACE + protractor.Key.TAB + protractor.Key.BACK_SPACE + protractor.Key.TAB + protractor.Key.BACK_SPACE);
    },
    clearFinishTime() {
      locators.finish.time.sendKeys(protractor.Key.BACK_SPACE + protractor.Key.TAB + protractor.Key.BACK_SPACE + protractor.Key.TAB + protractor.Key.BACK_SPACE);
    }
  };

  return {
    locators,
    commands
  };
};

module.exports = NewWorkorderPage();