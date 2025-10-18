import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import type { Phone } from '../../models';
import { getPhones } from '../../services/phoneService';

export const PhoneList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetchPhones();
  }, []);

  const fetchPhones = async () => {
    try {
      setLoading(true);
      setError(undefined);

      const data = await getPhones();
      setPhones(data.items);
      setTotal(data.total);
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="phone-list">
        <div className="loading">
          <h2>Loading phones...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="phone-list">
        <div className="error">
          <h2>Error loading phones</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="phone-list">
      <div className="phone-list-container">
        <div className="phones-grid">
          <p className="total-items">Total items: {total}</p>
          {phones.map(phone => (
            <div key={v4()} className="phone-card">
              <div className="phone-image">
                <img src={phone.imageUrl} alt={phone.name} />
              </div>
              <div className="phone-info">
                <div className="phone-info-brand-name">
                  <p className="phone-brand">{phone.brand}</p>
                  <p className="phone-name">{phone.name}</p>
                </div>
                <p className="phone-base-price">{phone.basePrice} EUR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
