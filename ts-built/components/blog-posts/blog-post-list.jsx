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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var http_1 = require("@hopfab/http");
var blog_post_list_item_1 = require("./blog-post-list-item");
var large_blog_post_list_item_1 = require("./large-blog-post-list-item");
var down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
var BlogPostList = function (_a) {
    var initialBlogPosts = _a.initialBlogPosts, initialCurrentPage = _a.initialCurrentPage, totalPages = _a.totalPages, category = _a.category;
    var _b = react_1.useState(initialBlogPosts), blogPosts = _b[0], setBlogPosts = _b[1];
    var _c = react_1.useState(initialCurrentPage), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    /* On regroupe les projets 4 par 4 pour le rendu journal */
    var NUM_COLUMNS = 4;
    var numLines = react_1.useMemo(function () { return Math.ceil(blogPosts.length / NUM_COLUMNS); }, [
        blogPosts,
    ]);
    var lines = react_1.useMemo(function () { return Array.from({ length: numLines }); }, [numLines]);
    var fetchData = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, http_1.get("/blog" + (category ? "-" + category.slug : "") + "-" + currentPage + ".json")];
                case 2:
                    result_1 = _a.sent();
                    if (result_1 === {})
                        return [2 /*return*/];
                    setBlogPosts(function (oldBlogPosts) { return __spreadArray(__spreadArray([], oldBlogPosts), result_1.map(function (d) { return d.post; })); });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); }, [currentPage]);
    return (<div className="grid gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto pb-10">
      {lines.map(function (_, lineIndex) { return (<div key={lineIndex}>
          {(blogPosts === null || blogPosts === void 0 ? void 0 : blogPosts[lineIndex * NUM_COLUMNS]) ? (<large_blog_post_list_item_1.default blogPost={blogPosts === null || blogPosts === void 0 ? void 0 : blogPosts[lineIndex * NUM_COLUMNS]} className="text-gris-800 border-t border-b border-gris-800" theme="dark"/>) : (<></>)}
          <div className="grid blog-post-list md:gap-x-30 lg:gap-x-20 xl:gap-x-22 2xl:gap-x-29.5 gap-y-12 py-16">
            {blogPosts
                .slice(lineIndex * NUM_COLUMNS + 1, (lineIndex + 1) * NUM_COLUMNS)
                .map(function (blogPost, rowIndex) { return (<blog_post_list_item_1.default key={blogPost.id} blogPost={blogPost} className={(rowIndex === 2 ? "md:col-span-2 lg:col-span-1" : "") + " text-gris-800"} theme="dark" imageDisplay={rowIndex === 2 ? "landscape" : "portrait"}/>); })}
          </div>
        </div>); })}
      {totalPages > currentPage && (<div className="flex justify-end">
          {!isLoading && (<button type="button" onClick={function () {
                    setCurrentPage(currentPage + 1);
                    fetchData();
                }} className="group flex items-center text-4xl md:text-6.1xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
              <span className="mt-1.5 border-b-6 transition duration-200 ease-in-out transform border-transparent group-hover:border-gris-800">
                Voir plus
              </span>
              <down_right_arrow_icon_1.default className="w-6 h-6 md:w-11 md:h-11 ml-4 mt-2"/>
            </button>)}
          {isLoading && (<div className="text-4xl md:text-6.1xl font-bold">
              Chargement ...
            </div>)}
        </div>)}
    </div>);
};
exports.default = BlogPostList;
//# sourceMappingURL=blog-post-list.jsx.map