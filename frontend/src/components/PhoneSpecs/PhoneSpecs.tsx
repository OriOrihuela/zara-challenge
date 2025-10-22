import { v4 } from 'uuid';
import type { PhoneDetail } from '../../models/phoneDetail';
import './PhoneSpecs.scss';

interface Props {
  phone: PhoneDetail;
}

export const PhoneSpecs = ({ phone }: Props) => {
  const specItems = [
    { term: 'Brand', definition: phone.brand },
    { term: 'Name', definition: phone.name },
    { term: 'Description', definition: phone.description },
    { term: 'Screen', definition: phone.specs.screen },
    { term: 'Resolution', definition: phone.specs.resolution },
    { term: 'Processor', definition: phone.specs.processor },
    { term: 'Main Camera', definition: phone.specs.mainCamera },
    { term: 'Selfie Camera', definition: phone.specs.selfieCamera },
    { term: 'Battery', definition: phone.specs.battery },
    { term: 'OS', definition: phone.specs.os },
    { term: 'Refresh Rate', definition: phone.specs.screenRefreshRate }
  ];

  return (
    <section className="phone-specs" aria-label="Phone specifications">
      <h2 className="phone-specs__title">Specifications</h2>
      <dl className="phone-specs__grid" role="list">
        {specItems.map(({ term, definition }) => (
          <div key={v4()} className="phone-specs__item" role="listitem">
            <dt className="phone-specs__term">{term}</dt>
            <dd className="phone-specs__definition">{definition}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
