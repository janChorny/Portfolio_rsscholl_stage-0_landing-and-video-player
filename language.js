'use strict'
// language switcher
const i18Obj = {
	'en': {
		'skills': 'Skills',
		'portfolio': 'Portfolio',
		'video': 'Video',
		'price': 'Price',
		'contacts': 'Contacts',
		'hero-title': 'Alexa Rise',
		'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
		'hire': 'Hire me',
		'skill-title-1': 'Digital photography',
		'skill-text-1': 'High-quality photos in the studio and on the nature',
		'skill-title-2': 'Video shooting',
		'skill-text-2': 'Capture your moments so that they always stay with you',
		'skill-title-3': 'Retouch',
		'skill-text-3': 'I strive to make photography surpass reality',
		'skill-title-4': 'Audio',
		'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
		'winter': 'Winter',
		'spring': 'Spring',
		'summer': 'Summer',
		'autumn': 'Autumn',
		'price-variant-1': 'Standard',
		'price-variant-2': 'Premium',
		'price-variant-3': 'Gold',
		'price-description-1-span-1': 'One location',
		'price-description-1-span-2': '120 photos in color',
		'price-description-1-span-3': '12 photos in retouch',
		'price-description-1-span-4': 'Readiness 2-3 weeks',
		'price-description-1-span-5': 'Make up, visage',
		'price-description-2-span-1': 'One or two locations',
		'price-description-2-span-2': '200 photos in color',
		'price-description-2-span-3': '20 photos in retouch',
		'price-description-2-span-4': 'Readiness 1-2 weeks',
		'price-description-2-span-5': 'Make up, visage',
		'price-description-3-span-1': 'Three locations or more',
		'price-description-3-span-2': '300 photos in color',
		'price-description-3-span-3': '50 photos in retouch',
		'price-description-3-span-4': 'Readiness 1 week',
		'price-description-3-span-5': 'Make up, visage, hairstyle',
		'order': 'Order shooting',
		'contact-me': 'Contact me',
		'send-message': 'Send message',
		'lang-1': 'en',
		'lang-2': 'ru',
		'e-mail': 'E-mail',
		'phone': 'Phone',
		'message': 'Message'
	},
	'ru': {
		'skills': 'Навыки',
		'portfolio': 'Портфолио',
		'video': 'Видео',
		'price': 'Цены',
		'contacts': 'Контакты',
		'hero-title': 'Алекса Райс',
		'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
		'hire': 'Пригласить',
		'skill-title-1': 'Фотография',
		'skill-text-1': 'Высококачественные фото в студии и на природе',
		'skill-title-2': 'Видеосъемка',
		'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
		'skill-title-3': 'Ретушь',
		'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
		'skill-title-4': 'Звук',
		'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
		'winter': 'Зима',
		'spring': 'Весна',
		'summer': 'Лето',
		'autumn': 'Осень',
		'price-variant-1': 'Стандарт',
		'price-variant-2': 'Продвинутый',
		'price-variant-3': 'Премиальный',
		'price-description-1-span-1': 'Одна локация',
		'price-description-1-span-2': '120 цветных фото',
		'price-description-1-span-3': '12 отретушированных фото',
		'price-description-1-span-4': 'Готовность через 2-3 недели',
		'price-description-1-span-5': 'Макияж, визаж',
		'price-description-2-span-1': 'Одна-две локации',
		'price-description-2-span-2': '200 цветных фото',
		'price-description-2-span-3': '20 отретушированных фото',
		'price-description-2-span-4': 'Готовность через 1-2 недели',
		'price-description-2-span-5': 'Макияж, визаж',
		'price-description-3-span-1': 'Три локации и больше',
		'price-description-3-span-2': '300 цветных фото',
		'price-description-3-span-3': '50 отретушированных фото',
		'price-description-3-span-4': 'Готовность через 1 неделю',
		'price-description-3-span-5': 'Макияж, визаж, прическа',
		'order': 'Заказать съемку',
		'contact-me': 'Свяжитесь со мной',
		'send-message': 'Отправить',
		'lang-1': 'анг',
		'lang-2': 'рус',
		'e-mail': 'Электронная почта',
		'phone': 'Телефон',
		'message': 'Сообщение'
	}
}
// export default i18Obj;
const language = document.querySelector('.header__switch')
const RUSSIAN = document.querySelector('.header__switch-item--ru');
const ENGLISH = document.querySelector('.header__switch-item--en');


function getTranslate(lang) {
	const elementsToTranslate = document.querySelectorAll('[data-i18n]');
	elementsToTranslate.forEach((element) => {
		element.textContent = i18Obj[lang][element.dataset.i18n];
		if (element.placeholder) { element.value = ''; element.placeholder = i18Obj[lang][element.dataset.i18n]; }
	})
};


//local storage - doesn't work

// btnTheme.onclick = () => {
// 	if (event.target.classList.contains('change')) {
// 		localStorage.setItem('theme', 'dark');
// 	} else {
// 		localStorage.setItem('theme', 'light');
// 	}
// };

language.onclick = () => {
	if (event.target.classList.contains('header__switch-item--ru')) {
		localStorage.setItem('language', 'ru');
		getTranslate('ru');	
		RUSSIAN.classList.add('header__switch-item--language');
		ENGLISH.classList.remove('header__switch-item--language')
		} else if (event.target.classList.contains('header__switch-item--en')) {
			localStorage.setItem('language', 'en');
			getTranslate('en');
			RUSSIAN.classList.remove('header__switch-item--language');
			ENGLISH.classList.add('header__switch-item--language')
			}
};
window.addEventListener('load', () => {
	if (localStorage.getItem('language') === 'en'){
		getTranslate('en');
		RUSSIAN.classList.remove('header__switch-item--language');
		ENGLISH.classList.add('header__switch-item--language')
	} else if (localStorage.getItem('language') === 'ru') {
		getTranslate('ru');
		RUSSIAN.classList.add('header__switch-item--language');
		ENGLISH.classList.remove('header__switch-item--language')
	};
}
)



