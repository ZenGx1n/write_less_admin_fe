webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZenGx1n 
	 * @Date: 2019-12-22 10:08:10 
	 * @Last Modified by: ZenGx1n
	 * @Last Modified time: 2019-12-23 16:56:39
	 */
	__webpack_require__(2);
	__webpack_require__(64);
	var _wl = __webpack_require__(66);
	var _user = __webpack_require__(70);

	//表单里的错误提示
	var formError = {
	    show: function (errMsg) {
	        $('.err-div').show().find('.err-msg').text(errMsg);
	    },
	    hide: function () {
	        $('.err-div').hide().find('.err-msg').text('');
	    }
	};

	//page逻辑部分
	var page = {
	    init: function () {
	        this.bindEvent();
	    },
	    bindEvent: function () {
	        var _this = this;
	        //登录按钮的点击
	        $('#submit').click(function () {
	            _this.submit();
	        });
	        //按下回车，进行提交
	        $('#pass').keyup(function (e) {
	            if (e.keyCode === 13) {
	                _this.submit();
	            }
	        });
	        $('#pass').passwordbox({
	            inputEvents: $.extend({}, $.fn.passwordbox.defaults.inputEvents, {
	                keypress: function (e) {
	                    var char = String.fromCharCode(e.which);
	                    $('#viewer').html(char).fadeIn(200, function () {
	                        $(this).fadeOut();
	                    });
	                }
	            })
	        });
	    },
	    //提交表单
	    submit: function () {
	        var formData = {
	                username: $.trim($('#username').val()),
	                password: $.trim($('#pass').val())
	            },
	            //表单验证结果
	            vaildateResult = this.formValiddata(formData);
	        //验证成功
	        if (vaildateResult.status) {
	            //提交
	            _user.login(formData, function (res) {
	                window.location.href = _wl.getUrlParam('redirect') || './index.html';
	            }, function (errMsg) {
	                formError.show(errMsg);
	            });
	        }
	        //验证失败
	        else {
	            //错误提示
	            formError.show(vaildateResult.msg);
	        }
	    },
	    //表单字段的验证
	    formValiddata: function (formData) {
	        var result = {
	            status: false,
	            msg: ''
	        };
	        if (!_wl.validata(formData.username, 'require')) {
	            result.msg = ' 用户名不能为空';
	            return result;
	        }
	        if (!_wl.validata(formData.password, 'require')) {
	            result.msg = ' 密码不能为空';
	            return result;
	        }
	        //通过验证，返回正确提示
	        result.status = true;
	        result.msg = ' 验证通过';
	        return result;
	    }
	};

	$(function () {
	    
	    page.init();
	});

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});