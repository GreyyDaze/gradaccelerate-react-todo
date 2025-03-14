import {
  LucideMoon,
  LucideStar,
  LucideSun,
  LucideCloud,
  LucideFeather,
  LucideDroplet,
  LucideFlower,
  LucideZap,
} from "lucide-react";

// Doodle component with fixed positions
const DoodleOverlay = () => {
  // Array of 8 unique doodles with their fixed positions
  const doodlesWithPositions = [
    {
      icon: <LucideMoon size={28} strokeWidth={1.5} />,
      position: {
        top: "1%",
        left: "1%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideStar size={24} strokeWidth={1.5} />,
      position: {
        top: "-0.1%",
        left: "48%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideSun size={26} strokeWidth={1.5} />,
      position: {
        top: "14%",
        right: "2%",
        transform: "translate(-50%, -50%)",
        opacity: 0.3,
      },
    },
    {
      icon: <LucideCloud size={22} strokeWidth={1.5} />,
      position: {
        bottom: "21%",
        left: "3%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideFeather size={24} strokeWidth={1.5} />,
      position: {
        bottom: "2%",
        right: "3%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideDroplet size={20} strokeWidth={1.5} />,
      position: {
        top: "45%",
        left: "44%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideFlower size={26} strokeWidth={1.5} />,
      position: {
        top: "18%",
        left: "14%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
    {
      icon: <LucideZap size={22} strokeWidth={1.5} />,
      position: {
        top: "29%",
        left: "65.5%",
        transform: "translate(-50%, -50%)",
        opacity: 0.4,
      },
    },
  ];

  return (
    <>
      {doodlesWithPositions.map((doodle, index) => (
        <div
          key={index}
          className="absolute text-purple-400 pointer-events-none z-10"
          style={doodle.position}
        >
          {doodle.icon}
        </div>
      ))}
    </>
  );
};

export default DoodleOverlay;
