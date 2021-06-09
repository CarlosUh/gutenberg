/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { HeaderUI } from '../styles';
import { useCardContext } from '../context';

export const defaultProps = {
	isBorderless: false,
	isShady: false,
	size: 'medium',
};

/**
 * @param { import('../types').HeaderProps & { className: string } } props
 */
export function CardHeader( props ) {
	const { className, isShady, ...additionalProps } = props;
	const mergedProps = { ...defaultProps, ...useCardContext(), ...props };
	const { isBorderless, size } = mergedProps;

	const classes = classnames(
		'components-card__header',
		isBorderless && 'is-borderless',
		isShady && 'is-shady',
		size && `is-size-${ size }`,
		className
	);

	return <HeaderUI { ...additionalProps } className={ classes } />;
}

export default CardHeader;
