import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const WHATSAPP_NUMBER = "8801768626650";
const MESSENGER_USERNAME = "atiksagor24.50.80";

export default function FloatingChat() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Atik! I visited your portfolio and would like to connect with you.",
  )}`;

  const messengerLink = `https://m.me/${MESSENGER_USERNAME}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full
          bg-[#25D366] text-white shadow-lg transition-transform
          duration-200 hover:scale-110"
      >
        <FaWhatsapp size={29} />
      </a>

      {/* Messenger */}
      <a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me on Facebook Messenger"
        title="Message on Messenger"
        className="flex h-14 w-14 items-center justify-center rounded-full
          bg-[#0084FF] text-white shadow-lg transition-transform
          duration-200 hover:scale-110"
      >
        <FaFacebookMessenger size={27} />
      </a>
    </div>
  );
}
