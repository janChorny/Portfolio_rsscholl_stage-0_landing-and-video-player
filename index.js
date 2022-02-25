"use strict"
//hamburger menu
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const navLinks = document.querySelectorAll('.header__list-item');

function toggleMenu() {
	hamburger.classList.toggle('open');
	headerList.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
	hamburger.classList.remove('open');
	headerList.classList.remove('open');
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// portfolio
const portfolioBtn = document.querySelectorAll('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__photo');
const portfolioBtns = document.querySelector('.portfolio__buttons');


function preloadSummerImages() {
	const seasons = ['winter', 'spring', 'summer', 'autumn'];
	for (let j = 0; j < seasons.length; j++){
	for (let i = 1; i <= 6; i++) {
		const img = new Image();
		img.src = `./assets/img/${seasons[j]}/${i}.jpg`;
		}
	}
}
preloadSummerImages();

function changeImage(event) {
	if (event.target.classList.contains('portfolio__button')) {
		const season = event.target.dataset.season;
		portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
	}
}


// another variant

// const winter = 'winter';
// const spring = 'spring';
// const summer = 'summer';
// const autumn = 'autumn';
// function changeImage(event) {
// 	if (event.target.classList.contains('portfolio__button')) {
// 		const season = event.target.dataset.season;
// 		if (season === winter) {
// 		portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
// 		} else if (season === spring) {
// 			portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
// 		} else if (season === summer) {
// 			portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
// 		} else {
// 			if (season === autumn) {
// 				portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
// 			}
// 		}
// 	}
// }
portfolioBtns.addEventListener('click', changeImage);

portfolioBtn.forEach(function (button) {
	button.addEventListener('click', function () {
		for (let i = 0; i < portfolioBtn.length; i++) {
			portfolioBtn[i].classList.add('button--transparent');
		}
		button.classList.remove('button--transparent');
	})
});

// change theme color
const bodyWrapper = document.querySelector('body');
const mainWrapper = document.querySelector('main');
const innerWrapper = document.querySelector('.wrapper');
const titleChange = document.querySelectorAll('.section-title');
const sectionChange = document.querySelectorAll('.section');
const headerListChange = document.querySelector('.header__list');
const headerListLinkChange = document.querySelectorAll('.header__link');
const sectionChangeButton = document.querySelector('.header__bulb');
const newWidth = document.documentElement.clientWidth;
const lineChange = document.querySelectorAll('.line');

function changeSection() {
	sectionChange.forEach((element) => element.classList.toggle('light-theme'));
	bodyWrapper.classList.toggle('body--light');
	mainWrapper.classList.toggle('main--light');
	innerWrapper.classList.toggle('wrapper--light');
	titleChange.forEach((element) => element.classList.toggle('section-title--light'));
	portfolioBtn.forEach((element) => element.classList.toggle('portfolio__button--light'));
	sectionChangeButton.classList.toggle('header__bulb--moon');
	if (newWidth <= 768){
		headerListChange.classList.toggle('header__list--light')
		headerListLinkChange.forEach((element) => element.classList.toggle('header__link--light'));
		lineChange.forEach((element) => element.classList.toggle('line--light'));
		}
};

sectionChangeButton.addEventListener('click', changeSection);

sectionChangeButton.onclick = () => {
	if (event.target.classList.contains('header__bulb--moon')) {
		localStorage.setItem('theme', 'light');
		} else {
 		localStorage.setItem('theme', 'dark');
	}
};

window.addEventListener('load', () => {
	if (localStorage.getItem('theme') === 'light') {
		changeSection();
	} 
}
)

//scroll button modified
function scrollTo(to, duration = 700) {
	const
		element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date(),
		// t = current time
		// b = start value
		// c = change in value
		// d = duration
		easeInOutQuad = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		},
		animateScroll = function () {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
		// If scroll further than 599px, show button
		if (pageYOffset > 100) {
			btn.classList.add('show');
			// Else hide button
		} else {
			btn.classList.remove('show');
		}
	});

	// Onclick scroll to the top
	btn.onclick = function (click) {
		click.preventDefault();
		scrollTo(0, 400);
	}
});

//video player
const videoPlayer = document.querySelector('.video__player');
const videoPoster = videoPlayer.querySelector('.video__poster');
const videoScreen = videoPlayer.querySelector('.video__screen');
const videoButton = videoPlayer.querySelector('.video__button');
const videoControls = videoPlayer.querySelector('.video__controls');
const videoControlsIcon = videoControls.querySelectorAll('.video__controls-icon');
const videoProgress = videoControls.querySelector('.video__progress');
const videoVolume = videoControls.querySelector('.video__volume');
const currentVideoTime = videoControls.querySelector('.current');
const videoLength = videoControls.querySelector('.length');
let progressionVolume

function toggleVideo() {
	if (videoScreen.paused) {
		videoButton.style.display = 'none';
		videoPoster.style.display = 'none';
		videoScreen.play();
		videoControlsIcon[0].classList.remove('play--again');
		videoControlsIcon[0].classList.remove('play');
		videoControlsIcon[0].classList.add('pause');
	} else {
		videoScreen.pause();
		videoControlsIcon[0].classList.remove('play--again');
		videoControlsIcon[0].classList.add('play');
		videoControlsIcon[0].classList.remove('pause');
		videoButton.style.display = 'block';
	};
}

function updateProgress() {
	videoProgress.value = (videoScreen.currentTime / videoScreen.duration) * 100;
	const value = videoProgress.value;
	videoProgress.style.background = `linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`
}

function videoVolumeChange() {
	let volume = videoVolume.value;
	videoScreen.volume = volume / 100;
	videoVolume.style.background = `linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${volume}%, #d3d3d3 ${volume}%, #d3d3d3 100%)`;
	if (volume == 0) {
		videoControlsIcon[1].classList.add('mute');
		videoControlsIcon[1].classList.remove('volume-icon');
	} else {
		videoControlsIcon[1].classList.remove('mute');
		videoControlsIcon[1].classList.add('volume-icon');
	};
};

function videoFullScreen() {
	// console.dir(videoScreen);
	if (videoScreen.webkitSupportsFullscreen) {
		videoScreen.webkitEnterFullScreen();
	}
};

function getTimeCodeFromNum(num) {
	let seconds = parseInt(num);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	const hours = parseInt(minutes / 60);
	minutes -= hours * 60;

	if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
	return `${String(hours).padStart(2, 0)}:${minutes}:${String(
		seconds % 60
	).padStart(2, 0)}`;
}

function currentTimePlay() {
	currentVideoTime.textContent = getTimeCodeFromNum(
		videoScreen.currentTime);
}

videoVolumeChange()
progressionVolume = window.setInterval(videoVolumeChange, 20);

videoControlsIcon[0].addEventListener('click', toggleVideo);
videoButton.addEventListener('click', toggleVideo);
videoScreen.addEventListener('click', toggleVideo);
videoScreen.addEventListener('timeupdate', updateProgress);
videoProgress.addEventListener('input', () => {
	videoScreen.currentTime = (videoProgress.value * videoScreen.duration) / 100;
	updateProgress();
});
videoScreen.addEventListener('timeupdate', currentTimePlay);
videoVolume.addEventListener('change', videoVolumeChange);
videoControlsIcon[1].addEventListener('click', () => {
	if (videoControlsIcon[1].classList.contains('volume-icon')){
		videoControlsIcon[1].classList.remove('volume-icon');
		videoControlsIcon[1].classList.add('mute');
		videoVolume.value = 0;
	} else {
		videoControlsIcon[1].classList.remove('mute');
		videoControlsIcon[1].classList.add('volume-icon');
		videoVolume.value = 20;
	}
});
videoProgress.addEventListener('change', () => {
	videoScreen.currentTime = videoProgress.value / 100 * videoScreen.duration; 
});
videoControlsIcon[2].addEventListener('click', videoFullScreen);
videoScreen.addEventListener(
	"loadeddata",
	() => {
		videoLength.textContent = getTimeCodeFromNum(
			videoScreen.duration);
		});
videoScreen.addEventListener("ended", () => {
	videoControlsIcon[0].classList.remove('pause');
	videoControlsIcon[0].classList.add('play--again');
	});
//console

console.log(`
Ваша отметка - 70 балла(ов)
Отзыв по пунктам ТЗ:
Все пункты выполнены полностью!
`);