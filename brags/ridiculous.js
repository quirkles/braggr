const template = 'I $actioned a $noun $inPlace while $scenario'

const actioned = [
    'made love to',
    'fought',
    'licked every inch of',
    'performed ally theatre for'
]

const noun = [
	'beautiful woman',
	'fearsome dragon',
	'reanimated corpse',
	'group of obsequious fuckwits'
]

const inPlace = [
	'amongst the dust of shattered empires',
	'in a filthy arby\'s bathroom',
	'in a trump tower penthouse',
	'on the internet'
]

const scenario = [
	'men who wished me dead cowered in fear',
	'onlookers cheered my every action',
	'nuclear bombs exploded all around',
	'morons applauded my noble efforts'
]

module.exports = {
    template,
	lists: { actioned, noun, inPlace, scenario }
}