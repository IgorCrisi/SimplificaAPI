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
var Destino_1 = __importDefault(require("../../../destinos/typeorm/entities/Destino"));
var FormaPagamento_1 = __importDefault(require("../../../formaPagamento/typeorm/entities/FormaPagamento"));
var Fornecedor_1 = __importDefault(require("../../../fornecedor/typeorm/entities/Fornecedor"));
var Loja_1 = __importDefault(require("../../../lojas/typeorm/entities/Loja"));
var TipoNota_1 = __importDefault(require("../../../tipoNota/typeorm/entities/TipoNota"));
var typeorm_1 = require("typeorm");
var Nota = /** @class */ (function () {
    function Nota() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Nota.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Nota.prototype, "numero", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Nota.prototype, "valor", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Fornecedor_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'fornecedor_id' }),
        __metadata("design:type", Fornecedor_1.default)
    ], Nota.prototype, "fornecedor", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return TipoNota_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'tipo_nota_id' }),
        __metadata("design:type", TipoNota_1.default)
    ], Nota.prototype, "tipoNota", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Destino_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'destino_id' }),
        __metadata("design:type", Destino_1.default)
    ], Nota.prototype, "destino", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return FormaPagamento_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'forma_pagamento_id' }),
        __metadata("design:type", FormaPagamento_1.default)
    ], Nota.prototype, "forma_pagamento", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Loja_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'loja_id' }),
        __metadata("design:type", Loja_1.default)
    ], Nota.prototype, "loja", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Nota.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Nota.prototype, "observacao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Nota.prototype, "usuario_update", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Nota.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Nota.prototype, "updated_at", void 0);
    Nota = __decorate([
        (0, typeorm_1.Entity)('notas')
    ], Nota);
    return Nota;
}());
exports.default = Nota;
