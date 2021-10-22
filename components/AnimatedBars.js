import { useEffect } from "react";
import { animate } from "motion";

const AnimatedBars = ({ data }) => {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar4",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.6,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
  }, []);

  if (data) {
    return (
      <div className="w-auto flex items-end overflow-hidden mt-1">
        <span
          id="bar1"
          className="w-[2px] mr-[3px] h-2 bg-gray-900 dark:bg-white opacity-75"
        />
        <span
          id="bar2"
          className="w-[2px] mr-[3px] h-1 bg-gray-900 dark:bg-white"
        />
        <span
          id="bar3"
          className="w-[2px] h-3 bg-gray-900 mr-[3px] dark:bg-white opacity-80"
        />
        <span id="bar4" className="w-[2px] h-1 bg-gray-900 dark:bg-white" />
      </div>
    );
  }
  return null;
};

export default AnimatedBars;
