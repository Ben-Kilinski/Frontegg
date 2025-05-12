import { useAuth, ContextHolder } from "@frontegg/react";

export default function HomePage() {
  const { user } = useAuth();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const openAdminPortal = () => {
    ContextHolder.getContext().openAdminPortal();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524015368236-611b1647b47e')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
        <img
          className="w-20 h-20 rounded-full mx-auto mb-4"
          src={user?.profilePictureUrl}
          alt={user?.name}
        />
        <h2 className="text-xl font-semibold mb-4">Bem-vindo, {user?.name}!</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={openAdminPortal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            ⚙ Settings
          </button>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
