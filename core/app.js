/**
 * @file entry
 * @author missGo(1255418233@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import { registerFilters } from '@/utils/filter'

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';

Vue.use(Meta);
registerFilters(Vue)


Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
