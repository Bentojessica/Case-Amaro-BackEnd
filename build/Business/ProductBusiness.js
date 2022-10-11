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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBusiness = void 0;
const ProductDataBase_1 = require("../data/ProductDataBase");
const MissingFieldsToComplet_1 = require("../Error/MissingFieldsToComplet");
const IdGenerator_1 = __importDefault(require("../services/IdGenerator"));
class ProductBusiness {
    createProduct(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name || !input.size || !input.price) {
                throw new MissingFieldsToComplet_1.MissingFieldsToComplet();
            }
            const product = {
                id: IdGenerator_1.default.generate(),
                name: input.name,
                size: input.size,
                price: input.price
            };
            const productDataBase = new ProductDataBase_1.ProductDataBase();
            const productName = yield productDataBase.productValidation(product.name);
            if (productName) {
                throw new Error("Product já cadastrado");
            }
            const newProduct = yield productDataBase.insertProduct(product);
            return newProduct;
        });
    }
    getProductByNameBusiness(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error("Fill the name in params");
            }
            const productTagDataBase = new ProductDataBase_1.ProductDataBase();
            const result = yield productTagDataBase.findProductByName(name);
            if (!result) {
                throw new Error("There is no product");
            }
            return result;
        });
    }
}
exports.ProductBusiness = ProductBusiness;
//# sourceMappingURL=ProductBusiness.js.map