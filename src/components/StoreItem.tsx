import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { MyItem } from "../models/item"
import { formatCurrency } from "../utilities/formatCurrency"

interface StoreItemProps {
    item: MyItem
}

export function StoreItem({item}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(item.id)

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={item.img} width="100px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fw-bold">{item.name}</span>
                    <span>{formatCurrency(item.price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>+ Add to cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap: "0.5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: "0.5rem"}}>
                                <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(item.id)} variant="danger" size="sm">Remove</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}