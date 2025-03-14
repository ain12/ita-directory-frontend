import styled from "styled-components";
import Colors from "theme/Colors";

export const HeaderStyled = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	.top-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 1rem;
		margin-bottom: 1rem;

		.logo {
			display: flex;
			align-items: center;
			width: 100%;
			color: ${(props) => (props.color_logo ? props.color_logo : Colors.darkRed)};
			font: normal normal normal 15px/15px Korb-Bold;
			letter-spacing: 0px;
			text-transform: uppercase;
			opacity: 1;
			text-decoration: none; //Para eliminar el subrayado del link
		}

		.profile {
			button.profile {
				display: flex;
				align-items: center;
				justify-content: center;
				border: none;
				background-color: white;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
				border-radius: 4px;
				padding: 0.5rem;
				position: relative;

				img {
					width: 32px;
					height: 32px;
					border-radius: 16px;
					object-fit: cover;
					margin-right: 12px;
				}

				span {
					font-size: 18px;
					display: inline;
					white-space: pre;
				}

				&:hover {
					cursor: pointer;
				}
			}

			.dropdown {
				position: absolute;
				padding: 0;
				z-index: 1;
				text-align: center;
				background: transparent 0% 0% no-repeat padding-box;
				border: 1px solid #dddddd;
				border-radius: 10px;
				opacity: 1;

				ul {
					list-style-type: none;
					padding: 0px;
					margin-top: 10px;
					position: absolute;
					box-shadow: 0px 4px 10px #00000029;
					background: transparent;
					border-radius: 6px;

					li {
						border: 1px solid #dddd;
						align-items: center;
						text-align: left;
						padding-left: 15px;
						min-width: 6rem;
						width: 150px;
						display: block;
						background-color: white;
						position: relative;
						z-index: 2;
						line-height: 2.5rem;
						border-bottom: 0;
						right: 0;

						&:first-child {
							border-top-right-radius: 6px;
							border-top-left-radius: 6px;
						}

						&:last-child {
							border-bottom-right-radius: 6px;
							border-bottom-left-radius: 6px;
						}
					}
				}
			}
		}
	}

	.sub-header {
		width: 100%;
		background-color: #e6f2f2;
		border: 1px solid #b5dddd;
		border-left: none;
		border-right: none;
		margin-bottom: 2rem;

		h1 {
			width: 100%;
			font-size: 26px;
			line-height: 36px;
			font-weight: normal;
			text-align: ${(props) => (props.centerTitle ? "center" : "left")};
			color: ${(props) => (props.color_letra ? props.color_letra : "#7d868b")};
		}
	}
`;

export const StyledMiPerfil = styled.div`
	position: realtive;
	display: inline-block;
`;

export const StyledLogo = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	text-align: left;
	max-width: 50%;
	color: ${Colors.grey};
	text-transform: none;
	opacity: 1;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid #b0b0b0;
	box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19);
	padding: 6px;
	margin-left: 1060px;
`;

export const StyledImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-left: 0px;
	margin-right: 5px;
`;
