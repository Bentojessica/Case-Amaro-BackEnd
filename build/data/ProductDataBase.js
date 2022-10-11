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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class ProductDataBase extends BaseDataBase_1.BaseDataBase {
    insertProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(product)
                    .into(ProductDataBase.TABLE_NAME);
                return "Product created successfully";
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
    productValidation(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select("*")
                    .where({ name })
                    .from(ProductDataBase.TABLE_NAME);
                return product[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
    findProductByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select(["amaro_product.id as id do produto", "amaro_product.name as nome do produto",
                    "amaro_product.size as tamanho", "amaro_product.price as preço"])
                    .from(ProductDataBase.TABLE_NAME)
                    .where({ "amaro_product.name": name });
                return product;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
}
exports.ProductDataBase = ProductDataBase;
ProductDataBase.TABLE_NAME = "amaro_product";
//# sourceMappingURL=ProductDataBase.js.map