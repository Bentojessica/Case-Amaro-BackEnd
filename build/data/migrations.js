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
const BaseDataBase_1 = require("./BaseDataBase");
class Migrations extends BaseDataBase_1.BaseDataBase {
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().raw(`
            create table amaro_product(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            size VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            );

            create table amaro_tags(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );

            create table amaro_product_tags(
                id_product VARCHAR(255),
                id_tags VARCHAR(255),
                primary key(id_product , id_tags),
                foreign key (id_product) references amaro_product(id),
                foreign key (id_tags) references amaro_tags(id)
                );
        `);
            console.log("Table created successfully");
        });
    }
}
const createTableMigration = new Migrations();
createTableMigration.createTable();
//# sourceMappingURL=migrations.js.map