"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Router_1 = require("./Router/Router");
app_1.app.use("/product", Router_1.productRouter);
app_1.app.use("/tag", Router_1.tagsRouter);
app_1.app.use("/product/tag", Router_1.productTagsIdRouter);
//# sourceMappingURL=index.js.map