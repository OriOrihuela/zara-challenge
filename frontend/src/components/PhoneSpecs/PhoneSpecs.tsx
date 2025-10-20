import type { PhoneDetail } from '../../models/phoneDetail';
import './PhoneSpecs.scss';

interface Props {
  phone: PhoneDetail;
}

export const PhoneSpecs = ({ phone }: Props) => {
  const specItems = [
    { label: 'Brand', value: phone.brand },
    { label: 'Name', value: phone.name },
    { label: 'Description', value: phone.description },
    { label: 'Screen', value: phone.specs.screen },
    { label: 'Resolution', value: phone.specs.resolution },
    { label: 'Processor', value: phone.specs.processor },
    { label: 'Main Camera', value: phone.specs.mainCamera },
    { label: 'Selfie Camera', value: phone.specs.selfieCamera },
    { label: 'Battery', value: phone.specs.battery },
    { label: 'OS', value: phone.specs.os },
    { label: 'Refresh Rate', value: phone.specs.screenRefreshRate }
  ];

  return (
    <div className="phone-specs">
      <h2 className="phone-specs__title">Specifications</h2>
      <div className="phone-specs__grid">
        {specItems.map(({ label, value }) => (
          <div key={label} className="phone-specs__item">
            <span className="phone-specs__label">{label}</span>
            <span className="phone-specs__value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
