import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/2348023429388"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
      bg-green-500 hover:bg-green-600
      text-white p-4 rounded-full shadow-lg
      transition-all duration-300
      hover:scale-110 active:scale-95"
    >
      <ChatBubbleLeftRightIcon className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;