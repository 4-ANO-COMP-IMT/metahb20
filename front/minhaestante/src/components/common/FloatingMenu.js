import React, { Component } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class FloatingMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	toggleMenu = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
		}));
	};

	render() {
		const { isOpen } = this.state;
		const { children, className } = this.props;

		return (
			<div className={`floating-menu-container ${className}`}>
				<button
					onClick={this.toggleMenu}
					className="menu-button btn btn-primary"
					aria-expanded={isOpen}
					aria-controls="floating-menu"
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							id="floating-menu"
							className="floating-menu"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3 }}
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		);
	}
}

FloatingMenu.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default FloatingMenu;
