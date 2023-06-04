import { initTabs } from "../functions/tabs";
import { setCenter } from "./map";

initTabs('.catalog__tabs li', '.catalog__list');
initTabs('.terms-tabs li', '.terms-content__item');
initTabs('.contacts__tabs li', '.contacts__info', onMapTabChange);

function onMapTabChange(tab) {
  setCenter(tab.dataset.coords);
}
