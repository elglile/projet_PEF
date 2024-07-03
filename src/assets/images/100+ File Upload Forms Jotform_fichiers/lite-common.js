"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LiteCommon = function () {
  return {
    translate: function translate(text, replacePayload) {
      if (text.locale && typeof text.locale === 'function') return text.locale(replacePayload);
      return text;
    },
    track: function track(_ref, actionName, target) {
      var trackerKey = _ref.trackerKey,
        user = _ref.user;
      var device = LiteCommon.getDeviceType();
      var action = "".concat(device, ":").concat(actionName);
      var actor = VanillaHelper.getObjectPropertSafe(window, ['user', 'username'], '');
      if (user) {
        actor = VanillaHelper.getObjectPropertSafe(user, ['username'], '');
      }
      var tick = VanillaHelper.getObjectPropertSafe(window, [trackerKey, 'tick'], function (f) {
        return f;
      });
      tick({
        actor: actor,
        target: target,
        action: action
      });
    },
    // Form, Approval, App, PDF, Tables
    handleCloneGTMAction: function handleCloneGTMAction(cloneButtonRef) {
      var cloneActionKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!cloneButtonRef) return;
      if (!cloneActionKey || cloneActionKey === '') return;
      var payload = {
        event: cloneActionKey
      };
      var clonedTemplateSlug = cloneButtonRef.getAttribute('data-slug');
      if (clonedTemplateSlug) {
        payload = _objectSpread(_objectSpread({}, payload), {}, {
          slug: clonedTemplateSlug
        });
      }
      var gtmLayerObject = options.isAppEmbedMode ? window.parent.dataLayer : window.dataLayer;
      if (!gtmLayerObject) return;
      setTimeout(function () {
        return gtmLayerObject.push(payload);
      }, 0);
    },
    getCurrentContext: function getCurrentContext() {
      return VanillaHelper.getObjectPropertSafe(window, ['directoryContext'], '');
    },
    isLandingMode: function isLandingMode() {
      var templateDirectoryMode = VanillaHelper.getObjectPropertSafe(window, ['templateDirectoryMode'], '');
      return templateDirectoryMode.indexOf('landing') !== -1;
    },
    isStandaloneMode: function isStandaloneMode() {
      var bodyClassList = Array.from(VanillaHelper.getObjectPropertSafe(document, ['body', 'classList'], []));
      return bodyClassList.indexOf('standalone') !== -1;
    },
    getTemplateMetaInfo: function getTemplateMetaInfo(templateSource) {
      if (LiteCommon.isLandingMode()) {
        return {
          templateSource: 'LANDING',
          templateContext: 'landing'
        };
      }
      if (LiteCommon.isStandaloneMode()) {
        return {
          templateSource: templateSource,
          templateContext: 'standalone'
        };
      }
      return {
        templateSource: 'TEMPLATES',
        templateContext: LiteCommon.getCurrentContext()
      };
    },
    getDeviceType: function getDeviceType() {
      var innerWidth = VanillaHelper.getObjectPropertSafe(window, ['innerWidth'], 800);
      if (innerWidth <= 480) return 'mobile';
      return innerWidth <= 768 ? "tablet" : "desktop";
    },
    isMobile: function isMobile() {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    openFormLimitModal: function openFormLimitModal(limit) {
      var formLimitContainer = document.querySelector("div[data-container='form-limit']");
      if (formLimitContainer) {
        var formLimitSectionModal = VanillaHelper.getFirstParentElementByTagName(formLimitContainer, 'section');
        if (formLimitSectionModal) formLimitSectionModal.classList.remove("hide");
        var limitCountSpan = formLimitContainer.querySelector("span[data-container='limit-count']");
        if (limitCountSpan) limitCountSpan.innerHTML = limit;
      }
      var limitModal = document.querySelector("p[data-container='modal-limit-locale']");
      if (limitModal) {
        var initialLimitText = limitModal.innerText;
        var modalLimitContent = LiteCommon.translate(initialLimitText, {
          'formLimit': limit
        });

        //Temp. replacement issue fix on language replacement function.
        if (modalLimitContent.includes("{formLimit}")) {
          modalLimitContent = modalLimitContent.replaceAll("{formLimit}", limit);
        }
        limitModal.innerHTML = modalLimitContent;
      }
      var limitModalClasses = ['modal-open', 'overflow-hidden'];
      if (!VanillaHelper.hasClass(document.body, limitModalClasses)) {
        VanillaHelper.addClass(document.body, limitModalClasses);
      }
      if (!VanillaHelper.hasClass(document.body, 'modal-limit-open')) {
        VanillaHelper.addClass(document.body, 'modal-limit-open');
      }
    },
    getClonePayload: function getClonePayload(useTemplateBtn, templateData) {
      var templateType = templateData.templateType,
        templateID = templateData.templateID,
        templateSpecifier = templateData.templateSpecifier,
        templateClass = templateData.templateClass;
      var commonProperties = {};
      if (templateClass) {
        commonProperties = _objectSpread(_objectSpread({}, commonProperties), {}, {
          toggleDisableClone: function toggleDisableClone(customValue) {
            templateClass.disableTemplateClone = customValue !== undefined ? customValue : !templateClass.disableTemplateClone;
          }
        });
      }
      switch (templateType) {
        case 'form':
          var isCardForm = templateSpecifier === 'card';
          var salesforceFormTemplateCategoryID = '3254377341';
          var templateCategories = useTemplateBtn.getAttribute('data-categories') || '';
          var src = window.frameElement && window.frameElement.src;
          var teamID = src && src.indexOf('teamID=') > -1 && src.split('teamID=').length > 0 ? src.split('teamID=')[1].split('&')[0] : '';
          var folderID = src && src.indexOf('folderID=') > -1 && src.split('folderID=').length > 0 ? src.split('folderID=')[1].split('&')[0] : '';
          return _objectSpread({
            templateSrc: 'MYFORMS',
            actionKey: 'cloneForm',
            gtmActionKey: 'cloneForm',
            newResourceURLFormat: '/build/',
            listingType: 'form-templates',
            isSalesforceTemplate: templateCategories.includes(salesforceFormTemplateCategoryID),
            customCloneResponseIDPath: ['form', 'id'],
            extraClonePayload: _objectSpread(_objectSpread({
              theme: isCardForm ? 'cardform' : 'classic',
              formID: templateID
            }, teamID ? {
              teamID: teamID
            } : {}), folderID ? {
              folderID: folderID
            } : {}),
            extraOnSuccessCallback: function extraOnSuccessCallback(clonedResourceID) {
              var _window = window,
                _window$dataLayer = _window.dataLayer,
                dataLayer = _window$dataLayer === void 0 ? [] : _window$dataLayer;
              var event = 'createForm';
              var eventAction = 'Complete';
              dataLayer.push({
                event: event,
                eventAction: eventAction
              });
              LiteCommon.track('formCreationCompleted', clonedResourceID);
            }
          }, commonProperties);
        case 'pdf':
          var isESignTemplate = templateSpecifier === 'e-sign';
          return _objectSpread(_objectSpread(_objectSpread({
            newResourceURLFormat: isESignTemplate ? '/sign/' : '/pdf-editor/new/',
            actionKey: isESignTemplate ? 'cloneESignTemplate' : 'logCloneContext',
            gtmActionKey: isESignTemplate ? 'cloneSignDocument' : 'clonePDF'
          }, isESignTemplate && {
            customCloneResponseIDPath: ['formID'],
            extraClonePayload: {
              signable: true
            }
          }), !isESignTemplate && {
            useTemplateID: true
          }), {}, {
            listingType: "pdf-templates".concat(isESignTemplate ? '/e-sign' : '')
          }, commonProperties);
        case 'app':
          return _objectSpread({
            templateSrc: 'MYAPPS',
            gtmActionKey: 'cloneApp',
            listingType: 'app-templates',
            newResourceURLFormat: '/app/build/',
            extraOnSuccessCallback: function extraOnSuccessCallback(clonedResourceID) {
              var _window2 = window,
                _window2$parent = _window2.parent,
                parent = _window2$parent === void 0 ? {} : _window2$parent;
              var user = parent.user,
                _user = parent._user;
              if (!user && !_user) return;
              LiteCommon.track({
                trackerKey: 'portalAppEvents',
                user: user || _user
              }, 'appCreated', {
                isPWA: false,
                portalID: clonedResourceID,
                device: LiteCommon.getDeviceType()
              });
            }
          }, commonProperties);
        case 'approval':
          return _objectSpread({
            templateSrc: 'MYAPPROVALS',
            gtmActionKey: 'cloneApproval',
            listingType: 'approval-templates',
            newResourceURLFormat: '/workflow/'
          }, commonProperties);
        case 'page':
          return _objectSpread({
            templateSrc: 'MYPAGES',
            gtmActionKey: 'clonePage',
            listingType: 'page-templates',
            newResourceURLFormat: '/page/build/'
          }, commonProperties);
        case 'table':
          return _objectSpread({
            templateSrc: 'MYTABLES',
            useParentCustomHandler: true,
            gtmActionKey: 'cloneTable',
            listingType: 'table-templates',
            newResourceURLFormat: '/tables/'
          }, commonProperties);
        default:
          return false;
      }
    },
    handleUseTemplateClick: function handleUseTemplateClick(e, templateData) {
      var _ref2 = e || {},
        el = _ref2.currentTarget,
        eventTarget = _ref2.target;
      if (!el) return;
      var clonePayload = LiteCommon.getClonePayload(eventTarget, templateData);
      if (!clonePayload || _typeof(clonePayload) === 'object' && Object.keys(clonePayload).length === 0) return;
      var listingType = clonePayload.listingType,
        gtmActionKey = clonePayload.gtmActionKey,
        _clonePayload$templat = clonePayload.templateSrc,
        templateSrc = _clonePayload$templat === void 0 ? '' : _clonePayload$templat,
        newResourceURLFormat = clonePayload.newResourceURLFormat,
        _clonePayload$useTemp = clonePayload.useTemplateID,
        useTemplateID = _clonePayload$useTemp === void 0 ? false : _clonePayload$useTemp,
        _clonePayload$extraCl = clonePayload.extraClonePayload,
        extraClonePayload = _clonePayload$extraCl === void 0 ? {} : _clonePayload$extraCl,
        _clonePayload$actionK = clonePayload.actionKey,
        actionKey = _clonePayload$actionK === void 0 ? 'useTemplate' : _clonePayload$actionK,
        _clonePayload$toggleD = clonePayload.toggleDisableClone,
        toggleDisableClone = _clonePayload$toggleD === void 0 ? function (f) {
          return f;
        } : _clonePayload$toggleD,
        _clonePayload$customC = clonePayload.customCloneResponseIDPath,
        customCloneResponseIDPath = _clonePayload$customC === void 0 ? ['id'] : _clonePayload$customC,
        _clonePayload$usePare = clonePayload.useParentCustomHandler,
        useParentCustomHandler = _clonePayload$usePare === void 0 ? false : _clonePayload$usePare,
        _clonePayload$extraOn = clonePayload.extraOnSuccessCallback,
        extraOnSuccessCallback = _clonePayload$extraOn === void 0 ? function (f) {
          return f;
        } : _clonePayload$extraOn,
        _clonePayload$isSales = clonePayload.isSalesforceTemplate,
        isSalesforceTemplate = _clonePayload$isSales === void 0 ? false : _clonePayload$isSales;
      var buttonText = el.innerText;
      var id = el.getAttribute('data-template');
      var pleaseWaitText = 'Please wait...';
      el.innerText = LiteCommon.translate(pleaseWaitText);
      el.setAttribute('disabled', true);
      var target = eventTarget.getAttribute('data-action-target');
      if (typeof window.track === 'function') {
        setTimeout(function () {
          return window.track("useTemplate", target);
        }, 0);
      }
      toggleDisableClone();
      if (!window.PLATFORM_ENV) {
        var _ref3 = parent || {},
          handleUseTemplate = _ref3.handleUseTemplate;
        if (useParentCustomHandler && handleUseTemplate && typeof handleUseTemplate === "function") {
          handleUseTemplate(id);
          return;
        }
      }
      var _LiteCommon$getTempla = LiteCommon.getTemplateMetaInfo(templateSrc),
        context = _LiteCommon$getTempla.templateContext,
        source = _LiteCommon$getTempla.templateSource;
      if (window.sendMessageToJFMobile && window.location.href.includes('jotformNext=1')) {
        window.sendMessageToJFMobile(_objectSpread({
          useTemplate: true
        }, _objectSpread({
          id: id,
          source: source,
          context: context,
          action: actionKey
        }, extraClonePayload)));
        return;
      }
      VanillaHelper.ajax({
        type: 'POST',
        url: (window.appDirectoryPath || "/".concat(listingType)) + '/api',
        data: _objectSpread({
          id: id,
          source: source,
          context: context,
          action: actionKey
        }, extraClonePayload),
        success: function success(response) {
          var resourceID;
          if (useTemplateID) {
            resourceID = id;
          } else {
            resourceID = VanillaHelper.getObjectPropertSafe(response, ['data'].concat(_toConsumableArray(customCloneResponseIDPath)), null);
          }
          if (!resourceID) return;
          if (!window.PLATFORM_ENV) {
            setTimeout(function () {
              return extraOnSuccessCallback(resourceID);
            }, 0);
          }
          toggleDisableClone();
          var newResourceURL = "".concat(newResourceURLFormat).concat(resourceID);
          if (typeof window.PLATFORM_ENV === 'string' && window.PLATFORM_ENV.length > 0) {
            newResourceURL = "/platform/".concat(window.PLATFORM_ENV).concat(newResourceURL);
            ;
          }
          if (LiteCommon.isStandaloneMode()) {
            return window.parent.location.href = newResourceURL;
          }
          if (typeof isAppEmbedMode !== 'undefined' && (isAppEmbedMode === true || isAppEmbedMode === '1')) {
            try {
              var openedWindow = window.parent.open(newResourceURL, "_blank");
              // on popup blocked, open cloned template on current tab
              if (!openedWindow) {
                try {
                  window.parent.location.href = newResourceURL;
                } catch (error) {
                  console.log('error', error);
                }
              }
              ;
            } catch (e) {
              console.log('error', e);
            }
            if (el) {
              el.innerText = buttonText;
              el.removeAttribute('disabled');
            }
          } else {
            if (listingType === 'app-templates') {
              window.sessionStorage.setItem('app-creation-source', 'app-templates');
            }
            window.location.href = "".concat(newResourceURL).concat(listingType === 'form-templates' ? '?s=templates' : '').concat(isSalesforceTemplate ? '&salesforceTemplate=1' : '');
          }
          setTimeout(function () {
            return LiteCommon.handleCloneGTMAction(el, gtmActionKey, {
              isAppEmbedMode: isAppEmbedMode
            });
          }, 0);
        },
        error: function error() {
          var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (el) {
            el.innerText = buttonText;
            el.removeAttribute('disabled');
          }
          var forceLogin = VanillaHelper.getObjectPropertSafe(response, ['data', 'force-login'], false);
          if (forceLogin) {
            showModal('s2');
          }
          var cloneLimitedTemplates = ['form-templates', 'table-templates'];
          if (cloneLimitedTemplates.includes(listingType)) {
            var limitExceed = VanillaHelper.getObjectPropertSafe(response, ['data', 'form-limit-exceed'], false);
            if (limitExceed) {
              var resourceLimit = VanillaHelper.getObjectPropertSafe(response, ['data', 'limit'], 5);
              LiteCommon.openFormLimitModal(resourceLimit);
            }
          }
          toggleDisableClone(false);
        },
        complete: function complete() {
          if (el) {
            el.innerText = buttonText;
            el.removeAttribute('disabled');
          }
        }
      });
    },
    handleSearch: function handleSearch(element, event, force) {
      var forTemplates = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var forFeatures = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      if (!element) return;
      var currentSearchInputValue = element.value || '';
      var form = VanillaHelper.getFirstParentElementByTagName(element, 'form');
      VanillaHelper.addRemoveClass("button[data-trigger='reset']", 'hide', currentSearchInputValue.length > 0);
      if (event.keyCode == 13 || force) {
        var wildcard = currentSearchInputValue;
        var trimmedWildcard = wildcard.trim();
        setTimeout(function () {
          return window.track('search', trimmedWildcard);
        }, 0);
        event.preventDefault();
        if (!wildcard || !trimmedWildcard.length || wildcard == "undefined") {
          return false;
        }
        if (forTemplates && form && !forFeatures) {
          element.value = trimmedWildcard;
          form.submit();
        } else if (form) {
          window.location.href = "".concat(form.getAttribute('action')).concat(forFeatures ? "?q=".concat(encodeURIComponent(trimmedWildcard)) : "/".concat(encodeURIComponent(trimmedWildcard)));
          document.activeElement.blur();
        }
      }
    },
    getOffsetTop: function getOffsetTop(element) {
      if (element === null) return 0;
      try {
        var rect = element.getBoundingClientRect();
        var defaultView = element.ownerDocument.defaultView;
        return rect.top + defaultView.pageYOffset;
      } catch (e) {
        return 0;
      }
    },
    handleScroll: function handleScroll() {
      var sectionHeader = document.querySelector('section.header');
      var stickyHeader = document.querySelector('.sticky-header');
      var searchInput = document.querySelector('.js-search-input');
      var baseTop = 0;
      if (LiteCommon.isStandaloneMode()) {
        baseTop = 80;
      } else if (searchInput !== null) {
        baseTop = LiteCommon.getOffsetTop(searchInput);
      }
      if (stickyHeader !== null && sectionHeader !== null) {
        LiteCommon.handleToggleStickyHeader(document.documentElement.scrollTop > baseTop + 40, stickyHeader, sectionHeader);
      }
    },
    handleToggleStickyHeader: function handleToggleStickyHeader(show, stickyHeader, sectionHeader) {
      var attributeElements = [document.querySelector('.js-search-input-clone'), document.querySelector('.js-hero-go-clone')];
      if (show) {
        stickyHeader.classList.add('is-active');
        stickyHeader.classList.add('block');
        stickyHeader.classList.remove('hidden');
        sectionHeader.classList.add('has-sticky');
      } else {
        stickyHeader.classList.remove('is-active');
        stickyHeader.classList.remove('block');
        stickyHeader.classList.add('hidden');
        sectionHeader.classList.remove('has-sticky');
      }
      attributeElements.forEach(function (el) {
        if (el !== null) el.setAttribute('tabindex', show ? '0' : '-1');
      });
    },
    handleSearchInputs: function handleSearchInputs() {
      VanillaHelper.addEventListenerToNodeList('.hero-search-form', 'submit', function (event) {
        var thisTarget = event.target;
        if (!thisTarget) return;
        var searchInput = thisTarget.querySelector('[data-trigger="search"]');
        if (!searchInput) return;
        if (!searchInput.value) event.preventDefault();
      });
      VanillaHelper.addEventListenerToNodeList('.js-searcharea-close', 'click', function (event) {
        var thisTarget = event.target;
        if (!thisTarget) return;
        var mobileTopSearchActive = thisTarget.querySelector('.js-mobiletop-searchactive');
        VanillaHelper.addRemoveClass(mobileTopSearchActive, 'search-active', true);
      });
      VanillaHelper.addEventListenerToNodeList('.js-searcharea', 'click', function (event) {
        VanillaHelper.addRemoveClass('.js-mobiletop-searchactive', 'search-active');
      });
      var searchInput = document.querySelector('input.js-search-input');
      var clonedSearchInput = document.querySelector('.js-search-input-clone');
      if (clonedSearchInput && searchInput && searchInput.value !== '' && searchInput.value !== clonedSearchInput.value) {
        clonedSearchInput.value = searchInput.value;
      }
      if (searchInput && typeof searchInput.value === 'string' && searchInput.value.length > 0) {
        VanillaHelper.addRemoveClass('.js-button-reset', 'hide', true);
      }
      VanillaHelper.addEventListenerToNodeList('.js-button-reset', 'click', function (event) {
        var thisTarget = event.target;
        if (!thisTarget) return;
        var targetParent = thisTarget.parentElement;
        var allChildInputs = targetParent.querySelectorAll('input');
        Array.from(allChildInputs).forEach(function (inputEl) {
          inputEl.focus();
        });
      });
      VanillaHelper.addEventListenerToNodeList('input.js-search-input', 'paste', function (event) {
        VanillaHelper.addRemoveClass('.js-button-reset', 'hide');
      });
      VanillaHelper.addEventListenerToNodeList('[data-trigger="search"]', 'focus', function (event) {
        var thisTarget = event.target;
        if (!thisTarget) return;
        var heroSearchElement = VanillaHelper.getFirstParentElementByClassName(thisTarget, 'hero-search');
        VanillaHelper.addRemoveClass(heroSearchElement, 'focused');
      });
      VanillaHelper.addEventListenerToNodeList('[data-trigger="search"]', 'focusout', function (event) {
        var thisTarget = event.target;
        if (!thisTarget) return;
        var heroSearchElement = VanillaHelper.getFirstParentElementByClassName(thisTarget, 'hero-search');
        VanillaHelper.addRemoveClass(heroSearchElement, 'focused', true);
      });
      document.addEventListener('keydown', function (e) {
        var key = e.keyCode || e.charCode || 0;
        var searchInputs = document.querySelectorAll('input.js-search-input');
        Array.from(searchInputs).forEach(function (inputEl) {
          if (key == 27 && document.activeElement === inputEl) {
            inputEl.value = '';
          }
        });
      });
      var query = window.location.search.substr(1)[0];
      if (query == "q") {
        VanillaHelper.addRemoveClass('.js-mobiletop-searchactive', 'search-active');
      }
    },
    initializeSearch: function initializeSearch() {
      var forTemplate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var forFeatures = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // forTemplate is false for form - widgets- integrations
      VanillaHelper.addEventListenerToNodeList("button[data-trigger='fire-search']", 'click', function (event) {
        var target = event.target;
        var parentDiv = VanillaHelper.getFirstParentElementByTagName(target, 'div');
        if (parentDiv) {
          var input = parentDiv.querySelector("input[data-trigger='search']");
          LiteCommon.handleSearch(input, event, true, forTemplate, forFeatures);
        }
      });
      VanillaHelper.addEventListenerToNodeList("button[data-trigger='reset']", 'click', function (event) {
        VanillaHelper.setGetValuesNodeList("input[data-trigger='search']", '');
        VanillaHelper.addRemoveClass(".button-reset", 'hide');
      });
      Array.from(document.querySelectorAll("input[data-trigger='search']")).map(function (el) {
        el.addEventListener('focus', function () {
          setTimeout(function () {
            return window.track("searchBox-click");
          }, 0);
        });
        el.addEventListener('keyup', function (event) {
          VanillaHelper.setGetValuesNodeList("input[data-trigger='search']", el.value);
          LiteCommon.handleSearch(el, event, false, forTemplate, forFeatures);
        });
      });
    },
    renderPrevNextTemplate: function renderPrevNextTemplate(functionPayload) {
      var id = functionPayload.id,
        container = functionPayload.container,
        _functionPayload$isPr = functionPayload.isPrev,
        isPrev = _functionPayload$isPr === void 0 ? false : _functionPayload$isPr,
        _functionPayload$trac = functionPayload.track,
        track = _functionPayload$trac === void 0 ? function (f) {
          return f;
        } : _functionPayload$trac,
        _functionPayload$moda = functionPayload.modalOpener,
        modalOpener = _functionPayload$moda === void 0 ? function (f) {
          return f;
        } : _functionPayload$moda,
        templateContainerListing = functionPayload.templateContainerListing,
        templateContainerCarousel = functionPayload.templateContainerCarousel;

      // Prevent unnecessary scroll white navigating among templates
      document.querySelector('body').classList.add("modal-template-navigating");
      var templateIDs = [];
      for (var i = 0; i < templateContainerCarousel.length; i++) {
        var template = templateContainerCarousel[i];
        var dataContainer = template.getAttribute("data-container");
        if (dataContainer && templateIDs.indexOf(dataContainer) < 0) {
          templateIDs.push(dataContainer);
        }
      }
      for (var _i = 0; _i < templateContainerListing.length; _i++) {
        var _template = templateContainerListing[_i];
        var _dataContainer = _template.getAttribute("data-container");
        if (_dataContainer && templateIDs.indexOf(_dataContainer) < 0) {
          templateIDs.push(_dataContainer);
        }
      }
      var _loop = function _loop() {
        var containerEl = container[_i2];
        try {
          var controlsElement = containerEl.querySelector('div.cta-controls');
          if (controlsElement) controlsElement.classList.add('loading');
          var key;
          if (isPrev) {
            key = templateIDs.indexOf(id) - 1;
            key = key < 0 ? templateIDs.length - 1 : key;
          } else {
            key = templateIDs.indexOf(id) + 1;
            key = key >= templateIDs.length ? 0 : key;
          }
          modalOpener(templateIDs[key], false);
          setTimeout(function () {
            return track(templateIDs[key]);
          }, 0);
        } catch (_unused) {
          var buttonTrigger = isPrev ? 'modalRenderPreviousTemplate' : 'modalRenderNextTemplate';
          var triggerEl = containerEl.querySelector("a[data-trigger='".concat(buttonTrigger, "']"));
          if (triggerEl) triggerEl.classList.remove('load-active');
          var controlsEl = containerEl.querySelector('div.cta-controls');
          if (controlsEl) controlsEl.classList.remove('loading');
        }
      };
      for (var _i2 = 0; _i2 < container.length; _i2++) {
        _loop();
      }
    },
    closeModalView: function closeModalView(force, event) {
      var templateType = window.initialApp.includes('-') ? (window.initialApp || '').split('-')[0] : window.initialApp;
      if (templateType === 'pdf') templateType = 'form';
      if (templateType === 'theme') templateType = 'form';
      if (templateType === 'widgets') templateType = 'widget';
      if (templateType === 'integrations') templateType = 'integration';
      var modalContainer = document.querySelector("div[data-container=\"".concat(templateType, "-modal\"]"));
      if (modalContainer && modalContainer.style.display !== "none") {
        if (force || modalContainer === event.target) {
          modalContainer.remove();
          if (!force || force === "disableHistoryState") {
            document.title = window.modalViewCanonical.title;
            history.pushState({}, document.title, window.modalViewCanonical.url);
          }
          document.querySelectorAll('.header, .main, .jf-footer').forEach(function (el) {
            el.setAttribute('aria-hidden', 'false');
            el.setAttribute('tabindex', '0');
          });
          document.body.classList.remove('modal-open', 'modal-limit-open');
          if (!document.querySelector("h1") && document.querySelector("h2.heading")) {
            var h2Heading = document.querySelector("h2.heading");
            if (h2Heading) {
              var h1Heading = document.createElement("h1");
              h1Heading.className = "heading locale color-navy-700 text-3xl lg:text-4xl font-bold mt-2.5 mb-0";
              h1Heading.innerHTML = h2Heading.innerHTML;
              h2Heading.parentNode.replaceChild(h1Heading, h2Heading);
            }
          }
          var canonicalEl = document.querySelector('link[rel="canonical"]');
          if (canonicalEl) canonicalEl.setAttribute('href', window.modalViewCanonical.url);
          var metaDescriptionEl = document.querySelector('meta[name="description"]');
          if (metaDescriptionEl) metaDescriptionEl.setAttribute('content', window.modalViewCanonical.description);
          var metaKeywords = document.querySelector('meta[name="keywords"]');
          if (metaKeywords) metaKeywords.setAttribute('content', window.modalViewCanonical.keywords);
          var imageSrc = document.querySelector('link[rel="image_src"]');
          if (imageSrc) imageSrc.setAttribute('href', window.modalViewCanonical.image);
          var breadcrumbList = document.querySelector("ul[itemtype='http://schema.org/BreadcrumbList']");
          if (breadcrumbList) {
            var templateBreadcrumb = breadcrumbList.querySelector("li[data-breadcrumb-type='template']");
            if (templateBreadcrumb) {
              templateBreadcrumb.remove();
              breadcrumbList.querySelector("li:last-child > span").remove();
            }
            ;
          }
          setTimeout(function () {
            if (templateType === 'form') {
              var currentFormID = modalContainer.getAttribute("data-form-id");
              if (currentFormID && document.querySelector("[data-container='" + currentFormID + "']")) window.track('close-modal', currentFormID);
            } else {
              var trackKeysMap = {
                app: 'AppModalView',
                page: 'PageModalView',
                table: 'TableModalView',
                widget: 'WidgetModalView',
                approval: 'ApprovalModalView',
                integration: 'IntegrationModalView'
              };
              window.track(trackKeysMap[templateType], "close-modal");
            }
          }, 0);
          window.directoryContext = window.location.href.includes('/category') ? 'category' : 'homepage';
        }
      }
    },
    closeModal: function closeModal(event, force) {
      var initializeTriggers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var clearInlineTriggers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (clearInlineTriggers) window.initializeInlineTriggers = undefined;
      if (typeof isAppEmbedMode !== "undefined" && isAppEmbedMode && Boolean(isAppEmbedMode)) {
        return false;
      }
      if (typeof PDF !== "undefined" && typeof PDF.isEmbedMode !== "undefined" && PDF.isEmbedMode && Boolean(PDF.isEmbedMode)) {
        return false;
      }
      var modal = event.target.parentElement;
      if (modal && modal.classList.contains("modal") && !modal.classList.contains("hide")) {
        if (modal === event.target || force) {
          if (['widgets', 'integrations'].includes(window.initialApp)) {
            modal.querySelectorAll("[data-container^='admin-']").forEach(function (el) {
              el.removeAttribute("data-target");
              el.removeAttribute("data-key");
              el.removeAttribute("data-type");
            });
          }
          modal.classList.add("hide");
          document.body.classList.remove("modal-open", "overflow-hidden");
        }
      }
      if (modal && modal.classList.contains('template-detail')) {
        LiteCommon.closeModalView(force, event);
      }
      initializeTriggers();
    },
    closeAllModals: function closeAllModals() {
      var allModals = [].concat(_toConsumableArray(Array.from(document.querySelectorAll('section.modal'))), _toConsumableArray(Array.from(document.querySelectorAll('.template-detail'))));
      allModals.forEach(function (section) {
        if (!section.classList.contains('hide')) {
          var closeModalBtn = section.querySelector('.close-wp');
          LiteCommon.closeModal({
            target: closeModalBtn
          }, true);
        }
      });
      history.pushState({}, document.title, "".concat(location.origin, "/").concat(initialApp));
    },
    handleTouchStartCloseModalBtn: function handleTouchStartCloseModalBtn(event) {
      event.preventDefault();
      event.target.onclick();
    },
    closeModalBtnClickHandler: function closeModalBtnClickHandler(target) {
      LiteCommon.closeModal({
        target: target
      }, 'disableHistoryState', undefined, true);
      document.querySelectorAll('.header, .main, .jf-footer').forEach(function (element) {
        element.setAttribute('aria-hidden', 'false');
        element.setAttribute('tabindex', '0');
      });
    }
  };
}();