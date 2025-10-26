export default function Loader() {
  return (
    <div className="flex space-x-2 justify-center items-center  bg-gray-900">
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></span>
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.5s]"></span>
    </div>
  );
}
