"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var HandlebarsMailTemplate_1 = __importDefault(require("./HandlebarsMailTemplate"));
var EtherealMail = /** @class */ (function () {
    function EtherealMail() {
    }
    EtherealMail.sendMail = function (_a) {
        var to = _a.to, from = _a.from, subject = _a.subject, templateData = _a.templateData;
        return __awaiter(this, void 0, void 0, function () {
            var account, mailTemplate, transporter, message, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, nodemailer_1.default.createTestAccount()];
                    case 1:
                        account = _e.sent();
                        mailTemplate = new HandlebarsMailTemplate_1.default();
                        transporter = nodemailer_1.default.createTransport({
                            host: account.smtp.host,
                            port: account.smtp.port,
                            secure: account.smtp.secure,
                            auth: {
                                user: account.user,
                                pass: account.pass
                            }
                        });
                        _c = (_b = transporter).sendMail;
                        _d = {
                            from: {
                                name: from.name || 'Equipe API Vendas',
                                address: from.email || 'equipe@apivendas.com.br',
                            },
                            to: {
                                name: to.name,
                                address: to.email,
                            },
                            subject: subject
                        };
                        return [4 /*yield*/, mailTemplate.parse(templateData)];
                    case 2: return [4 /*yield*/, _c.apply(_b, [(_d.html = _e.sent(),
                                _d)])];
                    case 3:
                        message = _e.sent();
                        console.log('Mensagem enviada %s', message.messageId);
                        console.log('Preview URL: %s', nodemailer_1.default.getTestMessageUrl(message));
                        return [2 /*return*/];
                }
            });
        });
    };
    return EtherealMail;
}());
exports.default = EtherealMail;
