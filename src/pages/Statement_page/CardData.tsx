// @ts-ignore
import Card1 from '../../assets/Group.jpg';

type CardType = {
    title: string,
    image: string,
    description: string

}[]
const CardData: CardType = [
    { title: 'Balance Sheet', image: Card1, description: `Balance sheet refers to a financial statement that reports a company's assets, liabilities, and shareholder equity at a specific point in time` },
    { title: 'Income Statement', image: Card1, description: 'An income statement is a financial statement that shows you the company’s income and expenditures.' },
    { title: 'Statement of Cash flow', image: Card1, description: 'A Statement of Cash Flow is an accounting document that tracks the incoming and outgoing cash and cash equivalents from a business.' },
]

export default CardData