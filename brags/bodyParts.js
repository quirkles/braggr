const template = 'I have $qualifier $adjective $bodyPart due to $reason'

const qualifier = [
 'an unusually',
 'a relentlessly',
 'a savagely',
 'a frighteningly',
 'a despairingly',
 'a maddeningly',
 'a tediously',
 'an incompehensibly'
]

const adjective = [
	'dense',
	'turgid',
	'flaccid',
	'bulbous',
	'rancid',
	'chapped',
	'dysfunctional',
	'disjointed',
	'non-euclidian',
	'impossible',
	'flexible'
]

const bodyPart = [
	'set of wisdom teeth',
	'set of tonsils',
	'member',
	'penis',
	'johnson',
	'dong',
	'sausage',
	'meat and two veg',
	'twig and two berries',
	'pork sword',
	'webbing between my fingers'
]

const reason = [
	'my paleolithic bone structure',
	'my gene-splicing with a coyote',
	'my ritual bathing in virgin blood',
	'a lost bet',
	'a witches curse',
	'my wild and reckless youth',
	'a botched operation'
]

module.exports = {
    template,
	lists: { qualifier, adjective, bodyPart, reason }
}