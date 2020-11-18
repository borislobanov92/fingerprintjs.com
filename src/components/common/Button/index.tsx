import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'clear'
  href?: string
  mobileIcon?: React.ReactNode
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  mobileIcon,
  children,
  type,
  onClick,
}: ButtonProps) {
  const classes = classNames(
    styles.button,
    { [styles.outlined]: variant === 'outline' },
    { [styles.clear]: variant === 'clear' },
    className
  )

  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {mobileIcon && <span className={styles.mobileOnly}>{mobileIcon}</span>}
      <span className={classNames({ [styles.desktopOnly]: mobileIcon })}>{children}</span>
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {mobileIcon && <span className={classNames(styles.icon, styles.mobileOnly)}>{mobileIcon}</span>}
      <span className={classNames({ [styles.desktopOnly]: mobileIcon })}>{children}</span>
    </button>
  )
}
