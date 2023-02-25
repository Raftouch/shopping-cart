import { Card } from "react-bootstrap"
import { MyItem } from "../models/item"

interface StoreItemProps {
    item: MyItem
}

export function StoreItem({item}: StoreItemProps) {
    return (
        <Card>
            <Card.Img variant="top" src={item.img} width="100px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fw-bold">{item.name}</span>
                    <span>{`€ ${item.price}`}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}