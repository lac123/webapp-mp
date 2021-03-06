"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _storage = require("../../../utils/storage.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productIds = [];
var uploadImage = require('./../../../utils/uploadFile.js');
var util = require('../../../utils/util.js');
var imgArraySrc = [];

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state.active;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__198", "$compid__199", "$compid__200", "$compid__201", "isShowPublic", "dateStart", "dateEnd", "files", "selector", "selectorChecked", "groupItemChecked", "groupItem", "products", "activeAllName", "weChatNumber", "productIds", "isOpened", "docLocations", "activeAllPrice", "region", "dispatchDownLoadUrl", "dispatchQueryProductInfo", "groupCount", "activeName", "startTime", "endTime", "activePrice", "tempfiles", "address", "imgs", "dispatchCacheTempFiles", "dispatchUploadConfig", "dispatchUploadFile", "dispatchGroupCount", "disptachServiceAddress", "dispatchStartTime", "dispatchActivePrice", "dispatchCreateActive", "dispatchWeixinDecrypt", "UpdateUserInfo", "GetUserInfo", "disptachActiveName", "dispatchEndTime"], _this.config = {
      navigationBarTitleText: '新增活动'
    }, _this.handleUploadLoader = function () {

      var payload = {
        documentType: 'PRODUCT',
        fileName: 'name'
      };

      _this.props.dispatchUploadFile(payload);
    }, _this.onDateStartChange = function (e) {
      _this.setState({
        dateStart: e.detail.value
      });
      _this.props.dispatchStartTime(e.detail.value);
    }, _this.onChangeActivePrice = function (val) {
      _this.setState({
        activePrice: val
      });
      _this.props.dispatchActivePrice(val);
    }, _this.onDateEndChange = function (e) {
      _this.setState({
        dateEnd: e.detail.value
      });
      _this.props.dispatchEndTime(e.detail.value);
    }, _this.customComponents = ["AtMessage", "AtInput", "Region", "AtImagePicker", "ProductList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        files: [],
        selector: [['请选择', '美国', '中国', '巴西', '日本'], ['请选择', '美国', '中国', '巴西', '日本       ']],
        selectorChecked: '请选择',
        groupItemChecked: '请选择',
        groupItem: [],
        dateStart: '请选择',
        dateEnd: '请选择',
        products: [],
        activeAllName: '',
        weChatNumber: '',
        productIds: [],
        isOpened: false,
        docLocations: [],
        activeAllPrice: '',
        isShowPublic: false,
        region: '请选择省市区'
      };

      this.init();
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  location: location
                };
                _context.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.content);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getImgUrl(_x) {
        return _ref2.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var productList = [];
      if (this.$router.params.ids != undefined) {
        productIds = this.$router.params.ids.split(',');
        this.setState({
          productIds: productIds
        });
      }
      if (productIds.length > 0) {
        productIds.map(function (item, index) {
          console.log('item', item);
          var payload = {
            productId: item
          };
          _this2.props.dispatchQueryProductInfo(payload).then(function (res) {
            if (res.result === "success") {
              _this2.getImgUrl(res.content.location).then(function (response) {
                res.content.location = response;
                productList.push(res.content);
                _this2.setState({
                  products: productList
                });
              });
            }
          });
        });
      }

      this.init();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.groupCount !== '') {
        this.setState({
          groupItemChecked: this.props.groupCount
        });
      }

      if (this.props.activeName !== '') {
        this.setState({
          activeName: this.props.activeName
        });
      }

      if (this.props.startTime !== '') {
        this.setState({
          dateStart: this.props.startTime
        });
      }

      if (this.props.endTime !== '') {
        this.setState({
          dateEnd: this.props.endTime
        });
      }

      if (this.props.activePrice !== '') {
        this.setState({
          activePrice: this.props.activePrice
        });
      }

      if (this.props.tempfiles.length > 0) {
        this.setState({
          files: this.props.tempfiles
        });
      }

      if (this.props.address !== '') {
        this.setState({
          region: this.props.address
        });
        this.onGetRegion(this.props.address);
      }

      if (this.props.imgs.length > 0) {
        var docLocations = [];
        this.props.imgs.map(function (item, key) {
          docLocations.push(item);
        });
        this.setState({
          docLocations: docLocations
        });
      }

      console.log('console this.props', this.props);
    }
  }, {
    key: "init",
    value: function init() {
      this.initGroup();
    }
  }, {
    key: "initGroup",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var groups, i, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                groups = [];

                for (i = 1; i < 15; i++) {
                  groups.push(i);
                }
                this.setState({
                  groupItem: groups
                });
                _context2.next = 5;
                return this.getAuthInfo();

              case 5:
                result = _context2.sent;


                console.log('result getAuthInfo', result);
                this.setState({
                  region: result.areaCode === "" ? "请选择省市区" : result.areaCode
                });
                if (result.cellphone === null || result.cellphone === "") {
                  this.setState({
                    isShowPublic: false
                  });
                } else {
                  this.setState({
                    isShowPublic: true
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initGroup() {
        return _ref3.apply(this, arguments);
      }

      return initGroup;
    }()
  }, {
    key: "HandlePickerChange",
    value: function HandlePickerChange(files) {
      var _this3 = this;

      this.setState({ files: files });
      this.props.dispatchCacheTempFiles(files);

      var that = this;
      var tempFilePaths = files;
      var nowTime = util.formatTime(new Date());
      //支持多图上传

      var _loop = function _loop() {
        //显示消息提示框
        // TODO: bug 修复.
        // wx.showLoading({
        //   title: '上传中' + (i + 1) + '/' +tempFilePaths.length,
        //   mask: true
        // });
        var file = tempFilePaths[i].url;

        payload = {
          documentType: 'ACTIVITY',
          fileName: 'ACTIVITY.png'
        };
        that = _this3;


        _this3.props.dispatchUploadConfig(payload).then(function (response) {
          uploadImage(file, response.content.location, function (result) {
            imgArraySrc.push(result);
            that.setState({
              docLocations: imgArraySrc
            });
            that.props.dispatchSaveImg(imgArraySrc);
            console.log("======上传成功图片地址为：", result);
            wx.hideLoading();
          }, function (result) {
            imgArraySrc = [];
            console.log("======上传失败======", result);
            wx.hideLoading();
          });
        });
      };

      for (var i = 0; i < tempFilePaths.length; i++) {
        var payload;
        var that;

        _loop();
      }
    }
  }, {
    key: "handlePickerViewChange",
    value: function handlePickerViewChange(e) {
      var val = e.detail.value;
    }
  }, {
    key: "handlePickerChange",
    value: function handlePickerChange(e) {
      var selectedValue = this.state.selector[0][e.detail.value[0]] + " / " + this.state.selector[0][e.detail.value[1]];
      this.setState({
        selectorChecked: selectedValue
      });
    }
  }, {
    key: "handlePickerSelectGroupChange",
    value: function handlePickerSelectGroupChange(e) {
      this.props.dispatchGroupCount(parseInt(e.detail.value) + 1);
      this.setState({
        groupItemChecked: parseInt(e.detail.value) + 1
      });
    }
  }, {
    key: "onGetRegion",
    value: function onGetRegion(region) {
      console.log('region', region);
      this.props.disptachServiceAddress(region);
      // 参数region为选择的省市区
      this.setState({ region: region });
      return region;
    }
  }, {
    key: "handleAlert",
    value: function handleAlert(type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }
  }, {
    key: "onPublish",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var _state, activeName, groupItemChecked, dateStart, dateEnd, docLocations, weChatNumber, region, result, payload;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _state = this.state, activeName = _state.activeName, groupItemChecked = _state.groupItemChecked, dateStart = _state.dateStart, dateEnd = _state.dateEnd, docLocations = _state.docLocations, weChatNumber = _state.weChatNumber, region = _state.region;

                if (!(activeName === '' || activeName === undefined)) {
                  _context3.next = 4;
                  break;
                }

                this.handleAlert('error', '请填写活动名称');
                return _context3.abrupt("return");

              case 4:
                if (!(groupItemChecked === '请选择')) {
                  _context3.next = 7;
                  break;
                }

                this.handleAlert('error', '请选择成团人数');
                return _context3.abrupt("return");

              case 7:
                if (!(dateStart == '请选择')) {
                  _context3.next = 10;
                  break;
                }

                this.handleAlert('error', '请选择开始时间');
                return _context3.abrupt("return");

              case 10:
                if (!(dateEnd == '请选择')) {
                  _context3.next = 13;
                  break;
                }

                this.handleAlert('error', '请选择结束时间');
                return _context3.abrupt("return");

              case 13:
                if (!(region === '请选择省市区')) {
                  _context3.next = 16;
                  break;
                }

                this.handleAlert('error', '请选择省市区');
                return _context3.abrupt("return");

              case 16:
                if (!(docLocations.length <= 0)) {
                  _context3.next = 19;
                  break;
                }

                this.handleAlert('error', '请选择上传主图');
                return _context3.abrupt("return");

              case 19:
                _context3.next = 21;
                return (0, _storage.getAuthInfo)();

              case 21:
                result = _context3.sent;
                payload = {
                  "areaCode": region,
                  "docLocations": docLocations,
                  "id": 0,
                  "name": activeName,
                  "people": groupItemChecked,
                  "productIds": productIds,
                  "startD": dateStart + " 00:00:00",
                  "endD": dateEnd + " 59:59:59",
                  "userId": result.id,
                  "wechatId": weChatNumber
                };


                try {
                  this.props.dispatchCreateActive(payload).then(function (res) {
                    if (res && res.result === "success" && res.content != null) {
                      _index2.default.navigateTo({
                        url: "/pages/active/share/index?activeId=" + res.content
                      });
                    } else {
                      _this4.handleAlert('error', res.error);
                    }
                  });
                } catch (e) {
                  console.log('e', e);
                }

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onPublish() {
        return _ref4.apply(this, arguments);
      }

      return onPublish;
    }()
  }, {
    key: "getPhoneNumber",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        var that, _state2, activeName, groupItemChecked, dateStart, dateEnd, docLocations, region, payload, result, object, params, data, _result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(e.detail.errMsg === "getPhoneNumber:ok")) {
                  _context4.next = 43;
                  break;
                }

                that = this;
                _state2 = this.state, activeName = _state2.activeName, groupItemChecked = _state2.groupItemChecked, dateStart = _state2.dateStart, dateEnd = _state2.dateEnd, docLocations = _state2.docLocations, region = _state2.region;

                if (!(activeName === '' || activeName === undefined)) {
                  _context4.next = 6;
                  break;
                }

                this.handleAlert('error', '请填写活动名称');
                return _context4.abrupt("return");

              case 6:
                if (!(groupItemChecked === '请选择')) {
                  _context4.next = 9;
                  break;
                }

                this.handleAlert('error', '请选择成团人数');
                return _context4.abrupt("return");

              case 9:
                if (!(dateStart == '请选择')) {
                  _context4.next = 12;
                  break;
                }

                this.handleAlert('error', '请选择开始时间');
                return _context4.abrupt("return");

              case 12:
                if (!(dateEnd == '请选择')) {
                  _context4.next = 15;
                  break;
                }

                this.handleAlert('error', '请选择结束时间');
                return _context4.abrupt("return");

              case 15:
                if (!(region === '请选择省市区')) {
                  _context4.next = 18;
                  break;
                }

                this.handleAlert('error', '请选择省市区');
                return _context4.abrupt("return");

              case 18:
                if (!(docLocations.length <= 0)) {
                  _context4.next = 21;
                  break;
                }

                this.handleAlert('error', '请选择上传主图');
                return _context4.abrupt("return");

              case 21:
                if (!(e.detail.encryptedData && e.detail.iv)) {
                  _context4.next = 42;
                  break;
                }

                payload = {
                  iv: e.detail.iv,
                  phone: e.detail.encryptedData
                };
                _context4.next = 25;
                return this.props.dispatchWeixinDecrypt(payload);

              case 25:
                result = _context4.sent;
                object = JSON.parse(result.content);

                if (!object.phoneNumber) {
                  _context4.next = 39;
                  break;
                }

                params = {
                  cellphone: object.phoneNumber
                };
                _context4.next = 31;
                return this.props.UpdateUserInfo(params);

              case 31:
                _context4.next = 33;
                return this.props.GetUserInfo({});

              case 33:
                data = _context4.sent;
                _result = data.content;

                _index2.default.setStorage({ key: 'userinfo', data: _result });
                that.onPublish();
                _context4.next = 40;
                break;

              case 39:
                _index2.default.showToast({
                  title: '网络异常',
                  icon: 'none',
                  duration: 3000,
                  mask: true
                });

              case 40:
                _context4.next = 43;
                break;

              case 42:
                _index2.default.showToast({
                  title: '取消授权成功',
                  icon: 'success',
                  duration: 3000,
                  mask: true
                });

              case 43:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPhoneNumber(_x2) {
        return _ref5.apply(this, arguments);
      }

      return getPhoneNumber;
    }()
  }, {
    key: "handleActiveChange",
    value: function handleActiveChange(activeName) {
      this.props.disptachActiveName(activeName);
      this.setState({
        activeName: activeName
      });
      return activeName;
    }
  }, {
    key: "createProduct",
    value: function createProduct() {
      _index2.default.navigateTo({
        url: '../../../packageA/pages/product/edit'
      });
    }
  }, {
    key: "handleWeChatChange",
    value: function handleWeChatChange(weChatNumber) {
      this.setState({
        weChatNumber: weChatNumber
      });
      return weChatNumber;
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });

              case 2:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAuthInfo() {
        return _ref6.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "selectProduct",
    value: function selectProduct() {
      _index2.default.navigateTo({
        url: '../../../packageA/pages/product/index?productIds=' + this.state.productIds
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      var _this5 = this;

      this.setState({
        isOpened: false
      });

      this.getAuthInfo().then(function (userinfo) {
        var payload = {
          openId: userinfo.openId,
          wechatId: _this5.state.weChatNumber,
          id: userinfo.id
        };
        _this5.props.UpdateUserInfo(payload).then(function (res) {
          console.log('response', res);
        });
      });
    }
  }, {
    key: "getWindowHeight",
    value: function getWindowHeight() {
      var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var products = arguments[1];

      var info = _index2.default.getSystemInfoSync();
      var windowHeight = info.windowHeight;


      return windowHeight + products.length * 89 + "px";
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__198"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__198 = _genCompid2[0],
          $compid__198 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__199"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__199 = _genCompid4[0],
          $compid__199 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__200"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__200 = _genCompid6[0],
          $compid__200 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__201"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__201 = _genCompid8[0],
          $compid__201 = _genCompid8[1];

      var _state3 = this.__state,
          activeName = _state3.activeName,
          dateEnd = _state3.dateEnd,
          dateStart = _state3.dateStart,
          products = _state3.products,
          isOpened = _state3.isOpened,
          isShowPublic = _state3.isShowPublic;

      console.log('isShowPublic', isShowPublic);
      var isAutoScrollItem = products.length === 0 ? "scroll-product-hidden" : "scroll-product";
      var anonymousState__temp = (0, _index.internal_inline_style)({ height: this.getWindowHeight(true, products) });
      _index.propsManager.set({
        "border": false,
        "value": activeName,
        "onChange": this.handleActiveChange.bind(this),
        "placeholder": "\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
      }, $compid__198, $prevCompid__198);
      _index.propsManager.set({
        "onGetRegion": this.onGetRegion.bind(this)
      }, $compid__199, $prevCompid__199);
      _index.propsManager.set({
        "multiple": true,
        "className": "uploadImage",
        "files": this.__state.files,
        "onChange": this.HandlePickerChange.bind(this)
      }, $compid__200, $prevCompid__200);
      _index.propsManager.set({
        "products": products
      }, $compid__201, $prevCompid__201);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__198: $compid__198,
        $compid__199: $compid__199,
        $compid__200: $compid__200,
        $compid__201: $compid__201
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["handlePickerSelectGroupChange", "onDateStartChange", "onDateEndChange", "selectProduct", "createProduct", "onPublish", "getPhoneNumber"], _class2.$$componentPath = "pages/active/publish/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));