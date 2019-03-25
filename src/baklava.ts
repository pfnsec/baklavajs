import OurVue, { VueConstructor } from "vue";
import Editor from "./view/components/Editor.vue";

// @ts-ignore
import PortalVue from "portal-vue";

const Baklava = {
    install(Vue: VueConstructor, args?: any): void {
        if (OurVue !== Vue) {
            // tslint:disable-next-line:no-console
            console.error("Multiple instances of Vue detected\n" +
                "See https://github.com/vuetifyjs/vuetify/issues/4068\n\n" +
                'If you\'re seeing "$attrs is readonly", it\'s caused by this');
        }

        Vue.prototype.$baklava = new Vue({
            data: {
                sidebar: {
                    visible: false,
                    nodeId: "",
                    optionName: ""
                }
            }
        });

        Vue.use(PortalVue);
        Vue.component("baklava-editor", Editor);
    }
};

export default Baklava;
