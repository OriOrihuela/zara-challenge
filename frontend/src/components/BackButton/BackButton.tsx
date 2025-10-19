import { useNavigate } from 'react-router-dom';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button">
      <button className="back-button__btn" onClick={() => navigate('/')}>
        <SVGIcon src="/src/assets/arrow-back.svg" width="5px" height="8px" />
        Back
      </button>
    </div>
  );
};
