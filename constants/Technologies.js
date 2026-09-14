import { FaApple, FaDatabase, FaGitSquare, FaGithub, FaJsSquare, FaPython, FaReact, FaWindows, FaBrain } from "react-icons/fa";
import { SiFlask, SiDocker, SiJupyter, SiPostman, SiPytorch, SiSqlite, SiTensorflow, SiTypescript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { Icon } from "@iconify/react";

export const technologies = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "JavaScript", icon: <FaJsSquare size={32} /> },
      { name: "TypeScript", icon: <SiTypescript size={32} /> },
    ],
  },

  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", icon: <SiPytorch size={32} /> },
      { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
      {
    name: "Hugging Face",
    icon: (
      <Icon
        icon="simple-icons:huggingface"
        width={32}
        height={32}
        className="text-black dark:text-white"
      />
    ),
  },
      {
  name: "LlamaIndex",
  icon: (
    <img
      src="/llamaindex.png"
      alt="LlamaIndex"
      className="w-8 h-8 object-contain"
    />
  ),
},
      {
        name: "LangChain",
        icon: (
          <img
            src="/langchain.png"
            alt="LangChain"
            width={32}
            height={32}
            style={{
              objectFit: "contain",
              filter: "invert(1)",
            }}
          />
        ),
      },
    ],
  },

  {
    category: "Frameworks & Backend",
    items: [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Flask", icon: <SiFlask size={32} /> },
    ],
  },

  {
    category: "Databases & Data",
    items: [
      { name: "SQL", icon: <SiSqlite size={32} /> },
      { name: "ChromaDB", icon: <FaDatabase size={32} /> },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Docker", icon: <SiDocker size={32} /> },
      { name: "Postman", icon: <SiPostman size={32} /> },
      { name: "Git", icon: <FaGitSquare size={32} /> },
      { name: "GitHub", icon: <FaGithub size={32} /> },
      { name: "Jupyter", icon: <SiJupyter size={32} /> },
      { name: "VS Code", icon: <TbBrandVscode size={32} /> },
    ],
  },

  {
    category: "Platforms",
    items: [
      { name: "Windows", icon: <FaWindows size={32} /> },
      { name: "macOS", icon: <FaApple size={32} /> },
    ],
  },
];