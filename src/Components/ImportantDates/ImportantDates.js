import React from 'react';
import styled from 'styled-components';

const ImportantDates = () => {
	return (
		<Wrapper>
			<h1>Important Dates</h1>

			<DatesItems>
				<DatesItem>
					<h3>Phase 1</h3>
					<p>Mint Limit 150</p>
					<p>15:00 UTC</p>
					<p>December 15th</p>
				</DatesItem>
				<DatesItem bgColor='#069DA1'>
					<h3>Phase 1</h3>
					<p>Mint Limit 150</p>
					<p>15:00 UTC</p>
					<p>December 15th</p>
				</DatesItem>
				<DatesItem>
					<h3>Phase 1</h3>
					<p>Mint Limit 150</p>
					<p>15:00 UTC</p>
					<p>December 15th</p>
				</DatesItem>
				<DatesItem bgColor='#069DA1'>
					<h3>Phase 1</h3>
					<p>Mint Limit 150</p>
					<p>15:00 UTC</p>
					<p>December 15th</p>
				</DatesItem>
				<DatesItem>
					<h3>Phase 1</h3>
					<p>Mint Limit 150</p>
					<p>15:00 UTC</p>
					<p>December 15th</p>
				</DatesItem>
			</DatesItems>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	padding: 3rem 0;
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;
	align-items: center;

	h1 {
		font-size: 2rem;
		color: #11272c;
		text-align: left;
	}
`;

const DatesItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
`;
const DatesItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	color: #fff;
	/* background-color: #224550; */
	background-color: ${(props) => (props.bgColor ? props.bgColor : '#224550')};
	padding: 1rem 1.5rem;
	border-radius: 1rem;
`;
export default ImportantDates;
