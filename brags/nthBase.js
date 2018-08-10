const template = 'I was up all night $communicationMethod about $pretentiousSubject . Or, as we $membership call it: $ordinal base'

const communicationMethod = [
	'texting',
	'communicating via morse code',
	'sending messenger pidgeons',
	'hollering',
	'bellowing',
	'growling in a death metal voice',
	'whispering',
	'sending smoke signals',
	'exchanging monographs',
	'snapchatting',
	'signalling via semaphore'
]
const pretentiousSubject = [
	'Bryant Neal Vinas',
	'the Long Island Rail Road',
	'previous Prime Ministers of São Tomé and Príncipe',
	'1970 in India',
	'Linden Hall, Longhorsley, England',
	'the Rare Paul Gonsalves Sextet in Europe',
	'Turbo funiculosus',
	'Floyd K. Richtmyer',
	'the Journal of the Optical Society of America',
	'Eurocode 4: Design of composite steel and concrete structures',
	'Transformers: Alternity',
	'equipment service management and rental',
	'supply chain management',
	'the Reichszentrale zur Bekämpfung der Homosexualität und der Abtreibung',
	'the Women\'s and Gender Education Center (Eastern Washington University)',
	'the Kuldevi Temples of the Kutch Gurjar Kshatriya community in Gujarat',
	'1935–36 NCAA football bowl games',
	'the Aegon Life Insurance Company'
]
const membership = [
	'yacht clubbers',
	'masons',
	'southerners',
	'scientologists',
	'diabetics',
	'neurotypicals',
	'paranoid schizophrenics',
	'alien abduction survivors',
	'patriarchs',
	'incels',
	'leftbookers',
	'mormons',
	'catholics'
]
const ordinal = [
	'first', 'second', 'third', 'fourth', 'fifth'
]

module.exports = {
	template,
	lists: { communicationMethod, pretentiousSubject, membership, ordinal }
}