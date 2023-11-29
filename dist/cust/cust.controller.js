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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustController = void 0;
const common_1 = require("@nestjs/common");
const cust_service_1 = require("./cust.service");
const create_cust_dto_1 = require("./dto/create-cust.dto");
const update_cust_dto_1 = require("./dto/update-cust.dto");
let CustController = class CustController {
    constructor(custService) {
        this.custService = custService;
    }
    create(createCustDto) {
        return this.custService.create(createCustDto);
    }
    findAll() {
        return this.custService.findAll();
    }
    findOne(id) {
        return this.custService.findOne(+id);
    }
    update(id, updateCustDto) {
        return this.custService.update(+id, updateCustDto);
    }
    remove(id) {
        return this.custService.remove(+id);
    }
};
exports.CustController = CustController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cust_dto_1.CreateCustDto]),
    __metadata("design:returntype", void 0)
], CustController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cust_dto_1.UpdateCustDto]),
    __metadata("design:returntype", void 0)
], CustController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustController.prototype, "remove", null);
exports.CustController = CustController = __decorate([
    (0, common_1.Controller)('cust'),
    __metadata("design:paramtypes", [cust_service_1.CustService])
], CustController);
//# sourceMappingURL=cust.controller.js.map