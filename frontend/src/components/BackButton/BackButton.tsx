import { useNavigate } from 'react-router-dom';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <nav className="back-button" role="navigation" aria-label="Back navigation">
      <button
        className="back-button__btn"
        onClick={() => navigate('/')}
        aria-label="Go back to phone catalog"
      >
        <SVGIcon src="/src/assets/arrow-back.svg" width="5px" height="8px" />
        Back
      </button>
    </nav>
  );
};
