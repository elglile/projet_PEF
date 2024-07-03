"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var VanillaHelper = function () {
  return {
    formDataCreator: function formDataCreator(dataObj) {
      var formData = new window.FormData();
      Object.keys(dataObj).forEach(function (propKey) {
        var value = dataObj[propKey];
        if (value) formData.append(propKey, value);
      });
      return formData;
    },
    ajax: function ajax(_ref) {
      var url = _ref.url,
        data = _ref.data,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'GET' : _ref$type,
        _ref$async = _ref.async,
        async = _ref$async === void 0 ? true : _ref$async,
        _ref$error = _ref.error,
        error = _ref$error === void 0 ? function (f) {
          return f;
        } : _ref$error,
        _ref$success = _ref.success,
        success = _ref$success === void 0 ? function (f) {
          return f;
        } : _ref$success;
      var payload = _typeof(data) === 'object' ? this.formDataCreator(data) : data;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        var readyState = xmlhttp.readyState,
          status = xmlhttp.status,
          _xmlhttp$responseText = xmlhttp.responseText,
          responseText = _xmlhttp$responseText === void 0 ? '' : _xmlhttp$responseText;
        if (readyState === XMLHttpRequest.DONE) {
          if (status === 200 && success) {
            try {
              if (responseText === '') {
                success({});
                return;
              }
              ;
              success(JSON.parse(responseText));
              return;
            } catch (error) {
              console.log('error', error);
            }
          } else if (xmlhttp.status === 400) {
            error(JSON.parse(responseText));
          } else {
            error(JSON.parse(responseText));
          }
        }
      };
      xmlhttp.open(type, url, async ? async : false);
      xmlhttp.send(['POST', 'DELETE'].includes(type) ? payload : undefined);
    },
    setElementStyle: function setElementStyle(element, styleObj) {
      if (!element || _typeof(styleObj) !== 'object') return;
      Object.keys(styleObj).forEach(function (stylePropKey) {
        var stylePropValue = styleObj[stylePropKey];
        if (stylePropValue) element.style[stylePropKey] = stylePropValue;
      });
    },
    getObjectPropertSafe: function getObjectPropertSafe(obj) {
      var pathArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!obj) return defaultValue;
      if (pathArr.length === 0) return defaultValue;
      var current = obj;
      for (var i = 0; i < pathArr.length; i++) {
        var objProp = pathArr[i];
        var currentValue = current[objProp];
        if (!currentValue) return defaultValue;
        current = currentValue;
      }
      return current;
    },
    destructObject: function destructObject(obj) {
      var destructOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!obj) return [];
      if (_typeof(obj) !== 'object') return [];
      if (destructOrder.length === 0) return [];
      var result = [];
      for (var i = 0; i < destructOrder.length; i++) {
        result.push(obj[destructOrder[i]]);
      }
      return result;
    },
    // jQuery -> $(selector).on("click", handler)
    addEventListenerToNodeList: function addEventListenerToNodeList(selector, eventName, handler) {
      Array.from(document.querySelectorAll(selector)).forEach(function (el) {
        el.addEventListener(eventName, handler);
      });
    },
    // jQuery -> get: $(selector).val(); - set: $(selector).val(newValue);
    setGetValuesNodeList: function setGetValuesNodeList(selector, newValue) {
      var valuesArray = [];
      Array.from(document.querySelectorAll(selector)).forEach(function (el) {
        if (newValue || newValue === '') {
          el.value = newValue;
        }
        valuesArray.push(el.value);
      });
      return valuesArray;
    },
    // jQuery -> $(selector).addClass('className'); - $(selector).removeClass('className');
    addRemoveClass: function addRemoveClass(selector, className) {
      var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (typeof selector === 'string') {
        Array.from(document.querySelectorAll(selector)).map(function (el) {
          var classList = el.classList;
          classList[remove ? 'remove' : 'add'](className);
        });
      } else if (selector) {
        var classList = selector.classList;
        classList[remove ? 'remove' : 'add'](className);
      }
    },
    // jQuery -> $(selector).parent(tagName)
    getFirstParentElementByTagName: function getFirstParentElementByTagName(element) {
      var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var parentElement = this.getObjectPropertSafe(element, ['parentElement'], null);
      if (!parentElement) return null;
      var parentElementTag = this.getObjectPropertSafe(parentElement, ['tagName'], '');
      if (parentElementTag === tagName.toUpperCase()) return parentElement;
      return this.getFirstParentElementByTagName(parentElement, tagName);
    },
    getFirstParentElementByClassName: function getFirstParentElementByClassName(element) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var parentElement = this.getObjectPropertSafe(element, ['parentElement'], null);
      if (!parentElement) return null;
      var parentElementClass = this.getObjectPropertSafe(parentElement, ['className'], '');
      if (parentElementClass.split(' ').includes(className)) return parentElement;
      return this.getFirstParentElementByClassName(parentElement, className);
    },
    hasClass: function hasClass(element, classes) {
      if (!element) return false;
      if (Array.isArray(classes)) {
        var classListArr = Array.from(element.classList);
        return !classes.find(function (classValue) {
          return !classListArr.includes(classValue);
        });
      } else if (typeof classes === 'string') {
        return classes.includes(classes);
      }
    },
    addClass: function addClass(element, classes) {
      if (!element) return false;
      if (Array.isArray(classes)) {
        classes.filter(function (classValue) {
          return classValue;
        }).forEach(function (classValue) {
          element.classList.add(classValue);
        });
      } else if (typeof classes === 'string' && classes) {
        return classes.includes(classes);
      }
    }
  };
}();