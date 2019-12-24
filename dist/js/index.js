webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(145);


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZenGx1n 
	 * @Date: 2019-12-22 10:08:10 
	 * @Last Modified by: ZenGx1n
	 * @Last Modified time: 2019-12-23 21:40:28
	 */
	__webpack_require__(2);
	__webpack_require__(146);
	var _wl = __webpack_require__(66);
	var _user = __webpack_require__(70);

	var page = {
	    init: function () {
	        this.loadUserInfo();
	    },
	    //加载用户信息
	    loadUserInfo: function () {
	        _user.checkLogin(function (res) {
	            $('.admin-name').text(res.username);
	        }, function (errMsg) {
	            _wl.doLogin();
	        });
	    }
	};

	module.exports = page.init();

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});