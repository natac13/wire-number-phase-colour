import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { lowerCase, capitalize, split, map, join } from 'lodash/fp';
import { compose } from 'recompose';
import style from './style.scss';

function Header(props) {
  const { appName, className, push } = props;
  const wrapperClass = classnames({
    [style.header]: true,
    [className]: !!props.className,
  });
  const createTitle = compose(join(' '), map(capitalize), split(' '), lowerCase);
  const title = createTitle(appName);

  return (
    <header className={wrapperClass}>
      <h1 className={style.title}>{title}</h1>
      <h4 className={style.creator}>
        <a href="https://seancampbellnatac.com">
          Created by: Sean Campbell
        </a>
      </h4>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  appName: PropTypes.string,
};

export default Header;

