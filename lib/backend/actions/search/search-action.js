"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchAction = void 0;

var _filter = _interopRequireDefault(require("../../utils/filter/filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @implements Action
 * @category Actions
 * @module SearchAction
 * @description
 * Used to search particular record based on "title" property. It is used by
 * select fields with autocomplete.
 * Uses {@link ShowAction} component to render form
 * @private
 */
const SearchAction = {
  name: 'search',
  isVisible: false,
  actionType: 'resource',

  /**
   * Search records by query string.
   *
   * To invoke this action use {@link ApiClient#resourceAction}
   * @memberof module:SearchAction
   *
   * @return  {Promise<SearchResponse>}  populated record
   * @implements ActionHandler
   */
  handler: async (request, response, data) => {
    var _decorated$options, _decorated$options$so;

    const {
      currentAdmin,
      resource,
      hookFilters
    } = data;
    const queryString = request.params && request.params.query;
    const decorated = resource.decorate();
    const titlePropertyName = decorated.titleProperty().name();

    const filters = _objectSpread({}, hookFilters);

    if (queryString) {
      filters.titlePropertyName = queryString;
    }

    const filter = new _filter.default(filters, resource);
    const sortBy = ((_decorated$options = decorated.options) === null || _decorated$options === void 0 ? void 0 : (_decorated$options$so = _decorated$options.sort) === null || _decorated$options$so === void 0 ? void 0 : _decorated$options$so.sortBy) || titlePropertyName;
    const records = await resource.find(filter, {
      limit: 50,
      sort: {
        sortBy,
        direction: 'asc'
      }
    });
    return {
      records: records.map(record => record.toJSON(currentAdmin))
    };
  }
};
exports.SearchAction = SearchAction;
var _default = SearchAction;
/**
 * Response of a [Search]{@link ApiController#search} action in the API
 * @memberof module:SearchAction
 * @alias SearchResponse
 */

exports.default = _default;