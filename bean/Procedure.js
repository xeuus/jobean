"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hook_1 = require("../hook");
function Checkpoint(props) {
    return null;
}
exports.Checkpoint = Checkpoint;
function Procedure(props) {
    var id = props.id, children = props.children, controller = props.controller, content = props.content, attachToBottom = props.attachToBottom;
    return react_1.default.createElement(hook_1.Hook, { id: id }, function (hook) {
        var checkpoint = hook.context.checkpoint || children[0]['props']['id'];
        for (var i = 0; i < children.length; i++) {
            var childProps = children[i].props;
            if (childProps.id === checkpoint) {
                var provider = __assign({}, hook.context, { index: i, checkpoint: checkpoint, checkpoints: children.map(function (a) { return a.props; }), upload: function (context) {
                        return __awaiter(this, void 0, void 0, function () {
                            var newContext;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, hook.act(function (payload) {
                                            return __generator(this, function (_a) {
                                                return [2 /*return*/, Object.assign({}, payload, context, { pending: true })];
                                            });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, hook.act(function (payload) {
                                                var output;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            output = Object.assign({}, { checkpoint: checkpoint, pending: true }, payload, context);
                                                            if (!controller) return [3 /*break*/, 2];
                                                            return [5 /*yield**/, __values(controller.received(output))];
                                                        case 1:
                                                            output = (_a.sent()) || output;
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/, output];
                                                    }
                                                });
                                            })];
                                    case 2:
                                        newContext = _a.sent();
                                        return [4 /*yield*/, hook.act(function (payload) {
                                                return __generator(this, function (_a) {
                                                    return [2 /*return*/, Object.assign({}, { checkpoint: payload.checkpoint }, newContext, { pending: false })];
                                                });
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, newContext];
                                }
                            });
                        });
                    } });
                return react_1.default.createElement(react_1.Fragment, null,
                    (content && !attachToBottom) && content(provider),
                    childProps.children(provider),
                    (content && attachToBottom) && content(provider));
            }
        }
        return null;
    });
}
exports.Procedure = Procedure;