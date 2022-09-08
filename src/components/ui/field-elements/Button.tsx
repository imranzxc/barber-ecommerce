import cn from 'classnames';
import { FC } from 'react';

import { IButton } from './form.interface';
import styles from './form.module.scss';

export const Button: FC<IButton> = ({ children, className, ...rest }) => (
  <button className={cn(styles.button, className)} {...rest}>
    {children}
  </button>
);
