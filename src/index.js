'use strict';

import photoGallery from './modules/gallery';
import calc from './modules/calculator';
import giftPopup from './modules/giftPopup';
import freeVisit from './modules/freeVisit';
import clubChoice from './modules/clubChoice';
import eventListeners from './modules/eventListeners';
import burgerStick from './modules/burgerSticky';
import toTop from './modules/toTopArrow';
import mainSlider from './modules/mainSlider';
import carousel from './modules/carousel';

eventListeners();

burgerStick();

clubChoice();

freeVisit();

toTop();

giftPopup();

mainSlider();

calc();

photoGallery();

carousel();