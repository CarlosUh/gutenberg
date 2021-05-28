/**
 * WordPress dependencies
 */
import { useShortcut } from '@wordpress/keyboard-shortcuts';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import SaveShortcut from './save-shortcut';

function VisualEditorGlobalKeyboardShortcuts() {
	const { redo, undo } = useDispatch( 'core/editor' );

	useShortcut(
		'core/editor/undo',
		( event ) => {
			undo();
			event.preventDefault();
		},
		{ bindGlobal: true }
	);

	useShortcut(
		'core/editor/redo',
		( event ) => {
			redo();
			event.preventDefault();
		},
		{ bindGlobal: true }
	);

	return <SaveShortcut />;
}

export default VisualEditorGlobalKeyboardShortcuts;
