import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useSearch } from '../../hooks/useSearch';
import type { Phone } from '../../models';
import { getPhones } from '../../services/phoneService';
import './PhoneList.scss';

export const PhoneList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const { searchState, setLoading, setTotal } = useSearch();

  const fetchPhones = useCallback(
    async (search: string = '') => {
      try {
        setLoading(true);

        const data = await getPhones(search);
        setPhones(data.items);
        setTotal(data.total);
      } catch {
        // TODO: Handle error.
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setTotal]
  );

  useEffect(() => {
    if (searchState.searchTerm) {
      fetchPhones(searchState.searchTerm);
    } else {
      fetchPhones();
    }
  }, [searchState.searchTerm, fetchPhones]);

  return (
    <div className="phone-list">
      <div className="phone-list__grid">
        {phones.map(phone => (
          <div key={v4()} className="phone-card">
            <div className="phone-card__content">
              <div className="phone-card__image">
                <img src={phone.imageUrl} alt={phone.name} />
              </div>
              <div className="phone-card__info">
                <div className="phone-card__brand-name">
                  <span className="phone-card__brand">{phone.brand}</span>
                  <span className="phone-card__name">{phone.name}</span>
                </div>
                <span className="phone-card__price">{phone.basePrice} EUR</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
