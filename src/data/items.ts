import { MyItem } from "../models/item"
import steveJobs from "../images/steveJobs.jpg"
import mandela from "../images/mandela.jpg"
import diana from "../images/diana.jpg"
import gandhi from "../images/gandhi.jpg"

export const items: MyItem[] = [
    {
        id: 1,
        name: "Steve Jobs",
        price: 10.95,
        img: steveJobs
    },
    {
        id: 2,
        name: "Nelson Mandela",
        price: 8.45,
        img: mandela
    },
    {
        id: 3,
        name: "Diana",
        price: 9.95,
        img: diana
    },
    {
        id: 4,
        name: "Gandhi",
        price: 11.95,
        img: gandhi
    }
]

