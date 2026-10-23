interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Header = ({isDark, toggleDark}: HeaderProps) => {
  
  return (
    <div className="flex justify-between px-4 sm:px-6 md:px-10 py-3 bg-white dark:bg-Blue-900-Dark-Mode-Elements shadow transition-colors">
      <div>
        <h1 className="font-bold text-Grey-950-Light-Mode-Text dark:text-white">
          Where in the world?
        </h1>
      </div>
      <div
        className="flex gap-1 items-center cursor-pointer select-none"
        onClick={toggleDark}
        role="button"
        aria-pressed={isDark}
        tabIndex={0}
      >
        <img src={isDark ? "src/assets/icons/claro.png" : "src/assets/icons/oscuro.png"} className="w-4" alt={isDark ? "Switch to light mode" : "Switch to dark mode"} />
        <div className="text-Grey-950-Light-Mode-Text dark:text-white">
          {isDark ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </div>
  );
};
