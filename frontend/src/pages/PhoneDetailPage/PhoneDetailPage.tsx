import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import type { PhoneDetail } from '../../models/phoneDetail';
import { getPhoneById } from '../../services/phoneService';
import './PhoneDetailPage.scss';

export const PhoneDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [phone, setPhone] = useState<PhoneDetail | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedStorage, setSelectedStorage] = useState<string>('');

  const fetchPhone = useCallback(async (phoneId: string) => {
    try {
      const phoneData = await getPhoneById(phoneId);
      setPhone(phoneData);

      if (phoneData.colorOptions.length > 0) {
        setSelectedColor(phoneData.colorOptions[0].name);
      }
      if (phoneData.storageOptions.length > 0) {
        setSelectedStorage(phoneData.storageOptions[0].capacity);
      }
    } catch {
      // TODO: Handle error.
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchPhone(id);
    }
  }, [id, fetchPhone]);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', { phone, selectedColor, selectedStorage });
  };

  if (!phone) {
    return <></>;
  }

  const selectedColorOption = phone.colorOptions.find(
    c => c.name === selectedColor
  );
  const selectedStorageOption = phone.storageOptions.find(
    s => s.capacity === selectedStorage
  );
  const finalPrice = selectedStorageOption
    ? selectedStorageOption.price
    : phone.basePrice;

  return (
    <div className="phone-detail">
      <div className="phone-detail__content">
        <div className="phone-detail__main-image">
          <img src={selectedColorOption?.imageUrl} alt={phone.name} />
        </div>
        <div className="phone-detail__info-section">
          <h1 className="phone-detail__name">{phone.name}</h1>
          <span className="phone-detail__price-amount">{finalPrice} EUR</span>
          {phone.storageOptions.length && (
            <div className="phone-detail__storage-options">
              <h3 className="phone-detail__storage-options__title">
                Storage, how much do you need?
              </h3>
              <div className="phone-detail__storage-options__list">
                {phone.storageOptions.map(storage => (
                  <button
                    key={storage.capacity}
                    className={`phone-detail__storage-options__btn ${selectedStorage === storage.capacity ? ' active' : ''}`}
                    onClick={() => setSelectedStorage(storage.capacity)}
                  >
                    {storage.capacity}
                  </button>
                ))}
              </div>
            </div>
          )}
          {phone.colorOptions.length && (
            <div className="phone-detail__color-options">
              <h3 className="phone-detail__color-options__title">
                Colors, pick your favorite.
              </h3>
              <div className="phone-detail__color-options__list">
                {phone.colorOptions.map(color => (
                  <button
                    key={color.name}
                    className={`phone-detail__color-options__btn ${selectedColor === color.name ? ' active' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hexCode }}
                    title={color.name}
                  />
                ))}
              </div>
              <div className="phone-detail__color-options__selected-color">
                {selectedColor}
              </div>
            </div>
          )}
          <button
            className="phone-detail__add-to-cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="phone-detail__specs">
        <h2 className="phone-detail__specs__title">Specifications</h2>
        <div className="phone-detail__specs-grid">
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Screen</span>
            <span className="phone-detail__spec-value">
              {phone.specs.screen}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Resolution</span>
            <span className="phone-detail__spec-value">
              {phone.specs.resolution}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Processor</span>
            <span className="phone-detail__spec-value">
              {phone.specs.processor}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Main Camera</span>
            <span className="phone-detail__spec-value">
              {phone.specs.mainCamera}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Selfie Camera</span>
            <span className="phone-detail__spec-value">
              {phone.specs.selfieCamera}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Battery</span>
            <span className="phone-detail__spec-value">
              {phone.specs.battery}
            </span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">OS</span>
            <span className="phone-detail__spec-value">{phone.specs.os}</span>
          </div>
          <div className="phone-detail__spec-item">
            <span className="phone-detail__spec-label">Refresh Rate</span>
            <span className="phone-detail__spec-value">
              {phone.specs.screenRefreshRate}
            </span>
          </div>
        </div>
      </div>
      {phone.similarProducts.length && (
        <div className="phone-detail__similar">
          <h2 className="phone-detail__similar__title">Similar items</h2>
          <div className="phone-detail__similar-grid">
            {phone.similarProducts.map(similarPhone => (
              <div
                key={v4()}
                className="phone-detail__similar-card"
                onClick={() => navigate(`/${similarPhone.id}`)}
              >
                <img src={similarPhone.imageUrl} alt={similarPhone.name} />
                <div className="phone-detail__similar-info">
                  <div className="phone-detail__similar-brand">
                    {similarPhone.brand}
                  </div>
                  <div className="phone-detail__similar-name">
                    {similarPhone.name}
                  </div>
                  <div className="phone-detail__similar-price">
                    {similarPhone.basePrice} EUR
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
