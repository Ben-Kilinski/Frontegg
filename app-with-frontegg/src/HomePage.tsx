import { useAuth } from '@frontegg/react';
import rio from '../src/assets/rio-wallpaper.jpeg';

export default function HomePage() {
  const { user, openAdminPortal } = useAuth(); 

  const logout = () => {
    const baseUrl = import.meta.env.VITE_FRONTEGG_BASE_URL!;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${rio})`,
      }}
    >
      <div className="relative -top-[14rem] -left-[38rem] rounded-2xl shadow-2xl max-w-sm animate-fade-in">
        <img
          className="w-20 h-20 rounded-full my-4 mx-auto"
          src={user?.profilePictureUrl}
          alt={user?.name}
        />
        <h2 className="text-xl font-semibold mb-4 text-center">
          Bem-vindo, {user?.name}!
        </h2>
        <div className="flex justify-center gap-4 p-6">
          <button
            onClick={openAdminPortal}
            className="bg-gray-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            ⚙ Settings
          </button>
          <button
            onClick={logout}
            className="bg-gray-900 opacity-90 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
