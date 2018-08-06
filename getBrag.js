import { zip, flatten } from 'ramda'

import { ridiculousActions, ridiculousNouns, ridiculousPlace, ridiculousExaggeration} from './content/ridiculous'
import { bodyPartLys, bodyParts, bodyPartAdjectives, bodyPartAbsurdCircumstances } from './content/bodyParts'
import { pickupVerbeds, pickupAdverbs, pickupDurations, pickupAdjectives, pickupSynonyms } from './content/pickup'
import { authorityFigures, authorityFigureActions, authorityFigureMitigatingCircumstances }  from './content/authority'

const bragTypes = [
	{
		template: 'I $1 a $2 $3 while $4.',
		lists: [ridiculousActions, ridiculousNouns, ridiculousPlace, ridiculousExaggeration]
	},
	{
		template: 'I have $1 $2 $3 due to $4.',
		lists: [bodyPartLys, bodyPartAdjectives, bodyParts, bodyPartAbsurdCircumstances]
	},
	{
		template: 'I $1 $2 $3 to seduce a $4 $5.',
		lists: [pickupVerbeds, pickupAdverbs, pickupDurations, pickupAdjectives, pickupSynonyms]
	},
	{
		template: 'I once $1 a $2 and got away with it because $3.',
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