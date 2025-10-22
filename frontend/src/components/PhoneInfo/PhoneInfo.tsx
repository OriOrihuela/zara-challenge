import type { PhoneDetail } from '../../models/phoneDetail';
import './PhoneInfo.scss';

interface PhoneInfoProps {
  phone: PhoneDetail;
  selectedColor: string;
  selectedStorage: string;
  // eslint-disable-next-line no-unused-vars
  onColorSelect: (color: string) => void;
  // eslint-disable-next-line no-unused-vars
  onStorageSelect: (storage: string) => void;
  onAddToCart: () => void;
}

export const PhoneInfo = ({
  phone,
  selectedColor,
  selectedStorage,
  onColorSelect,
  onStorageSelect,
  onAddToCart
}: PhoneInfoProps) => {
  const selectedStorageOption = phone.storageOptions.find(
    s => s.capacity === selectedStorage
  );
  const finalPrice = selectedStorageOption
    ? selectedStorageOption.price
    : phone.basePrice;

  const isAddToCartDisabled = !selectedStorage || !selectedColor;

  return (
    <section className="phone-info" aria-label="Phone information and options">
      <h1 className="phone-info__name">{phone.name}</h1>
      <span
        className="phone-info__price"
        aria-label={`Price: ${finalPrice} EUR`}
      >
        {finalPrice} EUR
      </span>

      {phone.storageOptions.length > 0 && (
        <fieldset className="phone-info__storage-options">
          <legend className="phone-info__storage-options__title">
            Storage, how much do you need?
          </legend>
          <div
            className="phone-info__storage-options__list"
            role="radiogroup"
            aria-label="Storage options"
          >
            {phone.storageOptions.map(storage => (
              <button
                key={storage.capacity}
                className={`phone-info__storage-options__btn ${
                  selectedStorage === storage.capacity ? 'active' : ''
                }`}
                onClick={() => onStorageSelect(storage.capacity)}
                aria-pressed={selectedStorage === storage.capacity}
                aria-label={`Select ${storage.capacity} storage`}
              >
                {storage.capacity}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {phone.colorOptions.length > 0 && (
        <fieldset className="phone-info__color-options">
          <legend className="phone-info__color-options__title">
            Colors, pick your favorite.
          </legend>
          <div
            className="phone-info__color-options__list"
            role="radiogroup"
            aria-label="Color options"
          >
            {phone.colorOptions.map(color => (
              <button
                key={color.name}
                className={`phone-info__color-options__btn ${
                  selectedColor === color.name ? 'active' : ''
                }`}
                onClick={() => onColorSelect(color.name)}
                style={{ backgroundColor: color.hexCode }}
                aria-pressed={selectedColor === color.name}
                aria-label={`Select ${color.name} color`}
                title={color.name}
              />
            ))}
          </div>
          <div
            className="phone-info__color-options__selected-color"
            aria-live="polite"
          >
            {selectedColor && <span className="sr-only">Selected color: </span>}
            {selectedColor}
          </div>
        </fieldset>
      )}

      <button
        className="phone-info__add-to-cart"
        onClick={onAddToCart}
        disabled={isAddToCartDisabled}
        aria-label={
          isAddToCartDisabled
            ? 'Please select storage and color before adding to cart'
            : `Add ${phone.name} to cart for ${finalPrice} EUR`
        }
      >
        Add to Cart
      </button>
    </section>
  );
};
