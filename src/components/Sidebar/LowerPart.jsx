import React from "react";
import { help } from "../../data/Sidebar.js";

const LowerPart = () => {
  return (
    <div className="lowerPart">
      <div className={help.class}>
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <circle cx="36" cy="32" r="20" fill="#AABBFA" />
          </g>
          <path
            d="M36 18.6667C28.648 18.6667 22.6666 24.648 22.6666 32C22.6666 39.352 28.648 45.3333 36 45.3333C43.352 45.3333 49.3333 39.352 49.3333 32C49.3333 24.648 43.352 18.6667 36 18.6667ZM37.3333 40H34.6666V37.3333H37.3333V40ZM38.6346 33.4867C38.3733 33.6973 38.1213 33.8987 37.9213 34.0987C37.3773 34.6413 37.3346 35.1347 37.3333 35.156V35.3333H34.6666V35.1107C34.6666 34.9533 34.7053 33.5413 36.0346 32.212C36.2946 31.952 36.6173 31.688 36.956 31.4133C37.9346 30.62 38.5773 30.0413 38.5773 29.244C38.5618 28.5704 38.2833 27.9297 37.8014 27.4588C37.3195 26.988 36.6724 26.7244 35.9986 26.7246C35.3249 26.7248 34.678 26.9887 34.1963 27.4597C33.7146 27.9308 33.4364 28.5717 33.4213 29.2453H30.7546C30.7546 26.3533 33.108 24 36 24C38.892 24 41.2453 26.3533 41.2453 29.2453C41.2453 31.3747 39.6733 32.6453 38.6346 33.4867V33.4867Z"
            fill="#017EFA"
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0"
              y="0"
              width="72"
              height="72"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <h4>
          Need Help with <span>Dash</span> ?
        </h4>
        <button className="getHelp">{help.button[0].text}</button>
      </div>
    </div>
  );
};

export default LowerPart;
