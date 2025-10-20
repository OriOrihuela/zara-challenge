import type { Phone } from '../../models';
import './PhoneCard.scss';

interface Props {
  phone: Phone;
  onClick: (phoneId: string) => void;
}

export const PhoneCard = ({ phone, onClick }: Props) => {
  const handleClick = () => {
    onClick(phone.id);
  };

  return (
    <div className="phone-card" onClick={handleClick}>
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
  );
};
