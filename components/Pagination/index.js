/* eslint-disable no-tabs */
import { Pagination } from '@material-ui/lab'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function TablePagination(props) {
  return <CustomPagination {...props} />
}

TablePagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
}

const CustomPagination = styled(Pagination)`
	> ul {
		list-style: none;
		padding: 0px;
		margin: 0px;
		display: flex;
		justify-content: flex-end;
		@media (max-width: 600px) {
			justify-content: center;
		}
		> li {
			margin-top: 5px;
			margin-right: 17px;
			.Mui-selected {
				background: #810BCF 0% 0% no-repeat padding-box !important;
				color: #fff !important;
				border: none !important;
				padding: 12px !important;
        font-family: 'Anek Latin';
        font-weight: 700;
			}
			> button {
        width: 18px;
        height: 18px;
				border-radius: 4px;
				opacity: 1;
				padding: 12px;
				color: #444;
				font-weight: 700;
				cursor: pointer;
			}
		}
	}
	> ul > li:first-child {
		> button {
			border: none;
			::before {
                content: "";
                background-image: url("/assets/prev.svg");
                font-weight: 400;
                font-size: 15px;
                width: 19px;
                height: 16px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
			}
			> svg {
				display: none;
			}
		}
	}
	> ul > li:last-child {
		> button {
			border: none;
			::before {
                content: "";
                background-image: url("/assets/next.svg");
                font-weight: 400;
                font-size: 15px;
                width: 19px;
                height: 16px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
			}
			> svg {
				display: none;
			}
		}
	}
`
