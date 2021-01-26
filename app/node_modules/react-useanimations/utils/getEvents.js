"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getClickAndPlaySegmentsEvents = function getClickAndPlaySegmentsEvents(animation) {
  return {
    onClick: function onClick() {
      return animation.playSegments([0, 60], true);
    }
  };
};

var getClickPlayEvents = function getClickPlayEvents(animation) {
  return {
    onClick: function onClick() {
      animation.stop();
      animation.play();
    }
  };
};

var getHoverPlayAndStop = function getHoverPlayAndStop(animation) {
  return {
    onMouseEnter: function onMouseEnter() {
      return animation.play();
    },
    onMouseLeave: function onMouseLeave() {
      return animation.stop();
    }
  };
};

var getHoverPlayBackwardsEvents = function getHoverPlayBackwardsEvents(animation) {
  return {
    onMouseEnter: function onMouseEnter() {
      animation.setDirection(1);
      animation.play();
    },
    onMouseLeave: function onMouseLeave() {
      animation.setDirection(-1);
      animation.play();
    }
  };
};

var getClickAndPlayBackwardsEvents = function getClickAndPlayBackwardsEvents(animation, reverse) {
  var directionMenu = 1; // EG CHECKBOX WHICH NEED TO BE CHECKED AS INITIAL STATE, LET'S PLAY THE ANIMATION ASAP AUTOMATICALLY

  if (reverse) {
    animation.setDirection(directionMenu);
    animation.play();
    directionMenu *= -1;
  }

  return {
    onClick: function onClick() {
      animation.setDirection(directionMenu);
      animation.play();
      directionMenu *= -1;
    }
  };
};

var getEvents = function getEvents(_ref) {
  var animation = _ref.animation,
      reverse = _ref.reverse,
      animEffect = _ref.animEffect;

  if (animEffect === 'CLICK_PLAY_AND_SEGMENTS') {
    return getClickAndPlaySegmentsEvents(animation);
  }

  if (animEffect === 'CLICK_PLAY') {
    return getClickPlayEvents(animation);
  }

  if (animEffect === 'HOVER_PLAY_AND_STOP') {
    return getHoverPlayAndStop(animation);
  }

  if (animEffect === 'HOVER_PLAY_AND_BACKWARDS') {
    return getHoverPlayBackwardsEvents(animation);
  }

  if (animEffect === 'CLICK_PLAY_AND_BACKWARDS') {
    return getClickAndPlayBackwardsEvents(animation, reverse);
  }

  return getClickPlayEvents(animation);
};

var _default = getEvents;
exports["default"] = _default;