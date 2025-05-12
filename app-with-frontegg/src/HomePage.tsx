import { useAuth, ContextHolder } from "@frontegg/react";
import rio from '../src/assets/rio-wallpaper.jpeg';

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
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${rio})`,
            }}
        >
            <div className="absolute top-10 left-10 p-6 bg-black rounded-2xl shadow-2xl max-w-sm animate-fade-in">

                <img
                    className="w-20 h-20 rounded-full mb-4"
                    src={user?.profilePictureUrl}
                    alt={user?.name}
                />
                <h2 className="text-xl font-semibold mb-4 text-left">Bem-vindo, {user?.name}!</h2>
                <div className="flex gap-4">
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
