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
exports.ProductController = void 0;
const ProductBusiness_1 = require("../Business/ProductBusiness");
class ProductController {
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, size, price } = req.body;
                const input = {
                    name,
                    size,
                    price
                };
                const productBusiness = new ProductBusiness_1.ProductBusiness();
                const productMessage = yield productBusiness.createProduct(input);
                res.status(200).send({ productMessage });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error" });
                }
            }
        });
    }
    getProductByNameController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const productByNameBusiness = new ProductBusiness_1.ProductBusiness();
                const productName = yield productByNameBusiness.getProductByNameBusiness(name);
                res.status(200).send({ productName });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error" });
                }
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map