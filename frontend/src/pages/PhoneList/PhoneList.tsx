import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useSearch } from '../../hooks/useSearch';
import type { Phone } from '../../models';
import { getPhones } from '../../services/phoneService';

export const PhoneList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);

  const { searchState, setLoading } = useSearch();

  useEffect(() => {
    const fetchPhones = async (search: string = '') => {
      try {
        setLoading(true);
        setError(undefined);

        const data = await getPhones(search);
        setPhones(data.items);
        setTotal(data.total);
      } catch (error: unknown) {
        setError(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred'
        );
      } finally {
        setLoading(false);
      }
    };

    if (searchState.searchTerm) {
      fetchPhones(searchState.searchTerm);
    } else {
      fetchPhones();
    }
  }, [searchState.searchTerm, setLoading]);

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
          <p className="total-items">{total} Results</p>
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
