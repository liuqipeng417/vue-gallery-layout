import Layout from './components/Layout.vue';

Layout.install = function (Vue) {
	Vue.component(Layout.name, Layout);
};

export default Layout;