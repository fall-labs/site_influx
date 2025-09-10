import { useLayoutEffect, useState, useEffect } from "react";

interface ScrollToHashElementProps {
  behavior?: ScrollBehavior;
  inline?: ScrollLogicalPosition;
  block?: ScrollLogicalPosition;
}

const ScrollToHashElement = ({
  behavior = "auto",
  inline = "nearest",
  block = "start",
}: ScrollToHashElementProps) => {
  const [hash, setHash] = useState(window.location.hash);

  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function (...args: any) {
    const result = originalPushState.apply(this, args);
    window.dispatchEvent(new Event("pushstate"));
    window.dispatchEvent(new Event("locationchange"));
    return result;
  };

  window.history.replaceState = function (...args: any) {
    const result = originalReplaceState.apply(this, args);
    window.dispatchEvent(new Event("replacestate"));
    window.dispatchEvent(new Event("locationchange"));
    return result;
  };

  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("locationchange", handleLocationChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("locationchange", handleLocationChange);
    };
  }, []);

  useLayoutEffect(() => {
    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    const setWindowLocation = (element_id) => {
      const element = document.getElementById(element_id);
      if (element) {
        console.log("scrollIntoView");
        element.scrollIntoView({
          behavior: behavior,
          inline: inline,
          block: block,
        });
      }
    };

    if (hash) {
      setWindowLocation(removeHashCharacter(hash));
    } else {
      setWindowLocation("root");
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;
