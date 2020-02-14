import React from "react";
import { useSwipeable } from "react-swipeable";

export default function Swipeable({ children, next, prev }) {
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      prev();
    },
    onSwipedLeft: () => {
      next();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  return <div {...swipeHandlers}>{children}</div>;
}
