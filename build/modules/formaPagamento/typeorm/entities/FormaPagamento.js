"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Loja_1 = __importDefault(require("../../../lojas/typeorm/entities/Loja"));
var FormaPagamento = /** @class */ (function () {
    function FormaPagamento() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], FormaPagamento.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FormaPagamento.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FormaPagamento.prototype, "observacao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Loja_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'loja_id' }),
        __metadata("design:type", Loja_1.default)
    ], FormaPagamento.prototype, "loja", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FormaPagamento.prototype, "usuario_update", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], FormaPagamento.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], FormaPagamento.prototype, "updated_at", void 0);
    FormaPagamento = __decorate([
        (0, typeorm_1.Entity)('formasPagamento')
    ], FormaPagamento);
    return FormaPagamento;
}());
exports.default = FormaPagamento;
