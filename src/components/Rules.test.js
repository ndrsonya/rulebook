import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Rules from './Rules';

const rulesArr = [
	{
		ruleText: 'test rule 1',
		ruleIndex: '101.1'
	},
	{
		ruleText: 'test rule 2',
		ruleIndex: '101.2'
	}
];
const chapterName = 'test Chapter';
const chapterNumber = '101';

const rulesComponent = render(
	<Rules data={rulesArr} chapterName={chapterName} chapterNumber={chapterNumber} />
);

test('renders content', () => {

	expect(rulesComponent
		.container).toHaveTextContent(
		'test rule 2'
	);
});

test('render keyword input', () => {
	render(<Rules data={rulesArr} chapterName={chapterName} chapterNumber={chapterNumber} />);
	const inputEl = screen.getByTestId('textSearch');
	expect(inputEl).toBeInTheDocument();

});

test('input field works', () => {
	render(<Rules data={rulesArr} chapterName={chapterName} chapterNumber={chapterNumber} />);
	const usernameInput = screen.getByTestId('textSearch');
	usernameInput.value = '101.1';
	expect(usernameInput.value).toBe('101.1');
});

