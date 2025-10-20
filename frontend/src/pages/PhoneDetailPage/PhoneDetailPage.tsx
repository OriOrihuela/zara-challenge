import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhoneImage } from '../../components/PhoneImage/PhoneImage';
import { PhoneInfo } from '../../components/PhoneInfo/PhoneInfo';
import { PhoneSpecs } from '../../components/PhoneSpecs/PhoneSpecs';
import { SimilarItems } from '../../components/SimilarItems/SimilarItems';
import type { PhoneDetail } from '../../models/phoneDetail';
import { getPhoneById } from '../../services/phoneService';
import './PhoneDetailPage.scss';

export const PhoneDetailPage = () => {
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

  return (
    <div className="phone-detail">
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
    </div>
  );
};
