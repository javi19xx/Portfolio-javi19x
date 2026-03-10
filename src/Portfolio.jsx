import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiLaravel, SiPhp } from "react-icons/si";
import { Code2, Server } from "lucide-react";
import './App.css';
const Card = ({ children, className = "" }) => (
  <div className={` ${className}`}>
    {children}
  </div>
);
//Tecnologías que utilizo
const skills = [
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" size={28} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={28} /> },
  { name: "PHP", icon: <SiPhp color="#8892BE" size={28} /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={28} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={28} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={28} /> },
  { name: "Vue", icon: <FaVuejs color="#4FC08D" size={28} /> },
  { name: "Laravel", icon: <SiLaravel color="#FF2D20" size={28} /> },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 1 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Portfolio() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 50);
  }, []);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="header-section">
        <motion.img
          src="/foto.png"
          alt="Javier Suárez Cabello"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}/>

        <motion.div
          className="text-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h1>Javier Suárez Cabello</h1>
          <h2>Desarrollador de Aplicaciones Web</h2>
          <p>
            Soy un desarrollador web apasionado por la tecnología y el aprendizaje continuo.
            Trabajo con TypeScript, JavaScript y PHP para construir aplicaciones modernas y eficientes.
            Utilizo frameworks como React y Vue para el frontend y Laravel para el backend.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 p-8">
        <motion.div variants={item}>
          <Card className="p-6 flex flex-col items-center space-y-4">
            <Code2 className="text-indigo-400" size={36} />
            <h2 className="text-2xl font-semibold">Frontend</h2>
            <p className="text-zinc-400 text-center">
              Desarrollo interfaces modernas utilizando React, Vue, TypeScript y JavaScript,
              creando experiencias rápidas e interactivas para los usuarios. Además de un backend escalable y seguro mediante frameworks con Laravel junto a postgresql, sqlite o MySQL.
            </p>
          </Card>
        </motion.div>
        <hr />
        <motion.div variants={item}>
          <Card className="p-6 flex flex-col items-center space-y-4">
            <Server className="text-cyan-400" size={36} />
            <h2 className="text-2xl font-semibold">Backend</h2>
            <p className="text-zinc-400 text-center">
              Construcción de APIs y aplicaciones backend con PHP (Laravel),
              enfocándome en código limpio, escalable y seguro.
            </p>
          </Card>
        </motion.div>
      </motion.section>
       <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 p-8">
        <hr />
        <motion.div variants={item}>
          <Card className="p-6 flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold">Aplicaciones realizadas</h2>
            <p className="text-zinc-400 text-center">
              La Colección de mis proyectos de desarrollo, código y experimentos en diferentes tecnologías las puedes encontrar aquí: <a href="https://github.com/javi19xx"> Enlace a GitHub</a>
            </p>
          </Card>
        </motion.div>
      </motion.section>
<hr />
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="p-8 space-y-8">
        <motion.h2 variants={item} className="text-3xl font-bold text-center">
          Lenguajes de programación y frameworks
        </motion.h2>

        <motion.div variants={container} className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((tech) => (
            <motion.div key={tech.name} variants={item}>
              <Card className="bg-zinc-900 border-zinc-800 rounded-2xl hover:bg-zinc-800 transition flex flex-col items-center justify-center p-6">
                {tech.icon}
                <span className="mt-2 text-white font-medium">{tech.name}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 10 }}
        className="text-center text-zinc-500 pt-10 pb-6">
        <br />
        <br />
        © Año 2026 - Javier Suárez Cabello
      </motion.footer>
    </div>
  );
}