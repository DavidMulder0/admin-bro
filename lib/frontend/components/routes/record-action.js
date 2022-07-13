"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _designSystem = require("@admin-bro/design-system");

var _baseActionComponent = _interopRequireDefault(require("../app/base-action-component"));

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

var _errorMessage = require("../app/error-message");

var _wrapper = _interopRequireDefault(require("./utils/wrapper"));

var _app = require("../app");

var _hooks = require("../../hooks");

var _drawerPortal = _interopRequireDefault(require("../app/drawer-portal"));

var _mergeRecordResponse = _interopRequireDefault(require("../../hooks/use-record/merge-record-response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const api = new _apiClient.default();

const RecordAction = () => {
  const [data, setData] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const match = (0, _reactRouter.useRouteMatch)();
  const addNotice = (0, _hooks.useNotice)();
  const {
    translateMessage
  } = (0, _hooks.useTranslation)();
  const {
    actionName,
    recordId,
    resourceId
  } = match.params;
  const resource = (0, _hooks.useResource)(resourceId);
  const action = (data === null || data === void 0 ? void 0 : data.record) && data.record.recordActions.find(r => r.name === actionName);

  const fetchRecord = () => {
    setLoading(true);
    api.recordAction(match.params).then(response => {
      setLoading(false);
      setData(response.data);
    }).catch(error => {
      addNotice({
        message: translateMessage('errorFetchingRecord', resourceId),
        type: 'error'
      });
      throw error;
    });
  };

  (0, _react.useEffect)(() => {
    fetchRecord();
  }, [actionName, recordId, resourceId]);
  const handleActionPerformed = (0, _react.useCallback)((oldRecord, response) => {
    if (response.record) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        record: (0, _mergeRecordResponse.default)(oldRecord, response)
      }));
    } else {
      fetchRecord();
    }
  }, [fetchRecord]);

  if (!resource) {
    return /*#__PURE__*/_react.default.createElement(_errorMessage.NoResourceError, {
      resourceId: resourceId
    });
  } // When the user visits this route (record action) from a different, than the current one, record.
  // It renders everything with a new resource. The old record remains until useEffect fetches data
  // from the API. that is why we have to check if the current record has correct record.id.
  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
  // we cannot be sure that the component wont be rendered (it will be at least once) with the
  // wrong data.


  const hasDifferentRecord = (data === null || data === void 0 ? void 0 : data.record) && data.record.id.toString() !== recordId;

  if (loading || hasDifferentRecord) {
    const actionFromResource = resource.actions.find(r => r.name === actionName);
    return (actionFromResource === null || actionFromResource === void 0 ? void 0 : actionFromResource.showInDrawer) ? /*#__PURE__*/_react.default.createElement(_drawerPortal.default, null, /*#__PURE__*/_react.default.createElement(_designSystem.Loader, null)) : /*#__PURE__*/_react.default.createElement(_designSystem.Loader, null);
  }

  if (!action) {
    return /*#__PURE__*/_react.default.createElement(_errorMessage.NoActionError, {
      resourceId: resourceId,
      actionName: actionName
    });
  }

  if (!(data === null || data === void 0 ? void 0 : data.record)) {
    return /*#__PURE__*/_react.default.createElement(_errorMessage.NoRecordError, {
      resourceId: resourceId,
      recordId: recordId
    });
  }

  if (action.showInDrawer) {
    return /*#__PURE__*/_react.default.createElement(_drawerPortal.default, {
      width: action.containerWidth
    }, /*#__PURE__*/_react.default.createElement(_baseActionComponent.default, {
      action: action,
      resource: resource,
      record: data.record,
      data: data
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_wrapper.default, {
    width: action.containerWidth
  }, /*#__PURE__*/_react.default.createElement(_app.ActionHeader, {
    resource: resource,
    action: action,
    record: data.record,
    actionPerformed: response => handleActionPerformed(data.record, response)
  }), /*#__PURE__*/_react.default.createElement(_baseActionComponent.default, {
    action: action,
    resource: resource,
    record: data.record,
    data: data
  }));
};

var _default = RecordAction;
exports.default = _default;