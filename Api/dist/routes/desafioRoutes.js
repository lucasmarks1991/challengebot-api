"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _DesafioController = require('../controllers/DesafioController'); var _DesafioController2 = _interopRequireDefault(_DesafioController);

const router = new (0, _express.Router)();

router.get('/', _DesafioController2.default.index);

exports. default = router;
