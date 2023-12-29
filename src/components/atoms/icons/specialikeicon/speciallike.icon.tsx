import style from "./special.module.css";

export const SpecialLikeIcon = () => {
  return (
    <div
      style={{
        width: "87px",
        height: "75px",
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={style.bg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1_105)">
            <path
              d="M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3068 2.82781C13.3411 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.69323 2.82781C8.72753 2.24839 7.62604 1.93405 6.49999 1.91653C4.70493 1.99453 3.01369 2.77979 1.79577 4.10077C0.577848 5.42175 -0.0677617 7.17106 -1.11917e-05 8.96653C-1.11917e-05 13.5135 4.78599 18.4795 8.79999 21.8465C9.69621 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3038 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_105">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
