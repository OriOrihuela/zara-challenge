import { ReactSVG } from 'react-svg';

interface Props {
  src: string;
  width: string;
  height: string;
}

export const SVGIcon = ({ src, width, height }: Props) => (
  <ReactSVG
    src={src}
    beforeInjection={svg =>
      svg.setAttribute('style', `width: ${width}; height: ${height}`)
    }
  />
);
