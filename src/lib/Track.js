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
      '_onWindowRotation'
    ]);
  }

  _bindEvents() {
    var supportsOrientationChange = 'onorientationchange' in window,
      orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';

    $(window).on(orientationEvent, this._onWindowRotation);
  }

  cleanup() {

  }

  // Events
  _onWindowRotation(e) {
    this._callback({
      orientation: window.orientation
    });
  }
};