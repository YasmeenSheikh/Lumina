import { FiCode, FiBookOpen, FiEdit3, FiCpu } from "react-icons/fi";

const cardData = [
  {
    text: "Improve the readability of the following code",
    icon: FiCode,
    hiddenOnMobile: false,
  },
  {
    text: "Help explain a concept in a kid-friendly way",
    icon: FiBookOpen,
    hiddenOnMobile: false,
  },
  {
    text: "Come up with a recipe for an upcoming event",
    icon: FiEdit3,
    hiddenOnMobile: true,
  },
  {
    text: "Explain how something works like an engineer",
    icon: FiCpu,
    hiddenOnMobile: true,
  },
];

export default function Cards() {
  return (
    <section className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {cardData.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`${
              card.hiddenOnMobile ? "hidden md:flex" : "flex"
            } bg-white dark:bg-gray-900 shadow-sm rounded-2xl p-5 flex-col justify-between hover:shadow-md transition`}
          >
            <p className="text-gray-800 dark:text-gray-100 font-medium">
              {card.text}
            </p>
            <Icon className="mt-6 text-xl text-gray-500 dark:text-gray-400" />
          </div>
        );
      })}
    </section>
  );
}
