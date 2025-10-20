import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import type { Phone } from '../../models/phoneList';
import './SimilarItems.scss';

interface Props {
  similarProducts: Phone[];
}

export const SimilarItems = ({ similarProducts }: Props) => {
  const navigate = useNavigate();

  if (!similarProducts.length) {
    return null;
  }

  return (
    <div className="similar-items">
      <h2 className="similar-items__title">Similar items</h2>
      <div className="similar-items__scroll-container">
        <div className="similar-items__scroll">
          {similarProducts.map(product => (
            <PhoneCard
              key={v4()}
              phone={product}
              onClick={() => navigate(`/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
