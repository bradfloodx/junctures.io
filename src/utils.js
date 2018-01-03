import moment from "moment";
import 'moment-precise-range-plugin';

export function displayDistance(date, time) {
	const dateParts = date.split('-');
	const timeParts = time.split(':');

	const dateTimeParts = {
		year: dateParts[0],
		month: dateParts[1] - 1, // Month must be zero-indexed
		day: dateParts[2],
		hour: timeParts[0],
		minute: timeParts[1]
	};

	const momentDateTime = moment(dateTimeParts);
	const currentDateTime = moment();
	const difference = moment.preciseDiff(momentDateTime, currentDateTime, true);

	let distance = '';
	distance += difference.years ? `${difference.years} years, ` : '';
	distance += difference.months ? `${difference.months} months, ` : '';
	distance += difference.days ? `${difference.days} days ` : '';
	distance += difference.hours ? `${difference.hours} hours ` : '';
	distance += difference.minutes ? `${difference.minutes} minutes` : '';

	return distance
}
