"use client"
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = ["Case 1", "Case 2", "Case 3", "Case 4"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : " hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-4 py-2  relative rounded-full`}
    >
      <span className="relative z-10 text-lg">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;