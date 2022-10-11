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
exports.TagsBusiness = void 0;
const TagsDataBase_1 = require("../data/TagsDataBase");
const MissingFieldsToComplet_1 = require("../Error/MissingFieldsToComplet");
const IdGenerator_1 = __importDefault(require("../services/IdGenerator"));
class TagsBusiness {
    createTags(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name) {
                throw new MissingFieldsToComplet_1.MissingFieldsToComplet();
            }
            const tag = {
                id: IdGenerator_1.default.generate(),
                name: input.name
            };
            const tagsDataBase = new TagsDataBase_1.TagsDataBase();
            const newTags = yield tagsDataBase.insertTags(tag);
            return newTags;
        });
    }
    getTagByNameBusiness(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error("Fill the name in params");
            }
            const productTagDataBase = new TagsDataBase_1.TagsDataBase();
            const result = yield productTagDataBase.findTagByName(name);
            return result;
        });
    }
}
exports.TagsBusiness = TagsBusiness;
//# sourceMappingURL=TagsBusiness.js.map