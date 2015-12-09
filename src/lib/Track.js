import $ from 'jquery';
import _ from 'lodash';

export default class {
  constructor(callback) {
    this._callback = callback;
    this._bindFns();
    this._bindEvents();
  }

  _bindFns() {
    _.bindAll(this, [
      '_onMatchMediaChange'
    ]);
  }

  _bindEvents() {
    var mql = window.matchMedia('(orientation: portrait)');
    mql.addListener(this._onMatchMediaChange);
  }

  cleanup() {

  }

  // Events
  _onMatchMediaChange(m) {
    this._callback({
      orientation: (m.matches === true) ? 'portrait' : 'landscape'
    });
  }
};