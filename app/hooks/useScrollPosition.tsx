import { useEffect, useState } from "react";

export const useScrollPostion = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollPosition = 0;
    document.addEventListener("scroll", function (e) {
      if (window.scrollY > lastScrollPosition) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollPosition = window.scrollY;
    });
  }, []);

  return showNav;
};
