import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhoneImage } from '../../components/PhoneImage/PhoneImage';
import { PhoneInfo } from '../../components/PhoneInfo/PhoneInfo';
import { PhoneSpecs } from '../../components/PhoneSpecs/PhoneSpecs';
import { SimilarItems } from '../../components/SimilarItems/SimilarItems';
import { useCart } from '../../hooks/useCart';
import type { PhoneDetail } from '../../models/phoneDetail';
import { getPhoneById } from '../../services/phoneService';
import './PhoneDetailPage.scss';

export const PhoneDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [phone, setPhone] = useState<PhoneDetail | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedStorage, setSelectedStorage] = useState<string>('');

  const fetchPhone = useCallback(async (phoneId: string) => {
    try {
      const phoneData = await getPhoneById(phoneId);
      setPhone(phoneData);
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
    if (phone && selectedColor && selectedStorage) {
      addToCart({
        phone,
        selectedColor,
        selectedStorage,
        quantity: 1
      });
    }
  };

  if (!phone) {
    return <></>;
  }

  const selectedColorOption =
    phone.colorOptions.find(c => c.name === selectedColor) ||
    phone.colorOptions[0];

  return (
    <main className="phone-detail" role="main" aria-label="Phone details">
      <div className="phone-detail__content">
        <PhoneImage
          imageUrl={selectedColorOption?.imageUrl}
          name={phone.name}
        />
        <PhoneInfo
          phone={phone}
          selectedColor={selectedColor}
          selectedStorage={selectedStorage}
          onColorSelect={setSelectedColor}
          onStorageSelect={setSelectedStorage}
          onAddToCart={handleAddToCart}
        />
      </div>
      <PhoneSpecs phone={phone} />
      <SimilarItems similarProducts={phone.similarProducts} />
    </main>
  );
};
