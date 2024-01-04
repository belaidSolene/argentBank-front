/**
 * The 'featuresIndex' array represents a collection of features displayed on the index page,
 * each associated with an icon, title, and content.
 *
 * @constant
 * @type {Array<Object>}
 * @property {Object} img - An object containing information about the associated icon.
 * @property {string} img.src - The source URL of the icon.
 * @property {string} img.alt - The alternative text for the icon.
 * @property {string} title - The title or heading of the feature.
 * @property {string} content - The detailed content or description of the feature.
 */

import ChatIcon from '../assets/icon-chat.png'
import MoneyIcon from '../assets/icon-money.png'
import SecurityIcon from '../assets/icon-security.png'

export const featuresIndex = [
	{
		img: {
			src: ChatIcon,
			alt: `Chat Icon`,
		},
		title: `You are our #1 priority`,
		content: `Need to talk to a
        representative? You can get in
        touch through our 24/7 chat or
        through a phone call in less
        than 5 minutes.`,
	},
	{
		img: {
			src: MoneyIcon,
			alt: `Money Icon`,
		},
		title: `More savings means higher rates`,
		content: `The more you save with us, the
        higher your interest rate will
        be!`,
	},
	{
		img: {
			src: SecurityIcon,
			alt: `Security Icon`,
		},
		title: `Security you can trust`,
		content: `We use top of the line
        encryption to make sure your
        data and money is always safe.`,
	},
]
