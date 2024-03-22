import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-lg bg-teal-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-teal-300 focus:bg-teal-300 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300  hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    answer:
      "inline-block text-sm md:text-lg rounded-lg border-2 border-gray-700 hover:border-gray-400 font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors duration-300 disabled:cursor-not-allowed py-1 md:py-5 w-1/3",
    rewind:
      "hover:scale-110 border-2 hover:border-orange-100 hover:rounded-lg p-3 transition-all duration-300 text-[20px]",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
