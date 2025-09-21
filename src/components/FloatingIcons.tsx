import React from "react";
import { Coffee, Wine, Zap, Droplets } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Coffee, delay: "0s", position: "top-1/4 left-1/4", duration: "8s" },
    { Icon: Wine, delay: "2s", position: "top-1/3 right-1/4", duration: "10s" },
    { Icon: Zap, delay: "4s", position: "bottom-1/3 left-1/3", duration: "12s" },
    { Icon: Droplets, delay: "6s", position: "bottom-1/4 right-1/3", duration: "9s" },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, position, duration }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-10 pointer-events-none animate-float`}
          style={{
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      ))}
    </>
  );
};

export default FloatingIcons;