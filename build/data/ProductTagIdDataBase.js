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
exports.ProductTagIdDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class ProductTagIdDataBase extends BaseDataBase_1.BaseDataBase {
    insertProductTagId(productTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(productTag)
                    .into(ProductTagIdDataBase.TABLE_NAME);
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
    getProduct_TagsByIdProduct(id_product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select(["amaro_product.id as id do produto", "amaro_product.name as nome do produto",
                    "amaro_product.size as tamanho do produto", "amaro_product.price as preço do produto", "amaro_tags.name"])
                    .innerJoin("amaro_product", "amaro_product_tags.id_product", "amaro_product.id")
                    .innerJoin("amaro_tags", "amaro_tags.id", "amaro_product_tags.id_tags")
                    .from(ProductTagIdDataBase.TABLE_NAME)
                    .where({ "amaro_product_tags.id_product": id_product });
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
    getProduct_TagsByIdTags(id_tag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [tag] = yield this.getConnection()
                    .select(["amaro_product.id as id do produto", "amaro_product.name as nome do produto",
                    "amaro_product.size as tamanho do produto", "amaro_product.price as preço do produto", "amaro_tags.name"])
                    .innerJoin("amaro_tags", "amaro_product_tags.id_tags", "amaro_tags.id")
                    .innerJoin("amaro_product", "amaro_product_tags.id_product", "amaro_product.id")
                    .from(ProductTagIdDataBase.TABLE_NAME)
                    .where({ "amaro_product_tags.id_tags": id_tag });
                return tag;
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
exports.ProductTagIdDataBase = ProductTagIdDataBase;
ProductTagIdDataBase.TABLE_NAME = "amaro_product_tags";
//# sourceMappingURL=ProductTagIdDataBase.js.map