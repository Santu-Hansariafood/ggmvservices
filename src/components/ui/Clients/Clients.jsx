"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

const Client = ({ data }) => {
  const [columns, setColumns] = useState(2);
  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateColumns = () => {
      if (window.innerWidth >= 1500) {
        setColumns(5);
      } else if (window.innerWidth >= 1000) {
        setColumns(4);
      } else if (window.innerWidth >= 600) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth || 0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const safeData = Array.isArray(data) ? data : [];

  const [heights, gridItems] = useMemo(() => {
    if (!safeData.length) return [[], []];

    let heights = new Array(columns).fill(0);
    let gridItems = safeData.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });

    return [heights, gridItems];
  }, [columns, safeData, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: heights.length ? Math.max(...heights) : "auto" }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className="absolute p-[15px] [will-change:transform,width,height,opacity]"
        >
          <div
            className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] shadow-lg transition duration-300 ease hover:scale-110"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </a.div>
      ))}
    </div>
  );
};

export default Client;
