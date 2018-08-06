import { authority, bodyParts, pickup, ridiculous }  from './brags'

const bragTypes = [
	authority,
	bodyParts,
	pickup,
	ridiculous
]

const getRandomElement = list => list[Math.floor(Math.random()*list.length)]



const getBrag = () => {
	const bragType = getRandomElement(bragTypes)
	const { lists } = bragType
	return bragType.template.split(' ').map(
		word => word.charAt(0) === '$' ?
			getRandomElement(lists[word.substring(1)]) :
			word
		).join(' ').concat('.')
}

export default getBrag