/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.about__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.about__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 4,
					autoHeight: true,
				},
				560: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 4,
				},

			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.team__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.team__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 16,
			autoHeight: true,
			speed: 800,

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 16,
					autoHeight: true,
				},
				560: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},

			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.crypto__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.crypto__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 8,
			autoHeight: true,
			speed: 800,

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 4,
					autoHeight: true,
				},
				560: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 4,
				},

			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.virtual__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.virtual__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 8,
			autoHeight: true,
			speed: 800,

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 8,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 8,
				},

			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.data__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.data__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 16,
			autoHeight: true,
			speed: 800,

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 16,
					autoHeight: true,
				},
				560: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},

			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.projects__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.projects__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});