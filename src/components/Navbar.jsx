import ThemeToggle from "./themeToggle";

function NavBar() {
  return (
    <header>
      <nav className="bg-gray-300 dark:bg-slate-700 m-4 gap-4 rounded-3xl flex flex-col items-start sm:flex-row sm:justify-between sm:items-center p-4 font-mono">
        <a className="flex items-center gap-2 justify-between" href="/">
          <img className="h-10 min-[320px]:h-14" src="/icon.svg" alt="Logo" />
          <span className="font-semibold text-slate-600 dark:text-slate-100 text-xl min-[320px]:text-2xl">
            Reactionary
          </span>
          <ThemeToggle />
        </a>
        <ul className="flex text-base text-slate-600 dark:text-slate-100 gap-4 md:text-lg">
          <li>
            <a href="https://github.com/shellheim/reactionary">Source</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
