type Props = {
    amount: number;
    totalPrice: number;
}

const OrderSummary = ({amount, totalPrice}:Props) => {
    return (
        <div className="orderSummary-container">
            <div className="orderSummary-content">
                <div className="orderSummary-title">
                    <p><strong> {amount} </strong> Pedidos Selecionados</p>
                    <p><strong> {totalPrice} </strong> Valor Total</p>
                </div>
                <button>fazer pedido</button>
            </div>
        </div>
    );
}

export default OrderSummary;