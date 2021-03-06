import React, { Component } from 'react'
import styled from 'styled-components'
import { Gesture } from 'react-with-gesture'
import { Spring, animated, interpolate } from 'react-spring'
import { Card } from 'Elements'

const AnimCard = Card.withComponent(animated.div)

const DragCard = styled(AnimCard)`
	height: 300px;
	position: absolute;
`;

const CardContainer = styled.div`
	position: relative;
	background: #ccc;
	max-width: 320px;
	margin: 0 auto;
	border-radius: 5xp;
`;

export default class Drag extends Component {
	render() {
		return (
			<Gesture>
				{({ down, xDelta }) => (

					<Spring
						native
						to={{
							x: down ? xDelta : 0 
						}}
						immediate={name => down && name === 'x'}
					>

						{({x}) => (
							<CardContainer>
								<DragCard style={{
									transform: interpolate(
										[x, x.interpolate({
											range: [-300, 300],
											output: [-45, 45],
											extrapolate: 'clamp'
										})],
										(x, rotate) => `translateX(${x}px rotate(${rotate}deg)`
									)									
								}}>
									<h1>
										DRAG ME!
									</h1>
								</DragCard>
							</CardContainer>
						)}

					</Spring>
				)}
			</Gesture>
		)
	}
}
