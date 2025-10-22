import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { PhoneCard } from '../../components/PhoneCard/PhoneCard';
import { useSearch } from '../../hooks/useSearch';
import type { Phone } from '../../models';
import { getPhones } from '../../services/phoneService';
import './PhoneListPage.scss';

export const PhoneListPage = () => {
  const navigate = useNavigate();
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

  const handlePhoneClick = (phoneId: string) => {
    navigate(`/${phoneId}`);
  };

  if (searchState.total === 0) {
    return <></>;
  }

  return (
    <main className="phone-list" role="main" aria-label="Phone catalog">
      <section
        className="phone-list__grid"
        role="grid"
        aria-label={`${phones.length} phones available`}
        aria-live="polite"
      >
        {phones.map(phone => (
          <PhoneCard key={v4()} phone={phone} onClick={handlePhoneClick} />
        ))}
      </section>
    </main>
  );
};
