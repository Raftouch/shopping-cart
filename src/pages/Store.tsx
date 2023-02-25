import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { items } from "../data/items"

export function Store() {
   
    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-5 m-auto">
                {items.map(item => (
                    <Col key={item.id}>
                        <StoreItem item={item}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}