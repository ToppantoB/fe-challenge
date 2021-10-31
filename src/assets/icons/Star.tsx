import { IconProps } from "../../types";

const StarIcon = ({
  color = "#DDDDDD",
  height = "16",
  width = "16",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-1 -1 16 16"
      fill="none"
      focusable="false"
      aria-hidden="true"
    >
      <rect width="14" height="14" rx="2" fill={color} />
      <g clipPath="url(#clip0_49:95)">
        <path
          d="M6.50137 2.3129L5.36769 4.64024L2.83123 5.01466C2.37637 5.08145 2.19408 5.64923 2.52394 5.97442L4.35901 7.78497L3.92498 10.3426C3.84686 10.8049 4.32776 11.1512 4.73054 10.935L6.99964 9.72735L9.26873 10.935C9.67151 11.1494 10.1524 10.8049 10.0743 10.3426L9.64026 7.78497L11.4753 5.97442C11.8052 5.64923 11.6229 5.08145 11.168 5.01466L8.63158 4.64024L7.4979 2.3129C7.29478 1.89806 6.70623 1.89278 6.50137 2.3129Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_49:95">
          <rect width="10" height="9" fill="white" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;
