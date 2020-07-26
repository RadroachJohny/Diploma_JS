'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';

import 'fetch-polyfill';

import polyfill from 'cross-browser-polyfill';
polyfill();
import elementClosest from 'element-closest';
elementClosest(window);

import validation from './modules/formValidation';
import photoGallery from './modules/gallery';
import calc from './modules/calculator';
import giftPopup from './modules/giftPopup';
import eventListeners from './modules/eventListeners';
import burgerStick from './modules/burgerSticky';
import toTop from './modules/toTopArrow';
import mainSlider from './modules/mainSlider';
import carousel from './modules/carousel';
import footerForm from './modules/form';

eventListeners();

burgerStick();

toTop();

giftPopup();

mainSlider();

calc();

photoGallery();

carousel();

footerForm();

validation();
