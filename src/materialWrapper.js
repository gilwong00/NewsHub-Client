import Vue from 'vue';
import {
    MdButton,
    MdContent,
    MdTabs,
    MdApp,
    MdList,
    MdIcon,
    MdToolbar,
    MdTable,
    MdCard,
    MdRipple
} from 'vue-material/dist/components';

const InitMaterial = () => {
    Vue.use(MdButton);
    Vue.use(MdContent);
    Vue.use(MdTabs);
    Vue.use(MdApp);
    Vue.use(MdList);
    Vue.use(MdIcon);
    Vue.use(MdToolbar);
    Vue.use(MdTable);
    Vue.use(MdCard);
    Vue.use(MdRipple);
};

export default InitMaterial;
