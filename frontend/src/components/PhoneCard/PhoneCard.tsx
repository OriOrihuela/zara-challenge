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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(phone.id);
    }
  };

  return (
    <article
      className="phone-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${phone.brand} ${phone.name}, price ${phone.basePrice} EUR`}
    >
      <div className="phone-card__content">
        <div className="phone-card__image">
          <img
            src={phone.imageUrl}
            alt={`${phone.brand} ${phone.name} product image`}
            loading="lazy"
          />
        </div>
        <div className="phone-card__info">
          <div className="phone-card__brand-name">
            <span className="phone-card__brand">{phone.brand}</span>
            <h3 className="phone-card__name">{phone.name}</h3>
          </div>
          <span
            className="phone-card__price"
            aria-label={`Price: ${phone.basePrice} EUR`}
          >
            {phone.basePrice} EUR
          </span>
        </div>
      </div>
    </article>
  );
};
