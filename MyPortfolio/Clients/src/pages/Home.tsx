import DinoLogo from "../assets/Logo.png";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="
      min-h-[calc(100vh-120px)]
      flex items-center justify-center
    "
    >
      <div
        className="
        grid grid-cols-1 md:grid-cols-2
        gap-10 items-center
        max-w-6xl w-full px-6
      "
      >
        <div className="flex justify-center">
          <img
            src={DinoLogo}
            alt="profile"
            className="
              w-64 h-64 md:w-80 md:h-80
              object-contain rounded-2xl
              
            "
          />
        </div>

        <div
          className="
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          p-8 rounded-2xl shadow-lg
          space-y-4
        "
        >
          <h1 className="text-3xl font-bold">Hi, I’m Kittamet 👋</h1>

          <p className="text-gray-600 dark:text-gray-300">
            I’m a full-stack developer Naja
          </p>

          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/Dinozexe"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      border border-gray-300 dark:border-gray-600
      hover:bg-gray-100 dark:hover:bg-gray-700
      transition
    "
            >
              <FaGithub className="text-xl" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/_aktmwyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      border border-gray-300 dark:border-gray-600
      hover:bg-gray-100 dark:hover:bg-gray-700
      transition
    "
            >
              <FaInstagram className="text-xl" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
