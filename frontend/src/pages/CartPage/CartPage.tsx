import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './CartPage.scss';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartState, removeFromCart } = useCart();

  return (
    <main className="cart-page" role="main" aria-label="Shopping cart">
      <header className="cart-page__header">
        <h1 className="cart-page__title">
          CART ({cartState.items.length})
          <span className="sr-only">
            {cartState.items.length === 0
              ? 'Your cart is empty'
              : `${cartState.items.length} items in your cart`}
          </span>
        </h1>
      </header>

      <section className="cart-page__items" aria-label="Cart items">
        {cartState.items.map(item => (
          <article key={item.id} className="cart-item" role="listitem">
            <div className="cart-item__image">
              <img
                src={
                  item.phone.colorOptions.find(
                    c => c.name === item.selectedColor
                  )?.imageUrl || item.phone.colorOptions[0]?.imageUrl
                }
                alt={`${item.phone.name} in ${item.selectedColor}`}
              />
            </div>

            <div className="cart-item__details">
              <h3 className="cart-item__name">{item.phone.name}</h3>
              <p className="cart-item__specs">
                {item.selectedStorage} | {item.selectedColor}
              </p>
              <p
                className="cart-item__price"
                aria-label={`Price: ${item.price} EUR`}
              >
                {item.price} EUR
              </p>
              <button
                className="cart-item__remove"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.phone.name} from cart`}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </section>

      <footer className="cart-page__footer" role="contentinfo">
        <div className="cart-page__checkout cart-page__checkout--desktop">
          <button
            className="cart-page__continue-btn"
            onClick={() => navigate('/')}
            aria-label="Continue shopping and return to phone catalog"
          >
            Continue Shopping
          </button>
          {cartState.items.length > 0 && (
            <div className="cart-page__total">
              <span aria-label={`Total amount: ${cartState.total} EUR`}>
                Total {cartState.total} eur
              </span>
              <button
                className="cart-page__pay-btn"
                aria-label={`Pay ${cartState.total} EUR for ${cartState.items.length} items`}
              >
                Pay
              </button>
            </div>
          )}
        </div>

        <div className="cart-page__checkout cart-page__checkout--mobile">
          {cartState.items.length > 0 && (
            <div className="cart-page__total">
              <span>TOTAL</span>
              <span aria-label={`Total amount: ${cartState.total} EUR`}>
                {cartState.total} EUR
              </span>
            </div>
          )}
          <div className="cart-page__buttons">
            <button
              className="cart-page__continue-btn"
              onClick={() => navigate('/')}
              aria-label="Continue shopping and return to phone catalog"
            >
              Continue Shopping
            </button>
            {cartState.items.length > 0 && (
              <button
                className="cart-page__pay-btn"
                aria-label={`Pay ${cartState.total} EUR for ${cartState.items.length} items`}
              >
                PAY
              </button>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
};
