import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

const OrderSummary = ({amount, totalPrice, onSubmit}:Props) => {
    return (
        <div className="orderSummary-container">
            <div className="orderSummary-content">
                <div className="orderSummary-title">
                    <p><strong> {amount} </strong> Pedidos Selecionados</p>
                    <p><strong> {formatPrice(totalPrice)} </strong> Valor Total</p>
                </div>
                <button
                  onClick={onSubmit}
                >
                    Fazer Pedido
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;