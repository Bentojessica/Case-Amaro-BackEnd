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
exports.ProductTagIdController = void 0;
const ProductTagIdBusiness_1 = require("../Business/ProductTagIdBusiness");
class ProductTagIdController {
    createProductTagId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_product, id_tags } = req.body;
                const input = {
                    id_product,
                    id_tags
                };
                const productTagIdBusiness = new ProductTagIdBusiness_1.ProductTagIdBusiness();
                const productTagIdMessage = yield productTagIdBusiness.createProductTagId(input);
                res.status(200).send({ productTagIdMessage });
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
    getProduct_TagsByIdProductController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_product } = req.params;
                const productTagsByIdProductBusiness = new ProductTagIdBusiness_1.ProductTagIdBusiness();
                const productId = yield productTagsByIdProductBusiness.getProduct_TagsByIdProductBusiness(id_product);
                res.status(200).send({ productId });
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
    getProduct_TagsByIdTagController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_tag = req.query.id_tag;
                const productTagsByIdTagBusiness = new ProductTagIdBusiness_1.ProductTagIdBusiness();
                const tagId = yield productTagsByIdTagBusiness.getProduct_TagsByIdTagBusiness(id_tag);
                res.status(200).send({ tagId });
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
exports.ProductTagIdController = ProductTagIdController;
//# sourceMappingURL=ProductTagIdController.js.map