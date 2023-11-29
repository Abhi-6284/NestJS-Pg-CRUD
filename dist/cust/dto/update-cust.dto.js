"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cust_dto_1 = require("./create-cust.dto");
class UpdateCustDto extends (0, mapped_types_1.PartialType)(create_cust_dto_1.CreateCustDto) {
}
exports.UpdateCustDto = UpdateCustDto;
//# sourceMappingURL=update-cust.dto.js.map