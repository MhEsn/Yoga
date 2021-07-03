/* eslint-disable */
const tools = {
	color: {
		lighten: (color, percent) => {
			return shadeColor(color, Math.abs(percent));
		},
		darken: (color, percent) => {
			return shadeColor(color, Math.abs(percent) * -1);
		},
		mixer: colorMixer
	},
	isAuthenticated: isAuthenticated,
	validate: {
		phoneNumber: validatePhoneNumber,
	},
	alert: {
		show: alertMessage,
		error: alertError,
		confirm: confirm,
	},
	dateTime: {
		secondsToString: secondsToString,
	},
	convert: {
		srtToJson: srtToJson,
		dateToJalali: dateToJalali,
		jalaliToDate: jalaliToDate
	},
	placeholderImage: placeholderImage,
	compareStrings: compareStrings,
	groupBy: groupBy,
	shuffle: shuffle,
	getOS: getOS,
	Sound: Sound
};

// https://gist.github.com/renancouto/4675192
function shadeColor(color, percent) {
	var num = parseInt(color.replace('#', ''), 16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) + amt,
		B = ((num >> 8) & 0x00ff) + amt,
		G = (num & 0x0000ff) + amt;

	return (
		'#' +
		(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 + (G < 255 ? (G < 1 ? 0 : G) : 255))
			.toString(16)
			.slice(1)
	);
}
function isAuthenticated() {
	return !!localStorage.authorizationData;
}
function srtToJson(data) {
	let lines = data.split('\n');

	let output = [];
	let buffer = {
		text: []
	};

	lines.forEach((line) => {
		if (!buffer.id)
			buffer.id = line;
		else if (buffer.start === undefined) {
			var range = line.split(' --> ');
			buffer.start = timeStringToSeconds(range[0]);
			buffer.end = timeStringToSeconds(range[1]);
		}
		else if (line.trim() !== '')
			buffer.text.push(line);
		else {
			buffer.text = buffer.text.join('\n');
			output.push(buffer);
			buffer = {
				text: []
			};
		}
	});

	output.push(buffer);
	return output;

	function timeStringToSeconds(input) {
		input = input.split(':');

		let hours = parseInt(input[0]);
		let minutes = parseInt(input[1]);
		let seconds = parseFloat(input[2].split(',').join('.'));

		return (hours * 60 * 60) + (minutes * 60) + seconds;
	}
}
function compareStrings(input1, input2) {
	let regex = /[.,'’!?\s]/g;
	input1 = input1 || '';
	input2 = input2 || '';

	input1 = replaceExceptions(input1);
	input2 = replaceExceptions(input2);

	return input1.replace(regex, '').toLowerCase() === input2.replace(regex, '').toLowerCase();

	function replaceExceptions(text) {
		return text.split(' ').map((item) => {
			item = item.replace(regex, '').toLowerCase();
			if (item === "mum")
				item = "mom";
			else if (item === "mums")
				item = "moms";
			else if (item === "license")
				item = "licence";
			else if (item === "licenses")
				item = "licences";
			else if (item === "colour")
				item = "color";
			else if (item === "colours")
				item = "colors";

			return item;
		}).join(' ');
	}
}
function groupBy(input, keys) {
	let result = [],
		isNew;

	if (input) {
		for (var i = 0; i < input.length; i++) {
			isNew = false;

			for (var j = 0; j < result.length; j++) {
				let allKeysMatch = true;
				for (var k = 0; k < keys.length; k++) {
					if (input[i][keys[k]] !== result[j][keys[k]]) {
						allKeysMatch = false;
					}
				}
				if (allKeysMatch) {
					isNew = true;
					result[j].items.push(input[i]);
				}
			}

			if (!isNew) {
				result[j] = { items: [input[i]] };
				for (var r = 0; r < keys.length; r++) {
					result[j][keys[r]] = input[i][keys[r]];
				}
			}
		}
	}

	return result;
}
function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}
function validatePhoneNumber(number) {
	if (!number || (number && (number.length !== 11 || number[0] !== '0'))) {
		return false;
	} else {
		return true;
	}
}
function alertMessage(message, title) {
	alert(`${title ? `${title}: ` : ''}${message}`);
}
function alertError(message) {
	alertMessage(message, 'خطا');
}
function confirm(message, onConfirm, onReject) {
	onConfirm = onConfirm || function () { };
	onReject = onReject || function () { };

	if (confirm(message))
		onConfirm();
	else
		onReject();
}
function secondsToString(value) {
	if (!value) {
		return '00:00';
	}

	let minutes = Math.floor(value / 60);
	let seconds = Math.round(value % 60);

	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	return `${minutes}:${seconds}`;
}
function placeholderImage() {
	return 'data:image/png;base64,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';
}
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
function colorMixer(rgbA, rgbB, amountToMix) {
	var r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
	var g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
	var b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);
	return "rgb(" + r + "," + g + "," + b + ")";

	//colorChannelA and colorChannelB are ints ranging from 0 to 255
	function colorChannelMixer(colorChannelA, colorChannelB, amountToMix) {
		var channelA = colorChannelA * amountToMix;
		var channelB = colorChannelB * (1 - amountToMix);
		return parseInt(channelA + channelB);
	}
}
function dateToJalali(date) {
	if (date && date instanceof Date && typeof date.getMonth === "function") {
		return convertToJalali(date);
	} else if (date && typeof date === "string") {
		let dateObject = new Date(date);
		if (dateObject instanceof Date && !isNaN(dateObject))
			return convertToJalali(dateObject);
		else return "";
	} else return "";

	function convertToJalali(date) {
		let jalali = gregorianToJalali(
			date.getFullYear(),
			date.getMonth() + 1,
			date.getDate()
		);

		return (
			jalali[0] + "/" + doubleDigit(jalali[1]) + "/" + doubleDigit(jalali[2])
		);
	}
	function doubleDigit(digit) {
		digit = digit.toString();

		if (digit.length < 2 && digit < 10) return "0" + digit;
		else return digit;
	}
}
function jalaliToDate(jalali) {
	let date;

	jalali = jalali.split("/");
	date = toGregorian(
		parseInt(jalali[0]),
		parseInt(jalali[1]),
		parseInt(jalali[2])
	);

	return new Date(date.gy, date.gm - 1, date.gd);
}
function gregorianToJalali(a, r, s) {
	var g_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		j_days = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
	(a = parseInt(a)), (r = parseInt(r)), (s = parseInt(s));
	for (
		var n = a - 1600,
		e = r - 1,
		t = s - 1,
		p =
			365 * n +
			parseInt((n + 3) / 4) -
			parseInt((n + 99) / 100) +
			parseInt((n + 399) / 400),
		I = 0;
		e > I;
		++I
	)
		p += g_days[I];
	e > 1 && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) && ++p, (p += t);
	var v = p - 79,
		d = parseInt(v / 12053);
	v %= 12053;
	var o = 979 + 33 * d + 4 * parseInt(v / 1461);
	(v %= 1461),
		v >= 366 && ((o += parseInt((v - 1) / 365)), (v = (v - 1) % 365));
	for (var I = 0; 11 > I && v >= j_days[I]; ++I) v -= j_days[I];
	var y = I + 1,
		_ = v + 1;
	return [o, y, _];
}
function toJalaali(d, i, a) {
	return d2j(g2d(d, i, a));
}
function toGregorian(d, i, a) {
	return d2g(j2d(d, i, a));
}
function isValidJalaaliDate(d, i, a) {
	return (
		d >= -61 &&
		3177 >= d &&
		i >= 1 &&
		12 >= i &&
		a >= 1 &&
		a <= jalaaliMonthLength(d, i)
	);
}
function isLeapJalaaliYear(d) {
	return 0 === jalCal(d).leap;
}
function jalaaliMonthLength(d, i) {
	return 6 >= i ? 31 : 11 >= i ? 30 : isLeapJalaaliYear(d) ? 30 : 29;
}
function jalCal(d) {
	var i,
		a,
		n,
		r,
		t,
		o,
		v,
		e = [
			-61,
			9,
			38,
			199,
			426,
			686,
			756,
			818,
			1111,
			1181,
			1210,
			1635,
			2060,
			2097,
			2192,
			2262,
			2324,
			2394,
			2456,
			3178
		],
		l = e.length,
		u = d + 621,
		m = -14,
		g = e[0];
	if (g > d || d >= e[l - 1]) throw new Error("Invalid Jalaali year " + d);
	for (v = 1; l > v && ((i = e[v]), (a = i - g), !(i > d)); v += 1)
		(m = m + 8 * div(a, 33) + div(mod(a, 33), 4)), (g = i);
	return (
		(o = d - g),
		(m = m + 8 * div(o, 33) + div(mod(o, 33) + 3, 4)),
		4 === mod(a, 33) && a - o === 4 && (m += 1),
		(r = div(u, 4) - div(3 * (div(u, 100) + 1), 4) - 150),
		(t = 20 + m - r),
		6 > a - o && (o = o - a + 33 * div(a + 4, 33)),
		(n = mod(mod(o + 1, 33) - 1, 4)),
		-1 === n && (n = 4),
		{ leap: n, gy: u, march: t }
	);
}
function j2d(d, i, a) {
	var n = jalCal(d);
	return g2d(n.gy, 3, n.march) + 31 * (i - 1) - div(i, 7) * (i - 7) + a - 1;
}
function d2j(d) {
	var i,
		a,
		n,
		r = d2g(d).gy,
		t = r - 621,
		o = jalCal(t),
		v = g2d(r, 3, o.march);
	if (((n = d - v), n >= 0)) {
		if (185 >= n)
			return (
				(a = 1 + div(n, 31)), (i = mod(n, 31) + 1), { jy: t, jm: a, jd: i }
			);
		n -= 186;
	} else (t -= 1), (n += 179), 1 === o.leap && (n += 1);
	return (a = 7 + div(n, 30)), (i = mod(n, 30) + 1), { jy: t, jm: a, jd: i };
}
function g2d(d, i, a) {
	var n =
		div(1461 * (d + div(i - 8, 6) + 100100), 4) +
		div(153 * mod(i + 9, 12) + 2, 5) +
		a -
		34840408;
	return (n = n - div(3 * div(d + 100100 + div(i - 8, 6), 100), 4) + 752);
}
function d2g(d) {
	var i, a, n, r, t;
	return (
		(i = 4 * d + 139361631),
		(i = i + 4 * div(3 * div(4 * d + 183187720, 146097), 4) - 3908),
		(a = 5 * div(mod(i, 1461), 4) + 308),
		(n = div(mod(a, 153), 5) + 1),
		(r = mod(div(a, 153), 12) + 1),
		(t = div(i, 1461) - 100100 + div(8 - r, 6)),
		{ gy: t, gm: r, gd: n }
	);
}
function div(d, i) {
	return ~~(d / i);
}
function mod(d, i) {
	return d - ~~(d / i) * i;
}
function getOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}
function Sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function () {
		this.sound.play();
	}
	this.stop = function () {
		this.sound.pause();
	}
}

export default tools;
