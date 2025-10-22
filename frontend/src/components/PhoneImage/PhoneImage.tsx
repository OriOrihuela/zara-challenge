import './PhoneImage.scss';

interface Props {
  imageUrl?: string;
  name: string;
}

export const PhoneImage = ({ imageUrl, name }: Props) => {
  return (
    <figure className="phone-image" aria-label={`Product image of ${name}`}>
      <img src={imageUrl} alt={`${name} product image`} loading="lazy" />
    </figure>
  );
};
