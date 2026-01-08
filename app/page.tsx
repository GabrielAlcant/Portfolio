import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-6 py-16">
      <section className="max-w-5xl mx-auto space-y-20">

        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gabriel Ribeiro</h1>
          <p className="text-xl text-slate-300">
            Desenvolvedor Full Stack • Python • Node.js • TypeScript • Front End
          </p>
        </div>

        {/* SOBRE */}
        <Card className="bg-slate-900/70 border-slate-800">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sobre mim</h2>
            <p className="text-slate-300 leading-relaxed">
              Sou desenvolvedor Full Stack com foco em Python, Node.js, TypeScript e Front End moderno.
              Desenvolvo aplicações web completas, criando APIs robustas e interfaces responsivas,
              sempre priorizando código limpo, organização e escalabilidade.
            </p>
          </CardContent>
        </Card>

        {/* HABILIDADES */}
        <section className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Back End",
              items: ["Python (Flask)", "Node.js", "TypeScript", "APIs REST"],
            },
            {
              title: "Front End",
              items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
            },
            {
              title: "Banco de Dados",
              items: ["PostgreSQL", "SQLite", "Modelagem de dados"],
            },
            {
              title: "Outros",
              items: ["Git & GitHub", "Deploy", "Boas práticas", "Full Stack"],
            },
          ].map((block) => (
            <Card key={block.title} className="bg-slate-900/70 border-slate-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{block.title}</h3>
                <ul className="space-y-2 text-slate-300">
                  {block.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* FORMAÇÃO */}
        <Card className="bg-slate-900/70 border-slate-800">
          <CardContent className="p-8 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Formação Acadêmica</h2>
            <p className="text-slate-300">
              Ciência da Computação - Universidade Federal do Pará (UFPA)
            </p>
            <p className="text-slate-400">Graduação em andamento</p>
          </CardContent>
        </Card>

        {/* PROJETOS */}
        <Card className="bg-slate-900/70 border-slate-800">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Projetos</h2>
            <p className="text-slate-300">
              Aplicações Full Stack com integração Front End e Back End, APIs REST,
              autenticação, CRUD, bancos de dados e deploy.
            </p>
            <p className="text-slate-400">(Links para GitHub e projetos online podem ser adicionados)</p>
          </CardContent>
        </Card>

        {/* CONTATO */}
        <footer className="flex justify-center gap-6 pt-10">
          <a href="https://github.com/GabrielAlcant" className="hover:text-white text-slate-300"><Github /></a>
          <a href="https://linkedin.com/in/gabriel-ribeiro-de-alcântara-378176268" className="hover:text-white text-slate-300"><Linkedin /></a>
          <a href="mailto:gabrielribeiro969@gmail.com" className="hover:text-white text-slate-300"><Mail /></a>
        </footer>
      </section>
    </main>
  );
}
