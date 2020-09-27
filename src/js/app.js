import headerScroll from './modules/headerScroll';
import moduleFunction from './modules/moduleFunction'
import slidersInit from './modules/slidersInit';

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM LOADED');
	slidersInit()
	moduleFunction()
	headerScroll()
})