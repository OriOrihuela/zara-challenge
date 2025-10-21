import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './CartPage.scss';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartState, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h1 className="cart-page__title">CART ({cartState.items.length})</h1>
      </div>

      <div className="cart-page__items">
        {cartState.items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item__image">
              <img
                src={
                  item.phone.colorOptions.find(
                    c => c.name === item.selectedColor
                  )?.imageUrl || item.phone.colorOptions[0]?.imageUrl
                }
                alt={item.phone.name}
              />
            </div>

            <div className="cart-item__details">
              <h3 className="cart-item__name">{item.phone.name}</h3>
              <p className="cart-item__specs">
                {item.selectedStorage} | {item.selectedColor}
              </p>
              <p className="cart-item__price">{item.price} EUR</p>
              <button
                className="cart-item__remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-page__footer">
        <button
          className="cart-page__continue-btn"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>

        {cartState.items.length > 0 && (
          <div className="cart-page__checkout">
            <div className="cart-page__total">TOTAL {cartState.total} EUR</div>
            <button className="cart-page__pay-btn">PAY</button>
          </div>
        )}
      </div>
    </div>
  );
};
