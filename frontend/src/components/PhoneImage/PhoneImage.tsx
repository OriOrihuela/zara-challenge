import './PhoneImage.scss';

interface Props {
  imageUrl?: string;
  name: string;
}

export const PhoneImage = ({ imageUrl, name }: Props) => {
  return (
    <div className="phone-image">
      <img src={imageUrl} alt={name} />
    </div>
  );
};
