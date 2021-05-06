"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _IndexController = require('../controllers/IndexController'); var _IndexController2 = _interopRequireDefault(_IndexController);

const router = new (0, _express.Router)();

router.get('/', _IndexController2.default.index);

exports. default = router;
