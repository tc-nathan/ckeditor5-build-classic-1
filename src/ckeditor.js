/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

//	The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import DataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import ShiftEnter from '@ckeditor/ckeditor5-enter/src/shiftenter';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontCommand from '@ckeditor/ckeditor5-font/src/fontcommand';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableWalker from '@ckeditor/ckeditor5-table/src/tablewalker';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

export default class ClassicEditor extends ClassicEditorBase {}

//	Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	BlockQuote,
	Heading,
	Indent,
	IndentBlock,
	Link,
	Alignment,
	Autosave,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Superscript,
	Clipboard,
	Enter,
	Font,
	Highlight,
	HorizLine,
	Image,
	PageBreak,
	List,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Table,
	Typing,
	Undo,
	WordCount,
	CKFinder,
	DataTransfer,
	ShiftEnter,
	FontBackgroundColor,
	FontColor,
	FontCommand,
	FontFamily,
	FontSize,
	HeadingButtonsUI,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	TableToolbar,
	TableWalker
];

//	Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'heading1',
			'heading2',
			'heading3',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'superscript',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'highlight:yellowMarker',
			'highlight:greenMarker',
			'highlight:pinkMarker',
			'highlight:blueMarker',
			'highlight:redPen',
			'highlight:greenPen',
			'removeHighlight',
			'highlight',
			'|',
			'horizontalLine',
			'imageTextAlternative',
			'pageBreak',
			'numberedList',
			'bulletedList',
			'removeFormat',
			'insertTable',
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'alignment',
			'alignment:left',
			'alignment:right',
			'alignment:center',
			'alignment:justify',
			'blockQuote',
			'|',
			'autoformat',
			'autosave',
			'|',
			'ckfinder',
			'imageUpload',
			'imageStyle:full',
			'imageStyle:side',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'|',
			'alignment',
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	//	This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
