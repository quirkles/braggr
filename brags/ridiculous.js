const template = 'I $actioned a $noun $inPlace while $scenario'

const actioned = [
    'made love to',
    'fought',
    'licked every inch of',
	'performed ally theatre for',
	'carefully groomed',
	'fiercely protected',
	'entirely consumed'
]

const noun = [
	'beautiful ombudsman',
	'fearsome dragon',
	'reanimated corpse',
	'group of obsequious fuckwits',
	'pro gamer',
	'chess grand-master',
	'perfect comorant',
	'pound of the rarest caviar'
]

const inPlace = [
	'amongst the dust of shattered empires',
	'in a filthy arby\'s bathroom',
	'in a trump tower penthouse',
	'on the internet',
	'at the very gates of hell',
	'on the edge of a precipice',
	'in the bowels of a vast battleship'
]

const scenario = [
	'men who wished me dead cowered in fear',
	'onlookers cheered my every action',
	'nuclear bombs exploded all around',
	'morons applauded my noble efforts',
	'the queen of england wept tears of joy',
	'the ghost of gnghis khan howled curses into the dying night'
]

module.exports = {
    template,
	lists: { actioned, noun, inPlace, scenario }
}