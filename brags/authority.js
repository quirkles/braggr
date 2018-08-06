const template = 'I once $actioned a $kindOfPerson and got away with it because $reason'

const actioned = [
	'hospitalized',
	'murked',
	'ethered',
	'cold-cocked',
	'donkey punched',
	'slapped',
	'peed on',
	'humiliated',
	'threw my own excrement at'
]

const kindOfPerson = [
	'police officer',
	'postman',
	'mayor',
	'congressman',
	'tax collector',
	'jehova\'s witness',
	'mormon',
	'catholic priest',
	'pinkerton',
	'mob boss'
]

const reason = [
	'I razed their cities to dust',
	'I am the night',
	'I\'m elon musk',
	'I defeated them in a dance contest',
	'I possess a catlike agility',
	'my wang is absolutely massive',
	'nobody has seen my face and lived',
	'they were enamoured by my glans',
	'they were blinded by my taint',
	'my anus is pristine'
]

export default {
	template,
	lists: { actioned, kindOfPerson, reason }
}