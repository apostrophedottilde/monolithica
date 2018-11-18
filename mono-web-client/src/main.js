// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import DisplayCard from './components/forms/form.components/DisplayCard'
import HeaderNavBar from './components/navigation/HeaderNavBar'
import PageFooter from './components/navigation/PageFooter'
import ImageCarousel from './components/forms/form.components/ImageCarousel'
import ContextMenu from './components/navigation/ContextMenu'
import AuctionBidding from './components/AuctionBidding'
import ItemTagManagement from './components/ItemTagManagement'
import NewListingPagesContainer from './components/pages/create.new.listing/NewListingPagesContainer'
import ListingTypePicker from './components/forms/form.components/ListingTypePicker'
import FileUploadForm from './components/forms/FileUploadForm'
import bBadge from 'bootstrap-vue/es/components/badge/badge'
import bPagination from 'bootstrap-vue/es/components/pagination/pagination'
import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bFormFile from 'bootstrap-vue/es/components/form-file/form-file'
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group'

import bCard from 'bootstrap-vue/es/components/card/card'
import bCardHeader from 'bootstrap-vue/es/components/card/card-header'
import bCardBody from 'bootstrap-vue/es/components/card/card-body'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bBtn from 'bootstrap-vue/es/components/button/button'
import vbToggle from 'bootstrap-vue/es/directives/toggle/toggle'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

const VueCookie = require('vue-cookie');

Vue.use(VueCookie);
Vue.use(Datetime);
Vue.component('header-navbar', HeaderNavBar);
Vue.component('new-listing-pages-container', NewListingPagesContainer);
Vue.component('display-card', DisplayCard);
Vue.component('image-carousel', ImageCarousel);
Vue.component('context-menu', ContextMenu);
Vue.component('page-footer', PageFooter);
Vue.component('auction-bidding', AuctionBidding);
Vue.component('item-tag-management', ItemTagManagement);
Vue.component('listing-type-picker', ListingTypePicker);
Vue.component('file-upload-form', FileUploadForm);

// begin bootstrap components
Vue.component('b-badge', bBadge);
Vue.component('b-form-group', bFormGroup);
Vue.component('b-form-radio-group', bFormRadioGroup);
Vue.component('b-pagination', bPagination);
Vue.component('b-alert', bAlert);
Vue.component('b-form-file', bFormFile);

Vue.component('b-card', bCard);
Vue.component('b-card-header', bCardHeader);
Vue.component('b-card-body', bCardBody);
Vue.component('b-collapse', bCollapse);
Vue.component('b-btn', bBtn);
Vue.directive('b-toggle', vbToggle);
// end bootstrap components

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    components: {
      App,
      DisplayCard,
      HeaderNavBar,
      ContextMenu,
      PageFooter,
      AuctionBidding,
      ItemTagManagement,
      ListingTypePicker
    },
    render: h => h(App)
}).$mount('#app');
