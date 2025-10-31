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
    <main className="flex min-h-screen flex-col justify-between bg-[#f8f8f8] px-6 py-14 font-sans">
      <div className="flex flex-col items-center justify-center flex-1 text-center">

        <div
          className={`max-w-2xl transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {/* Título */}
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-8 tracking-tight">
            Empreendedorismo, sem perder tempo.
          </h1>

          {/* Subtexto */}
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
            Receba atualizações semanais por e-mail.
          </p>

          {/* Formulário com input clean */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Seu email principal"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#15803d]/50 transition"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#15803d] text-white rounded-lg font-medium hover:bg-[#136a32] transition-all duration-200 active:scale-[0.97]"
            >
              Inscrever-se
            </button>
          </form>

          {/* Rodapé pequeno */}
          <p className="text-sm text-gray-500 mt-6">
            Gratuito. Zero spam. Cancele quando quiser.
          </p>
        </div>
      </div>

      <footer className="text-center text-gray-400 text-xs mt-12">
        © Cataneo Contabilidade · {new Date().getFullYear()}
      </footer>
    </main>
  );
}