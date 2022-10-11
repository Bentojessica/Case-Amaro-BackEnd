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
exports.ProductTagIdBusiness = void 0;
const ProductTagIdDataBase_1 = require("../data/ProductTagIdDataBase");
const MissingFieldsToComplet_1 = require("../Error/MissingFieldsToComplet");
class ProductTagIdBusiness {
    createProductTagId(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.id_product || !input.id_tags) {
                throw new MissingFieldsToComplet_1.MissingFieldsToComplet();
            }
            for (let i = 0; i < input.id_tags.length; i++) {
                const tag = input.id_tags[i];
                const productTagInput = {
                    id_product: input.id_product,
                    id_tags: [tag]
                };
                const productTagDataBase = new ProductTagIdDataBase_1.ProductTagIdDataBase();
                yield productTagDataBase.insertProductTagId(productTagInput);
            }
            return "Product e Tag created successfully";
        });
    }
    getProduct_TagsByIdProductBusiness(id_product) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_product) {
                throw new Error("Fill the id_product in params");
            }
            const productTagIdProductDataBase = new ProductTagIdDataBase_1.ProductTagIdDataBase();
            const result = yield productTagIdProductDataBase.getProduct_TagsByIdProduct(id_product);
            const produtos = {
                idDoProduto: result[0]["id do produto"],
                nomeDoProduto: result[0]["nome do produto"],
                tamanho: result[0]["tamanho do produto"],
                preco: result[0]["preço do produto"],
                tag: result.map((index) => {
                    return index.name;
                })
            };
            if (!produtos) {
                throw new Error("There is no product");
            }
            return produtos;
        });
    }
    getProduct_TagsByIdTagBusiness(id_tag) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_tag) {
                throw new Error("Fill the id_tag in query");
            }
            const productTagIdTagDataBase = new ProductTagIdDataBase_1.ProductTagIdDataBase();
            const result = yield productTagIdTagDataBase.getProduct_TagsByIdTags(id_tag);
            if (!result) {
                throw new Error("There is no product in this tag");
            }
            return result;
        });
    }
}
exports.ProductTagIdBusiness = ProductTagIdBusiness;
//# sourceMappingURL=ProductTagIdBusiness.js.map