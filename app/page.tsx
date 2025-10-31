"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput.value;

    const substackUrl = "https://paulocataneo.substack.com/subscribe";
    window.location.href = `${substackUrl}?email=${encodeURIComponent(email)}`;
  };

  return (
    <main className="flex min-h-screen flex-col justify-between bg-white px-6 py-14 font-sans">
      <div className="flex flex-col items-center justify-center flex-1 text-center">

        {/* Logo */}
        <div className="mb-6 opacity-90">
          <img
            src="/logo-hexawise.png"
            alt="Hexawise Logo"
            className="w-20 h-auto mx-auto"
          />
        </div>

        <div
          className={`max-w-2xl transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Empreender com estratégia e clareza.
          </h1>

          <p className="text-lg text-[#4A5568] mb-10 leading-relaxed max-w-xl mx-auto">
            Receba atualizações semanais por e-mail.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu e-mail principal"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0C2338]/30 transition"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0C2338] text-white rounded-lg font-medium hover:bg-[#0A1A2A] transition-all duration-300 active:scale-[0.98]"
            >
              Inscrever-se
            </button>
          </form>

          <p className="text-sm text-[#6B7280] mt-6">
            Conteúdo gratuito e exclusivo. Zero spam. Cancele quando quiser.
          </p>
        </div>
      </div>

      <footer className="text-center text-[#9CA3AF] text-xs mt-12">
        © HEXAWISE · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
