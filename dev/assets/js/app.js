/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/assets/js/scripts/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/assets/js/scripts/modules/calendar.js":
/*!***************************************************!*\
  !*** ./dev/assets/js/scripts/modules/calendar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Calendar = function Calendar() {\n  _classCallCheck(this, Calendar);\n\n  $(\".case_scheduler_form\").submit(function (e) {\n    e.preventDefault();\n    var product_time = $('.product_name').val();\n    console.log(product_time);\n    var start_day = $(\"#datepicker\").datepicker({\n      dateFormat: 'dd,MM,yy'\n    }).val();\n    console.log(start_day);\n\n    if (product_time != null && start_day != '') {\n      $('.loader').addClass('visible');\n      setTimeout(function () {\n        $('.processing_days').html('<u><span style=\"color:#000\">= In-Lab:' + product_time + '</span></u>');\n        $('#calendar-dates').empty();\n        $('#calendar-dates2').empty(); //console.log(res);\n\n        start_day = moment(start_day);\n        var starting_date = moment(start_day).format('DD'); //console.log(starting_date);\n\n        var first_day = start_day.format('dddd'),\n            first_working_date; //console.log(first_day);\n\n        switch (first_day) {\n          case 'Saturday':\n            first_working_date = parseInt(starting_date) + 2;\n            break;\n\n          case 'Sunday':\n            first_working_date = parseInt(starting_date) + 1;\n            break;\n\n          default:\n            first_working_date = parseInt(starting_date);\n        } //console.log(first_working_date);\n        //var this_day = moment(start_day).format('dddd');\n        //console.log(this_day);\n\n\n        var processing_time = parseInt(product_time); // var processing_time = 10;\n\n        var total_day = 0,\n            next_day,\n            cur_day,\n            required = 0;\n        console.log('processing time :' + processing_time);\n        cur_day = start_day;\n\n        while (total_day < processing_time + 3) {\n          // next_day = cur_day.add(1, 'day');\n          next_day = cur_day;\n          var day = moment(next_day).format('dddd');\n\n          if (day != 'Saturday' && day != 'Sunday') {\n            total_day++;\n          }\n\n          required++;\n          cur_day = cur_day.add(1, 'day');\n          ;\n        }\n\n        console.log('required :' + required);\n        var d = new Date();\n        var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n        var month = d.getMonth(); //0-11\n\n        var year = d.getFullYear(); //2014\n\n        var first_date = month_name[month] + \" \" + 1 + \" \" + year; //September 1 2014\n\n        var tmp = new Date(first_date).toDateString(); //Mon Sep 01 2014 ...\n\n        var first_day = tmp.substring(0, 3); //Mon\n\n        var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n        var day_no = day_name.indexOf(first_day); //1\n\n        var days = new Date(year, month + 1, 0).getDate(); //30\n        //Tue Sep 30 2014 ...\n\n        var remaining_day = days - starting_date + 1; //console.log(remaining_day);\n\n        var calendar = '',\n            more_required;\n\n        if (remaining_day >= required) {\n          calendar = get_calendar(day_no, days, starting_date, required);\n          document.getElementById(\"calendar-dates\").appendChild(calendar);\n          document.getElementById(\"calendar-month-year\").innerHTML = month_name[month] + \" \" + year;\n        } else {\n          calendar = get_calendar(day_no, days, starting_date, remaining_day);\n          document.getElementById(\"calendar-dates\").appendChild(calendar);\n          document.getElementById(\"calendar-month-year\").innerHTML = month_name[month] + \" \" + year;\n          more_required = required - remaining_day;\n          var next_month = month + 1;\n          first_date = month_name[next_month] + \" \" + 1 + \" \" + year;\n          tmp = new Date(first_date).toDateString();\n          first_day = tmp.substring(0, 3);\n          day_no = day_name.indexOf(first_day);\n          days = new Date(year, next_month + 1, 0).getDate();\n          var calendar2 = get_calendar(day_no, days, 1, more_required);\n          document.getElementById(\"calendar-dates2\").appendChild(calendar2);\n          document.getElementById(\"calendar-month-year2\").innerHTML = month_name[next_month] + \" \" + year;\n        }\n\n        function get_calendar(day_no, days, starting_date, required) {\n          //console.log(starting_date);\n          starting_date = parseInt(starting_date);\n          var checked = []; //console.log(checked);\n\n          for (var i = starting_date, inc = 0; i < starting_date + required; i++, inc++) {\n            checked = [].concat(_toConsumableArray(checked), [starting_date + inc]);\n          } //console.log(checked);\n\n\n          var number_of_days = checked.length; //console.log(' Length is ' + number_of_days);\n\n          var last_delivery = checked[number_of_days - 2]; //console.log(last_delivery);\n\n          var expected_date = checked[number_of_days - 1];\n          var table = document.createElement('table');\n          var tr = document.createElement('tr'); //row for the day letters\n\n          for (var c = 0; c <= 6; c++) {\n            var td = document.createElement('td');\n            td.innerHTML = \"SMTWTFS\"[c];\n            tr.appendChild(td);\n          }\n\n          table.appendChild(tr); //create 2nd row empty\n\n          tr = document.createElement('tr');\n          var c;\n\n          for (c = 0; c <= 6; c++) {\n            if (c == day_no) {\n              break;\n            }\n\n            var td = document.createElement('td');\n            td.innerHTML = \"\";\n            tr.appendChild(td);\n          } // 2nd row days\n\n\n          var count = 1;\n\n          for (; c <= 6; c++) {\n            var td = document.createElement('td');\n\n            if (checked.includes(count)) {\n              td.classList.add(\"active\");\n            }\n\n            if (c == 0) {\n              td.classList.add(\"offday\");\n            }\n\n            if (c == 6) {\n              td.classList.add(\"offday\");\n            }\n\n            if (count == first_working_date) {\n              td.classList.add(\"delivery\");\n            }\n\n            td.innerHTML = count;\n            count++;\n            tr.appendChild(td);\n          }\n\n          table.appendChild(tr); //rest of the date rows\n\n          for (var r = 3; r <= 7; r++) {\n            tr = document.createElement('tr');\n\n            for (var c = 0; c <= 6; c++) {\n              if (count > days) {\n                table.appendChild(tr);\n                return table;\n              }\n\n              var td = document.createElement('td');\n\n              if (checked.includes(count)) {\n                td.classList.add(\"active\");\n              }\n\n              if (c == 0) {\n                td.classList.add(\"offday\");\n              }\n\n              if (c == 6) {\n                td.classList.add(\"offday\");\n              }\n\n              if (count == first_working_date || count == last_delivery) {\n                td.classList.add(\"delivery\");\n              }\n\n              if (count == expected_date) {\n                td.classList.add(\"expected\");\n              }\n\n              td.innerHTML = count;\n              count++;\n              tr.appendChild(td);\n            }\n\n            table.appendChild(tr);\n          }\n\n          return table;\n        } // End get calendar\n\n\n        $('#calendar-container').addClass('show');\n        $('.loader').removeClass('visible');\n      }, 3000); // setTimeout \n    } else {\n      alert('Please select both field');\n    }\n  }); // change function\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./dev/assets/js/scripts/modules/calendar.js?");

/***/ }),

/***/ "./dev/assets/js/scripts/scripts.js":
/*!******************************************!*\
  !*** ./dev/assets/js/scripts/scripts.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calendar */ \"./dev/assets/js/scripts/modules/calendar.js\");\n\njQuery(document).ready(function ($) {\n  // Carousel\n  $('.owl-carousel').owlCarousel({\n    loop: true,\n    margin: 10,\n    items: 1\n  }); // Mobile Menu Togglers\n\n  $('.mobile_menu_opener').click(function () {\n    $('.mobile_menu').addClass('visible');\n  });\n  $('.mobile_menu .closer').click(function () {\n    $('.mobile_menu').removeClass('visible');\n  }); // End Mobile Menu Togglers\n  // mobile menu extender on click\n\n  $('.mobile_menu ul li').click(function (e) {\n    e.preventDefault();\n    $(this).find('ul').slideToggle('1000');\n  }); // Tabs\n\n  $(\"#tabs\").tabs({\n    active: 0\n  });\n  $(\".btn2\").click(function (e) {\n    e.preventDefault();\n    $(\"#tabs\").tabs(\"option\", \"active\", 1);\n  }); //Zip code validator\n\n  $('.zip_form').submit(function (e) {\n    e.preventDefault();\n    var zip = parseInt($('.zip_input').val());\n    console.log(zip);\n    var zip_array = [43002, 43004, 43016, 43017, 43026, 43054, 43068, 43081, 43085, 43086, 43109, 43110, 43119, 43123, 43125, 43126, 43201, 43202, 43203, 43204, 43205, 43206, 43207, 43209, 43210, 43211, 43212, 43213, 43214, 43215, 43216, 43217, 43218, 43219, 43220, 43221, 43222, 43223, 43224, 43226, 43227, 43228, 43229, 43230, 43231, 43232, 43234, 43235, 43236];\n\n    if (zip_array.includes(zip)) {\n      var show_form = true;\n    } else {\n      alert('Not exists!');\n    }\n  }); // End Zip validator\n\n  $(\"#datepicker\").datepicker(); // Calendar\n\n  var calendar = new _modules_calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n}); // Document ready function\n\n//# sourceURL=webpack:///./dev/assets/js/scripts/scripts.js?");

/***/ })

/******/ });