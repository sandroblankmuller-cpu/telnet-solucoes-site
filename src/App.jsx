export default function TelnetSolucoesSite() {
  const whatsappNumber = "5553981015050";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Telnet%20Solu%C3%A7%C3%B5es.`;

  const services = [
    {
      title: "Câmeras e monitoramento",
      text: "Venda, instalação e manutenção de sistemas de CFTV para operação, segurança e acompanhamento em tempo real.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Alarmes e proteção",
      text: "Projetos sob medida para empresas, com foco em prevenção, confiabilidade e continuidade das operações.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Controle de acesso",
      text: "Soluções para portarias, entradas restritas, condomínios e ambientes corporativos com mais controle e segurança.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Elétrica, lógica e infraestrutura",
      text: "Execução completa de infraestrutura técnica, cabeamento, organização e suporte para ambientes corporativos.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const differentials = [
    "Atendimento focado somente em empresas",
    "Especialista em manutenção de condomínios",
    "Instalação, suporte e manutenção preventiva",
    "Projetos completos em segurança e infraestrutura",
    "Representante Intelbras e atuação com outras marcas",
  ];

  const socials = [
    {
      name: "Instagram",
      href: "#",
      comingSoon: true,
    },
    {
      name: "YouTube",
      href: "#",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s ease forwards; }
        .float-slow { animation: floatSlow 5s ease-in-out infinite; }
      `}</style>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-600"
      >
        Falar no WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-lg">
              <svg viewBox="0 0 120 120" className="h-7 w-7 fill-current">
                <path d="M8 26c0-7.7 6.3-14 14-14h52c7.7 0 14 6.3 14 14v8c0 7.7-6.3 14-14 14H42c-7.7 0-14 6.3-14 14v12H22C14.3 74 8 67.7 8 60V26Zm70 40c0-6.6 5.4-12 12-12h18c6.6 0 12 5.4 12 12v18c0 6.6-5.4 12-12 12H90c-6.6 0-12-5.4-12-12V66Zm-38 4c0-6.6 5.4-12 12-12h24v16c0 7.7-6.3 14-14 14H52c-6.6 0-12-5.4-12-12V70Z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">telnet soluções</div>
              <div className="text-xs text-zinc-500">Segurança, infraestrutura e manutenção para empresas</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
            <a href="#servicos" className="transition hover:text-zinc-950">Serviços</a>
            <a href="#diferenciais" className="transition hover:text-zinc-950">Diferenciais</a>
            <a href="#intelbras" className="transition hover:text-zinc-950">Marcas</a>
            <a href="#contato" className="transition hover:text-zinc-950">Contato</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 fade-up">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200">
              Atendimento empresarial
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Soluções completas em segurança, elétrica, lógica e infraestrutura.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              A Telnet Soluções atua com venda, instalação e manutenção de câmeras, alarmes, controle de acesso, elétrica, lógica e infraestrutura completa, com foco especial na manutenção de condomínios e no atendimento exclusivo a empresas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 shadow-xl transition hover:scale-[1.02]"
              >
                Solicitar atendimento
              </a>
              <a
                href="#servicos"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Conhecer serviços
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black">Empresas</div>
                <div className="mt-1 text-sm text-zinc-300">Atendimento voltado ao setor corporativo</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black">Condomínios</div>
                <div className="mt-1 text-sm text-zinc-300">Especialista em manutenção e suporte</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black">Suporte</div>
                <div className="mt-1 text-sm text-zinc-300">Instalação, correção e manutenção preventiva</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 fade-up lg:justify-self-end">
            <div className="float-slow relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80"
                alt="Equipe técnica e sistemas de segurança corporativa"
                className="h-[420px] w-full rounded-[28px] object-cover lg:w-[560px]"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-3xl border border-white/10 bg-zinc-950/75 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-white">Projetos completos para sua operação</div>
                <div className="mt-2 text-sm leading-6 text-zinc-300">
                  Monitoramento, proteção, acesso, cabeamento e infraestrutura com atendimento técnico especializado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-up">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Serviços</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tudo que sua empresa precisa em segurança e infraestrutura</h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Atuamos do fornecimento à manutenção, garantindo soluções confiáveis, bem instaladas e preparadas para o dia a dia da operação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Diferenciais</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Atendimento técnico, visão prática e foco em continuidade</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              A Telnet Soluções entrega atendimento consultivo e execução técnica para ambientes corporativos, unindo segurança, infraestrutura e manutenção em um só parceiro.
            </p>

            <div className="mt-8 space-y-4">
              {differentials.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">✓</div>
                  <p className="text-sm leading-6 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
                alt="Instalação técnica em ambiente corporativo"
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-lg font-bold">Instalação profissional</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Equipe preparada para implementar sistemas com organização, segurança e atenção ao ambiente do cliente.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm sm:mt-12">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente empresarial e gestão operacional"
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-lg font-bold">Suporte e manutenção</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Mais segurança para empresas e condomínios com manutenção corretiva e preventiva conforme a necessidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intelbras" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-zinc-950 px-6 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Marcas</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Representante Intelbras, com flexibilidade para outras marcas</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
                Trabalhamos com soluções Intelbras e também atendemos projetos com outras marcas, sempre buscando o melhor encaixe técnico para cada operação, condomínio ou empresa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 lg:grid-cols-2">
              {['Intelbras', 'CFTV', 'Alarmes', 'Acesso'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-6 text-sm font-semibold text-zinc-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Contato</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Fale com a Telnet Soluções</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Entre em contato para orçamento, suporte, manutenção ou para entender qual estrutura atende melhor a sua empresa.
            </p>

            <div className="mt-8 space-y-5 text-sm text-zinc-700">
              <div>
                <div className="font-semibold text-zinc-950">WhatsApp e telefone</div>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-1 inline-block text-base font-medium text-zinc-700 hover:text-zinc-950">
                  (53) 98101-5050
                </a>
              </div>
              <div>
                <div className="font-semibold text-zinc-950">Endereço</div>
                <p className="mt-1 leading-6">
                  Edifício Shopping Zona Norte<br />
                  Av. Fernando Osório, 20 - Três Vendas<br />
                  Pelotas - RS, 96020-170<br />
                  Sala AB123
                </p>
              </div>
              <div>
                <div className="font-semibold text-zinc-950">Atuação</div>
                <p className="mt-1 leading-6">Atendimento exclusivo para empresas e condomínios.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Edif%C3%ADcio%20Shopping%20Zona%20Norte%20Av.%20Fernando%20Os%C3%B3rio%2C%2020%20Tres%20Vendas%2C%20Pelotas%20RS%2096020-170%20Sala%20AB123"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Ver localização
              </a>
            </div>
          </div>

          <div className="rounded-[32px] bg-zinc-950 p-8 text-white shadow-sm">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Redes sociais</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Presença digital em atualização</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Os canais de Instagram e YouTube podem ser ativados assim que os links oficiais estiverem disponíveis.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="text-lg font-bold">{social.name}</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    {social.comingSoon ? 'Link será atualizado em breve.' : 'Acessar canal'}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-bold">Quer atualizar depois?</div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Basta substituir os links dos botões pelas URLs oficiais do Instagram e do YouTube quando os canais estiverem prontos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-zinc-900">telnet soluções</span> • Segurança, infraestrutura e manutenção para empresas.
          </div>
          <div>Pelotas - RS • Atendimento empresarial</div>
        </div>
      </footer>
    </div>
  );
}
