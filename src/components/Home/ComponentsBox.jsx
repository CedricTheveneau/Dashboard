import React from "react";

const ComponentsBox = () => {
  return (
    <div className="componentsBox">
      <div className="scheduleComponents">
        <div className="topHalf">
          <div className="date">
            <p>Jul</p>
            <p>18</p>
          </div>
          <div className="task">
            <p>Write 5 microblog articles on Instagram</p>
            <p>Office / Marketing</p>
          </div>
        </div>
        <div className="bottomHalf">
          <div className="progressBar">&nbsp;</div>
          <p>72% Complete</p>
        </div>
      </div>
      <div className="scheduleComponents">
        <div className="topHalf">
          <div className="date">
            <p>Jul</p>
            <p>24</p>
          </div>
          <div className="task">
            <p>Publish 20 post on Dribbbles</p>
            <p>Office / Marketing</p>
          </div>
        </div>
        <div className="bottomHalf">
          <div className="progressBar">&nbsp;</div>
          <p>14% Complete</p>
        </div>
      </div>
      <div className="scheduleComponents">
        <div className="topHalf">
          <div className="date">
            <p>Jul</p>
            <p>18</p>
          </div>
          <div className="task">
            <p>Drafting Material for Travel Campaign</p>
            <p>Drafting</p>
          </div>
        </div>
        <div className="bottomHalf">
          <div className="progressBar">&nbsp;</div>
          <p>43% Complete</p>
        </div>
      </div>
      <div className="numbers">
        <h4>120K</h4>
        <p>
          <span>
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_729)">
                <path
                  d="M7.12524 4.12561L4.50024 1.50061L1.87524 4.12561"
                  stroke="#30D988"
                  stroke-width="1.38462"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.50024 1.50046L4.50024 7.50046"
                  stroke="#30D988"
                  stroke-width="1.38462"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_729">
                  <rect
                    width="9"
                    height="9"
                    fill="white"
                    transform="translate(9) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
            12%
          </span>{" "}
          visits
        </p>
      </div>
      <div className="progressContainer">
        <div className="progressBarChannel">
          <div className="progress">&nbsp;</div>
          <div className="progress">&nbsp;</div>
          <div className="progress">&nbsp;</div>
          <div className="progress">&nbsp;</div>
        </div>
      </div>
      <div className="channelsComponents">
        <div className="content">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM18.4594 8.09766H16.9617C15.7875 8.09766 15.5602 8.65547 15.5602 9.47578V11.2828H18.3633L17.9977 14.1117H15.5602V21.375H12.6375V14.1141H10.193V11.2828H12.6375V9.19687C12.6375 6.77578 14.1164 5.45625 16.2773 5.45625C17.3133 5.45625 18.2016 5.53359 18.4617 5.56875V8.09766H18.4594Z"
              fill="#017EFA"
            />
          </svg>
          <p>Facebook</p>
          <p>45 Visitors &nbsp;</p>
          <p>12%</p>
        </div>
      </div>
      <div className="channelsComponents">
        <div className="content">
          <img src="/IgLogo.jpg" />
          <p>Instagram</p>
          <p>138 Visitors</p>
          <p>43%</p>
        </div>
      </div>
      <div className="channelsComponents">
        <div className="content">
          <img src="/LinkedInLogo.png" />
          <p>LinkedIn</p>
          <p>75 Visitors</p>
          <p>20%</p>
        </div>
      </div>
      <div className="channelsComponents">
        <div className="content">
          <img src="/YtLogo.png" />
          <p>YouTube</p>
          <p>12 Visitors &nbsp;</p>
          <p>8%</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentsBox;
