import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AccordionText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: true
		};
	}
	render() {
		return (
			<div style={this.props.style || {}}>
				<div
					style={{
						backgroundColor: 'white',
						boxShadow: 'rgb(211, 211, 211) 0px 2px 5px',
						borderRadius: '15px',
						padding: '20px',
						zIndex: '99',
						position: 'relative',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
					onClick={() => {
						this.setState(prevState => {
							return { collapsed: !prevState.collapsed };
						})
					}}
				>
					<div style={{
						flex: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: this.props.image ? 'center' : '',
					}}>
						{this.props.image ? (
							<img src={this.props.image} style={{ width: '100%' }} alt="about-us" />
						) : (
								<p style={{
									fontWeight: 'bold',
									fontSize: '16px',
									margin: '0'
								}}>
									{this.props.title}
								</p>
							)
						}
					</div>
					<div style={{ minWidth: '40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
						<FontAwesomeIcon icon={this.state.collapsed ? faChevronDown : faChevronUp} />
					</div>
				</div>
				{
					!this.state.collapsed && (
						<div style={{
							backgroundColor: 'white',
							margin: '0px 5px',
							top: '-15px',
							padding: '15px',
							paddingTop: '25px',
							position: 'relative',
							textAlign: 'justify',
							borderBottomLeftRadius: '15px',
							borderBottomRightRadius: '15px',
							boxShadow: 'rgb(211, 211, 211) 0px 2px 5px',
						}}>
							{this.props.children && this.props.children}
							{!this.props.children && (
								<p style={{
									fontSize: '14px',
									color: '#696969',
									margin: '0'
								}}>
									{this.props.content}
								</p>
							)}
						</div>
					)
				}
			</div >
		);
	}
}

export default AccordionText;