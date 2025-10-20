import type { PhoneDetail } from '../../models/phoneDetail';
import './PhoneInfo.scss';

interface PhoneInfoProps {
  phone: PhoneDetail;
  selectedColor: string;
  selectedStorage: string;
  onColorSelect: (color: string) => void;
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

  return (
    <div className="phone-info">
      <h1 className="phone-info__name">{phone.name}</h1>
      <span className="phone-info__price">{finalPrice} EUR</span>

      {phone.storageOptions.length > 0 && (
        <div className="phone-info__storage-options">
          <h3 className="phone-info__storage-options__title">
            Storage, how much do you need?
          </h3>
          <div className="phone-info__storage-options__list">
            {phone.storageOptions.map(storage => (
              <button
                key={storage.capacity}
                className={`phone-info__storage-options__btn ${
                  selectedStorage === storage.capacity ? 'active' : ''
                }`}
                onClick={() => onStorageSelect(storage.capacity)}
              >
                {storage.capacity}
              </button>
            ))}
          </div>
        </div>
      )}

      {phone.colorOptions.length > 0 && (
        <div className="phone-info__color-options">
          <h3 className="phone-info__color-options__title">
            Colors, pick your favorite.
          </h3>
          <div className="phone-info__color-options__list">
            {phone.colorOptions.map(color => (
              <button
                key={color.name}
                className={`phone-info__color-options__btn ${
                  selectedColor === color.name ? 'active' : ''
                }`}
                onClick={() => onColorSelect(color.name)}
                style={{ backgroundColor: color.hexCode }}
                title={color.name}
              />
            ))}
          </div>
          <div className="phone-info__color-options__selected-color">
            {selectedColor}
          </div>
        </div>
      )}

      <button className="phone-info__add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};
