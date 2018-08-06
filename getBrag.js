import { zip, flatten } from 'ramda'

const ridiculousActions = [
	'made love to'
]

const ridiculousNouns = [
	'beautiful woman'
]

const ridiculousPlace = [
	'amongst the dust of shattered empires'
]

const ridiculousExaggeration = [
	'men who wished me dead cowered in fear'
]

const featVerbs = [
	'pick up'
]

const featNouns = [
	'raw steel'
]

const bodyPartAdjectives = [
	'unusually dense'
]

const bodyParts = [
	'wisdom teeth'
]

const bodyPartAbsurdCircumstances = [
	'my paleolithic bone structure'
]

const pickupVerbeds = [
	'flirted'
]
const pickupAdverbs = [
	'incessantly'
]
const pickupDurations = [
	'seven days and seven nights'
]
const pickupAdjectives = [
	'busty'
]
const pickupSynonyms = [
	'waitress'
]

const authorityFigureActions = ['hospiltalized']
const authorityFigures = ['police officer']
const authorityFigureMitigatingCircumstances = ['because I razed their cities to dust']

const bragTypes = [
	{
		template: 'I $1 a $2 $3 while $4.',
		lists: [ridiculousActions, ridiculousNouns, ridiculousPlace, ridiculousExaggeration]
	},
	{
		template: 'No one can $1 as much $2 as I am able to.',
		lists: [featVerbs, featNouns]
	},
	{
		template: 'I have $1 $2 due to $3.',
		lists: [bodyPartAdjectives, bodyParts, bodyPartAbsurdCircumstances]
	},
	{
		template: 'I once $1 $2 for $3 to seduce a $4 $5.',
		lists: [pickupVerbeds, pickupAdverbs, pickupDurations, pickupAdjectives, pickupSynonyms]
	},
	{
		template: 'I once $1 a $2 and got away with it $3.',
		lists: [authorityFigureActions, authorityFigures, authorityFigureMitigatingCircumstances]
	},
]

const getRandomElement = list => list[Math.floor(Math.random()*list.length)]



const getBrag = () => {
	const bragType = getRandomElement(bragTypes)
	const { lists } = bragType
	return bragType.template.split(' ').map(word => word.charAt(0) === '$' ?
		getRandomElement(lists[Number(word.charAt(1)) - 1]) :
		word
	).join(' ')
}

export default getBrag