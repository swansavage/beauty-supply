import * as React from 'react'
import { Box } from 'grommet'

function BSLogo(props) {
  return (
    <Box margin={{ left: 'medium' }}>
      <svg
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="4rem"
        {...props}
      >
        <path
          d="M39.736 1.5c7.218 0 13.07 5.851 13.07 13.07 0 7.218-5.852 13.07-13.07 13.07-7.219 0-13.07-5.852-13.07-13.07 0-7.219 5.851-13.07 13.07-13.07z"
          fill="#fa5246"
          stroke="#00332c"
          strokeWidth={3}
        />
        <path
          d="M27.814 1.5c7.218 0 13.07 5.851 13.07 13.07 0 7.218-5.852 13.07-13.07 13.07s-13.07-5.852-13.07-13.07c0-7.219 5.852-13.07 13.07-13.07z"
          fill="#ffa8ba"
          stroke="#00332c"
          strokeWidth={3}
        />
        <path
          d="M14.57 1.5c7.218 0 13.07 5.851 13.07 13.07 0 7.218-5.852 13.07-13.07 13.07-7.219 0-13.07-5.852-13.07-13.07C1.5 7.35 7.351 1.5 14.57 1.5z"
          fill="#faae2b"
          stroke="#00332c"
          strokeWidth={3}
        />
        <circle cx={7.93819} cy={13.9382} r={1.93819} fill="#00332c" />
        <circle cx={21.9382} cy={13.9382} r={1.93819} fill="#00332c" />
        <path
          d="M17 17c-.287.348-1.12 1.5-2.5 1.5S12.199 17.348 12 17"
          stroke="#00332c"
          strokeWidth={1.93819}
          strokeLinecap="round"
        />
      </svg>
    </Box>
  )
}

export default BSLogo
