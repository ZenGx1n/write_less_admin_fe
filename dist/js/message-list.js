webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148);


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZenGx1n 
	 * @Date: 2019-12-22 10:08:10 
	 * @Last Modified by: ZenGx1n
	 * @Last Modified time: 2019-12-24 10:44:50
	 */
	__webpack_require__(2);
	__webpack_require__(149);
	var _wl = __webpack_require__(66);
	var _message = __webpack_require__(151);
	var _user = __webpack_require__(70);
	var templateIndex = __webpack_require__(152);

	var page = {
	    data: {
	        listParam: {
	            keyword: _wl.getUrlParam('keyword') || '',
	            orderBy: _wl.getUrlParam('status') || 3,
	            pageNum: _wl.getUrlParam('pageNum') || 1,
	            pageSize: _wl.getUrlParam('pageSize') || 10
	        }
	    },
	    init: function () {
	        this.onLoad();
	        this.loadUserInfo();
	    },
	    onLoad: function () {
	        this.loadList();
	    },
	    //加载用户信息
	    loadUserInfo: function () {
	        _user.checkLogin(function (res) {
	            $('.admin-name').text(res.username);
	        }, function (errMsg) {
	            _wl.doLogin();
	        });
	    },
	    //加载list数据
	    loadList: function () {
	        var _this = this,
	            listHtml = '',
	            listParam = this.data.listParam,
	            $msgTbody = $('.msg-tbody');
	        //请求接口
	        _message.getMessageList(listParam, function (res) {
	            listHtml = _wl.renderHtml(templateIndex, {
	                list: res.list
	            });
	            $msgTbody.html(listHtml);
	        }, function (errMsg) {
	            _wl.errorTips(errMsg);
	        });
	    },

	};

	$(function () {
	    page.init();
	})

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZenGx1n 
	 * @Date: 2019-12-03 19:46:07 
	 * @Last Modified by: ZenGx1n
	 * @Last Modified time: 2019-12-24 08:51:46
	 */
	var _wl = __webpack_require__(66);

	var _message = {
	    //获取留言列表
	    getMessageList: function (listParam, resolve, reject) {
	        _wl.request({
	            url: _wl.getServerUrl('/manage/message/list.do'),
	            data: listParam,
	            success: resolve,
	            error: reject
	        });
	    }
	}

	module.exports = _message;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

	module.exports = " {{#list}} <tr> <td>{{id}}</td> <td>{{userId}}</td> <td class=\"app-content-content\">{{content}}</td> <td>{{status}}</td> <td>{{agree}}</td> <td>{{collection}}</td> <td>{{createTime}}</td> <td>{{updateTime}}</td> <td> <a>查看</a> <a>修改</a> <a>删除</a> </td> </tr> {{/list}} ";

/***/ })

});