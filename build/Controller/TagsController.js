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
exports.TagsController = void 0;
const TagsBusiness_1 = require("../Business/TagsBusiness");
class TagsController {
    createTag(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const input = {
                    name
                };
                const tagsBusiness = new TagsBusiness_1.TagsBusiness();
                const tagMessage = yield tagsBusiness.createTags(input);
                res.status(200).send({ tagMessage });
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
    getTagByNameController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const productByNameBusiness = new TagsBusiness_1.TagsBusiness();
                const productName = yield productByNameBusiness.getTagByNameBusiness(name);
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
exports.TagsController = TagsController;
//# sourceMappingURL=TagsController.js.map