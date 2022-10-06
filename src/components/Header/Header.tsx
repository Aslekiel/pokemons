import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/pokemon-logo.png';
import { HeaderContainer } from './Header.styles';

export const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const date = useMemo(() => {
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
  }, [currentDate]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logo}
          alt="pokemon-logo"
          className="header__logo"
        />
      </Link>
      <div
        className="header__date"
      >
        <span className="header__date_date">
          {`Today: ${date}`}
        </span>
        <span className="header__date_time">
          {currentDate.toLocaleTimeString()}
        </span>
      </div>
    </HeaderContainer>
  );
};
