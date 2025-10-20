import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
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
      <div className="similar-items__grid">
        {similarProducts.map(similarPhone => (
          <div
            key={v4()}
            className="similar-items__card"
            onClick={() => navigate(`/${similarPhone.id}`)}
          >
            <img src={similarPhone.imageUrl} alt={similarPhone.name} />
            <div className="similar-items__info">
              <div className="similar-items__brand">
                {similarPhone.brand}
              </div>
              <div className="similar-items__name">{similarPhone.name}</div>
              <div className="similar-items__price">
                {similarPhone.basePrice} EUR
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
