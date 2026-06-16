
// Şifre doğrulaması yaparken doğrudan .env içindeki gizli anahtara bakıyoruz
const ORIGINAL_SECRET_KEY = import.meta.env.VITE_ADMIN_SECRET_KEY;
