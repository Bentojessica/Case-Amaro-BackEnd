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
exports.TagsDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class TagsDataBase extends BaseDataBase_1.BaseDataBase {
    insertTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(tags)
                    .into(TagsDataBase.TABLE_NAME);
                return "Tag created successfully";
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
    findTagByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tag = yield this.getConnection()
                    .select(["amaro_tags.id as id ", "amaro_tags.name as nome da tag"])
                    .from(TagsDataBase.TABLE_NAME)
                    .where({ "amaro_tags.name": name });
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
exports.TagsDataBase = TagsDataBase;
TagsDataBase.TABLE_NAME = "amaro_tags";
//# sourceMappingURL=TagsDataBase.js.map