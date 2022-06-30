"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var navbar_vue_1 = require("@/components/shared/navbar/navbar.vue");
var sidebar_vue_1 = require("@/components/shared/sidebar/sidebar.vue");
var breadcrumb_vue_1 = require("@/components/shared/breadcrumb/breadcrumb.vue");
var quickview_vue_1 = require("@/components/shared/quickview/quickview.vue");
var steps_vue_1 = require("@/components/steps/steps.vue");
vue_1["default"].component('navbar', navbar_vue_1["default"]);
vue_1["default"].component('sidebar', sidebar_vue_1["default"]);
vue_1["default"].component('breadcrumb', breadcrumb_vue_1["default"]);
vue_1["default"].component("quickview", quickview_vue_1["default"]);
vue_1["default"].component("steps", steps_vue_1["default"]);
//base components
var base_multi_select_vue_1 = require("@/components/base/base-multi-select/base-multi-select.vue");
var base_table_vue_1 = require("@/components/base/base-table/base-table.vue");
var base_select_vue_1 = require("@/components/base/base-select/base-select.vue");
var base_tree_select_vue_1 = require("@/components/base/base-tree-select/base-tree-select.vue");
var base_date_picker_vue_1 = require("@/components/base/base-date-picker/base-date-picker.vue");
vue_1["default"].component('baseMultiSelect', base_multi_select_vue_1["default"]);
vue_1["default"].component('baseTable', base_table_vue_1["default"]);
vue_1["default"].component('baseSelect', base_select_vue_1["default"]);
vue_1["default"].component('baseTreeSelect', base_tree_select_vue_1["default"]);
vue_1["default"].component('datePicker', base_date_picker_vue_1["default"]);
//Third party components
//Vue multiselect
var vue_multiselect_1 = require("vue-multiselect");
require("vue-multiselect/dist/vue-multiselect.min.css");
vue_1["default"].component('multiselect', vue_multiselect_1["default"]);
//Tree select
var vue_treeselect_1 = require("@riophae/vue-treeselect");
require("@riophae/vue-treeselect/dist/vue-treeselect.css");
vue_1["default"].component('treeselect', vue_treeselect_1["default"]);
// Dynamic-Filter
var odata_dynamic_filter_1 = require("odata-dynamic-filter");
require("odata-dynamic-filter/dist/odata-dynamic-filter.css");
vue_1["default"].component("dynamic-filter", odata_dynamic_filter_1["default"]);
// General Components
// Product
var ProductCard_vue_1 = require("@/components/product/ProductCard.vue");
vue_1["default"].component('product-card', ProductCard_vue_1["default"]);
var ProductCarousel_vue_1 = require("@/components/product/ProductCarousel.vue");
vue_1["default"].component('product-slider', ProductCarousel_vue_1["default"]);
var NewProductSection_vue_1 = require("@/components/product/NewProductSection.vue");
vue_1["default"].component('new-product-section', NewProductSection_vue_1["default"]);
var RelatedArticlesSection_vue_1 = require("@/components/product/RelatedArticlesSection.vue");
vue_1["default"].component('related-articles-section', RelatedArticlesSection_vue_1["default"]);
var BuyNowSection_vue_1 = require("@/components/product/BuyNowSection.vue");
vue_1["default"].component('buy-now-section', BuyNowSection_vue_1["default"]);
var ProductModels_vue_1 = require("@/components/product/ProductModels.vue");
vue_1["default"].component('product-models', ProductModels_vue_1["default"]);
var ProductDetailSection_vue_1 = require("@/components/product/ProductDetailSection.vue");
vue_1["default"].component('product-detail-section', ProductDetailSection_vue_1["default"]);
var TechnicalDetailsSection_vue_1 = require("@/components/product/TechnicalDetailsSection.vue");
vue_1["default"].component('technical-details-section', TechnicalDetailsSection_vue_1["default"]);
// Multilanguage
var MultiLanguage_vue_1 = require("@/components/multiLanguage/MultiLanguage.vue");
vue_1["default"].component("multi-language", MultiLanguage_vue_1["default"]);
// Category
var CategoryCard_vue_1 = require("@/components/category/CategoryCard.vue");
vue_1["default"].component('category-card', CategoryCard_vue_1["default"]);
var CategorySection_vue_1 = require("@/components/category/CategorySection.vue");
vue_1["default"].component('category-section', CategorySection_vue_1["default"]);
// Buttons 
// Add-cart button
var AddCartButton_vue_1 = require("@/components/buttons/AddCartButton.vue");
vue_1["default"].component('add-cart-button', AddCartButton_vue_1["default"]);
var CounterButton_vue_1 = require("@/components/buttons/CounterButton.vue");
vue_1["default"].component('counter-button', CounterButton_vue_1["default"]);
//Carousels
// PictureCarousel
var PictureCarousel_vue_1 = require("@/components/carousel/PictureCarousel.vue");
vue_1["default"].component('picture-carousel', PictureCarousel_vue_1["default"]);
