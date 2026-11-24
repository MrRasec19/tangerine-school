const WHATSAPP_PHONE = '+526621998313';

const WHATSAPP_MESSAGE =
	'¡Vengo desde la web! 🍊✨ Me interesa agendar mi entrevista de colocación de nivel 🤓';

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
	WHATSAPP_MESSAGE
)}`;
