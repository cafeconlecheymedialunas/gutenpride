/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { CustomSelectControl } from '@wordpress/components';

import { useState } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
const options = [
	{
		key: 'small',
		name: 'Small',
		style: { fontSize: '50%' },
	},
	{
		key: 'normal',
		name: 'Normal',
		style: { fontSize: '100%' },
	},
	{
		key: 'large',
		name: 'Large',
		style: { fontSize: '200%' },
	},
	{
		key: 'huge',
		name: 'Huge',
		style: { fontSize: '300%' },
	},
];
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const [ fontSize, setFontSize ] = useState( options[ 0 ] );
	return (
		<div { ...blockProps }>
			<CustomSelectControl
				__nextUnconstrainedWidth
				label="Font Size"
				options={ options }
				onChange={ ( { selectedItem } ) => setFontSize( selectedItem ) }
				value={ options.find(
					( option ) => option.key === fontSize.key
				) }
			/>
		</div>
	);
}
