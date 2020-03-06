/** @jsx jsx */
import React from "react"
import { jsx, Box } from "theme-ui"
import { hidden } from "../../styles/utils"


const layers = {
  drop: {
    shape: (
      <path d="M38 0.5C58.7105 0.5 75.5 17.2893 75.5 38C75.5 58.7105 58.7105 75.5 38 75.5H0.5V38C0.5 17.2893 17.2893 0.5 38 0.5Z" />
    ),
    viewBox: "0 0 76 76",
  },
  g: {
    shape: (
      <React.Fragment>
        <path d="M6.10457 29.2851C6.09314 29.2805 6.08171 29.2758 6.07028 29.2712C0.47952 26.9886 -1.29425 20.1137 1.7267 14.9077C3.77149 11.3839 7.95301 9.51234 14.2712 9.29288C14.5393 9.27825 14.8094 9.27825 15.0817 9.29288C17.4174 9.41832 20.3628 10.0483 23.5095 11.937C26.6563 13.8257 30.3344 21.3694 25.7138 26.7902C24.1159 28.6649 21.9425 29.8126 19.5507 30.4154C19.678 29.8767 19.5118 29.2746 18.9655 28.5698C18.5888 28.0839 17.8445 27.751 16.7328 27.5712C16.8095 27.3077 16.8735 27.0128 16.9226 26.6832C17.2542 24.4594 17.1327 22.2852 17.1823 20.0603C17.2542 16.8478 17.1383 15.3139 16.9226 13.6971C16.5306 10.77 15.4165 10.493 14.228 10.4506C11.4224 10.3503 11.2737 14.7566 11.2737 20.0603C11.2737 22.4334 11.2929 24.5485 11.4685 26.0049C11.5111 26.3583 11.5388 26.674 11.5983 26.9429C11.6472 27.1634 11.7013 27.3661 11.7605 27.5513C10.9627 27.6501 10.1705 27.7802 9.46991 27.9317C8.33969 28.176 7.21791 28.6271 6.10457 29.2851Z" />
        <path d="M3.15374 32.3443C6.04327 29.7531 10.6592 29.0279 14.6033 29.4205C17.0097 29.352 17.6587 30.5651 17.0587 31.5169C16.4588 32.4687 14.7346 33.5698 13.1672 33.2848C12.6685 33.4274 9.04968 32.4883 7.00164 34.5817C5.85618 36.7892 6.94156 37.9006 10.2578 37.9156H21.7999C27.9122 38.6508 34.1403 41.5708 33.4884 48.6637C33.2908 50.8131 32.3949 52.7623 30.891 54.3055C27.5063 57.7786 21.7005 58.9033 16.9994 58.9403C12.1606 58.9782 5.5498 58.131 1.84292 54.6329C-1.62696 51.3584 2.17784 45.4021 6.58518 47.4361C8.47933 48.3102 4.82167 51.9551 7.49901 53.6467C10.1153 55.2996 13.8626 55.9617 16.925 56.0102C20.3083 56.0639 25.9211 55.3918 27.4064 51.9272C29.287 47.5401 23.6773 46.6001 20.622 46.0826C14.6699 45.0743 3.89901 48.5187 0.669893 40.3308C0.391991 39.6263 0.335241 38.6489 0.379264 37.8972C0.534967 35.2423 1.57372 33.7611 3.15374 32.3443Z" />
        <path d="M21.4091 10.8426L20.761 10.5621L20.0651 10.3005C19.3029 6.89985 19.582 4.32298 20.9022 2.56986C22.8826 -0.0598211 27.7524 -0.774055 30.1223 1.85562C32.4923 4.4853 31.2261 9.19276 27.5251 9.32262C23.8241 9.45248 23.0641 6.16194 23.4345 5.94624C23.6814 5.80244 24.2874 5.4345 25.2525 4.84242C25.5372 3.43239 24.9312 2.76145 23.4345 2.82958C21.1895 2.93178 20.9238 5.606 20.9022 6.85526C20.8806 8.10465 21.1726 9.63727 21.2918 10.6212C21.3027 10.7117 21.3418 10.7855 21.4091 10.8426Z" />
      </React.Fragment>
    ),
    viewBox: "0 0 87 154",
  },
  mark: {
    shape: (
      <React.Fragment>
        <path d="M100 0.5C154.952 0.5 199.5 45.0476 199.5 100C199.5 154.952 154.952 199.5 100 199.5H0.5V100C0.5 45.0476 45.0476 0.5 100 0.5Z" fill="#68d391" stroke="#fff" strokeWidth="1%" />
        <path d="M73.0365 100.169C73.0064 100.157 72.9764 100.145 72.9463 100.132C58.2337 94.1258 53.5659 76.0338 61.5158 62.3338C67.9908 55.8599 73.7914 51.8926 78.9175 50.4321C86.6893 48.0618 91.5673 46.8628 93.5514 46.8353C99.7113 47.5796 110.558 49.5459 118.839 54.5162C127.12 59.4864 136.799 79.3384 124.64 93.6036C120.435 98.5369 114.715 101.557 108.421 103.144C108.756 101.726 108.319 100.141 106.881 98.2868C105.89 97.008 103.931 96.132 101.005 95.6588C101.207 94.9654 101.376 94.1893 101.505 93.322C102.378 87.47 102.058 81.7483 102.189 75.8933C102.378 67.4394 102.073 63.4027 101.505 59.1481C100.473 51.4453 97.5416 50.7164 94.414 50.6046C87.0307 50.3408 86.6394 61.9363 86.6394 75.8933C86.6394 82.1382 86.69 87.7045 87.152 91.5371C87.2641 92.467 87.3372 93.2977 87.4938 94.0055C87.6223 94.5857 87.7648 95.1192 87.9206 95.6065C85.821 95.8666 83.7363 96.209 81.8927 96.6075C78.9184 97.2504 75.9663 98.4376 73.0365 100.169Z" fill="#141821" />
        <path d="M65.2714 108.22C72.8754 101.401 85.0225 99.4924 95.4018 100.525C101.735 100.345 103.442 103.538 101.863 106.042C100.285 108.547 95.7473 111.445 91.6225 110.695C90.3102 111.07 80.787 108.599 75.3974 114.108C72.3831 119.917 75.2393 122.841 83.9662 122.881H114.34C130.425 124.816 146.815 132.5 145.099 151.165C144.579 156.822 142.222 161.951 138.264 166.012C129.357 175.152 114.078 178.112 101.707 178.209C88.9737 178.309 71.5768 176.079 61.8218 166.874C52.6906 158.257 62.7032 142.582 74.3015 147.935C79.2861 150.235 69.6607 159.827 76.7063 164.279C83.5913 168.628 93.4525 170.371 101.511 170.498C110.415 170.64 125.185 168.871 129.094 159.754C134.043 148.209 119.281 145.735 111.24 144.373C95.5771 141.72 67.2326 150.784 58.7349 129.237C58.0036 127.383 57.8543 124.811 57.9701 122.832C58.3799 115.846 61.1134 111.948 65.2714 108.22Z" fill="#141821" />
        <path d="M113.312 51.6363L111.606 50.8982L109.775 50.2096C107.769 41.2606 108.503 34.4793 111.978 29.8658C117.189 22.9456 130.004 21.0661 136.241 27.9863C142.478 34.9065 139.146 47.2945 129.406 47.6363C119.667 47.978 117.667 39.3187 118.642 38.751C119.291 38.3726 120.886 37.4044 123.426 35.8463C124.175 32.1357 122.58 30.37 118.642 30.5493C112.734 30.8183 112.034 37.8557 111.978 41.1432C111.921 44.4311 112.689 48.4643 113.003 51.0536C113.032 51.2917 113.135 51.4859 113.312 51.6363Z" fill="#141821" />
        <path d="M71.3278 98.1186C71.2977 98.1067 71.2676 98.0943 71.2375 98.082C56.525 92.0753 51.8572 73.9833 59.8071 60.2833C65.1881 51.0104 76.1921 46.0851 92.819 45.5076C93.5244 45.4691 94.2353 45.4691 94.9518 45.5076C101.098 45.8377 108.849 47.4955 117.13 52.4657C125.411 57.436 135.09 77.2879 122.931 91.5531C118.726 96.4865 113.007 99.5067 106.712 101.093C107.047 99.6756 106.61 98.0909 105.172 96.2363C104.181 94.9575 102.222 94.0815 99.2967 93.6083C99.4987 92.915 99.6671 92.1389 99.7963 91.2715C100.669 85.4196 100.349 79.6979 100.48 73.8428C100.669 65.3889 100.364 61.3523 99.7963 57.0976C98.7646 49.3949 95.8328 48.6659 92.7052 48.5542C85.322 48.2904 84.9307 59.8859 84.9307 73.8428C84.9307 80.0878 84.9813 85.654 85.4433 89.4866C85.5554 90.4165 85.6285 91.2473 85.785 91.955C85.9135 92.5353 86.056 93.0687 86.2119 93.5561C84.1122 93.8161 82.0276 94.1585 80.1839 94.557C77.2097 95.1999 74.2576 96.3871 71.3278 98.1186Z" fill="#141821" />
        <path d="M63.5624 106.169C71.1665 99.3502 83.3136 97.442 93.6929 98.4751C100.026 98.2946 101.733 101.487 100.154 103.992C98.5756 106.497 94.0384 109.394 89.9136 108.644C88.6013 109.019 79.0781 106.548 73.6885 112.057C70.6741 117.866 73.5304 120.791 82.2572 120.831H112.631C128.716 122.765 145.106 130.449 143.391 149.115C142.87 154.771 140.513 159.901 136.555 163.962C127.648 173.102 112.37 176.061 99.9983 176.159C87.2648 176.259 69.8678 174.029 60.1129 164.823C50.9817 156.206 60.9943 140.532 72.5925 145.884C77.5771 148.185 67.9517 157.777 74.9974 162.228C81.8824 166.578 91.7436 168.32 99.8025 168.448C108.706 168.589 123.476 166.82 127.385 157.703C132.334 146.158 117.572 143.684 109.531 142.323C93.8682 139.669 65.5237 148.734 57.026 127.186C56.2947 125.332 56.1453 122.76 56.2612 120.782C56.6709 113.796 59.4045 109.898 63.5624 106.169Z" fill="#141821" />
        <path d="M111.603 49.5859L109.897 48.8477L108.066 48.1591C106.06 39.2101 106.795 32.4289 110.269 27.8154C115.48 20.8952 128.296 19.0157 134.532 25.9359C140.769 32.8561 137.437 45.2441 127.698 45.5858C117.958 45.9276 115.958 37.2683 116.933 36.7006C117.583 36.3222 119.177 35.354 121.717 33.7959C122.466 30.0853 120.871 28.3196 116.933 28.4989C111.025 28.7679 110.326 35.8053 110.269 39.0928C110.212 42.3807 110.98 46.4139 111.294 49.0032C111.323 49.2413 111.426 49.4355 111.603 49.5859Z" fill="#141821" />
      </React.Fragment>
    ),
    viewBox: "0 0 200 200",
  }
}

const Logo = ({ stroke = false, color, width, left, layer, top, hiddenMobile = false, }) => (
  <svg
    className="svg-logo"
    sx={{
      position: 'absolute',
      stroke: stroke ? 'currentColor' : 'none',
      fill: stroke ? 'none' : 'currentColor',
      display: hiddenMobile ? hidden : 'block',
      color,
      width,
      left,
      top,
    }}
    viewBox={layers[layer].viewBox}
  >
    {layers[layer].shape}
  </svg>
)

export default Logo
