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
            Full Stack Developer • Python • Node.js • TypeScript • Front End
          </p>
        </div>

        {/* SOBRE */}
        <Card className="bg-slate-900/70 border-slate-800">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I am a Full Stack Developer focused on Python, Node.js, TypeScript, and modern Front End technologies.
              I build complete web applications, developing robust APIs and responsive user interfaces,
              always prioritizing clean code, organization, and scalability.
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
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <p className="text-slate-300">
              Federal University of Pará (UFPA)
            </p>
            <p className="text-slate-400">Bachelor’s Degree — In Progress</p>
          </CardContent>
        </Card>

        {/* PROJETOS */}
        <Card className="bg-slate-900/70 border-slate-800">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            <p className="text-slate-300">
              Full Stack applications with Front End and Back End integration, REST APIs,
              authentication, CRUD operations, databases, and deployment.
            </p>
            <p className="text-slate-400">(Links to GitHub repositories and live projects can be added)</p>
          </CardContent>
        </Card>

        {/* CONTATO */}
        <footer className="flex justify-center gap-6 pt-10">
          <a href="https://github.com/GabrielAlcant" className="hover:text-white text-slate-300"><Github /></a>
          <a href="https://www.linkedin.com/in/gabriel-ribeiro-de-alcântara-378176268" className="hover:text-white text-slate-300"><Linkedin /></a>
          <a href="mailto:gabrielribeiro969@gmail.com" className="hover:text-white text-slate-300"><Mail /></a>
        </footer>
      </section>
    </main>
  );
}
