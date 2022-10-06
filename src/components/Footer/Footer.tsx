import { useEffect, useState } from 'react';
import pokeapi from '../../assets/logos/pokeapi.png';

import { FooterContainer } from './Footer.styles';

export const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return (
    <FooterContainer>
      <div className="footer__info">
        <img
          src={pokeapi}
          alt="pokeapi-logo"
          className="footer__info_logo"
        />
        <div className="footer__info_description">
          <p
            className="footer__info_description_text"
          >
            Created by Paul Hallett and other PokéAPI contributors around the world.
          </p>
          <p
            className="footer__info_description_text"
          >
            Pokémon and Pokémon character names are trademarks of Nintendo.
          </p>
        </div>
      </div>
      <div>{`Current screen width: ${screenWidth}`}</div>
    </FooterContainer>
  );
};
