import React, { useState, useRef } from "react";

const DraggableTabs = () => {
  const tabsBoxRef = useRef(null);
  const [activeTab, setActiveTab] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tabsBoxRef.current.offsetLeft);
    setScrollLeft(tabsBoxRef.current.scrollLeft);
  };

  const duringDragging = (e) => {
    if (!isDragging) return;
    const x = e.pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    tabsBoxRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const touchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - tabsBoxRef.current.offsetLeft);
    setScrollLeft(tabsBoxRef.current.scrollLeft);
  };

  const touchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    tabsBoxRef.current.scrollLeft = scrollLeft - walk;
  };

  const touchEnd = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const tabsBox = tabsBoxRef.current;

    tabsBox.addEventListener("mousedown", startDragging);
    tabsBox.addEventListener("mousemove", duringDragging);
    tabsBox.addEventListener("mouseup", stopDragging);
    tabsBox.addEventListener("mouseleave", stopDragging);

    tabsBox.addEventListener("touchstart", touchStart);
    tabsBox.addEventListener("touchmove", touchMove);
    tabsBox.addEventListener("touchend", touchEnd);

    return () => {
      tabsBox.removeEventListener("mousedown", startDragging);
      tabsBox.removeEventListener("mousemove", duringDragging);
      tabsBox.removeEventListener("mouseup", stopDragging);
      tabsBox.removeEventListener("mouseleave", stopDragging);

      tabsBox.removeEventListener("touchstart", touchStart);
      tabsBox.removeEventListener("touchmove", touchMove);
      tabsBox.removeEventListener("touchend", touchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      className="relative flex items-center justify-center w-full"
      style={{
        overflow: 'hidden', /* Hide overflow for the container */
      }}
    >
      {/* Tabs Container */}
      <ul
        className="tabs-box flex gap-2 whitespace-nowrap"
        ref={tabsBoxRef}
        style={{
          overflowX: 'scroll', /* Ensure horizontal scrolling */
          msOverflowStyle: 'none', /* IE and Edge */
          scrollbarWidth: 'none', /* Firefox */
        }}
      >
        {[
          "Location",
          "Hotels",
          "Food",
          "Adventure",
          "Adventure Sports",
          
        ].map((tab) => (
          <li
            key={tab}
            className={`tab cursor-pointer px-3 py-1 text-sm rounded-full ${
              activeTab === tab
                ? "bg-gray-300 text-blue-500" // Gray background and blue text for active tab
                : "bg-white text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .tabs-box::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
};

export default DraggableTabs;
