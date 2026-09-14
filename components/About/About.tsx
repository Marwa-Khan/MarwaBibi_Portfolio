import Image from "next/image";
import { technologies } from "@/constants/Technologies";
import SectionContainer from "../SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className="relative pb-1">
        <div className=" pt-2 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
          <div className="mt-5 w-full h-px bg-zinc-800" />

          <div className="flex flex-col md:flex-row md:items-start space-y-8 md:space-x-8 md:space-y-0">
            <div className="flex justify-center md:justify-start min-w-fit md:-mt-[18px]">
              {/* <div className="h-[300px] w-[250px] overflow-hidden rounded-[130px] border-2"> */}
                <Image
                src="/portfolio-pic.png"
                alt="Marwa Bibi"
                width={320}
                height={320}
                className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain"
                quality={100}
                priority
              />
              {/* </div> */}
            </div>
            <div className="flex flex-col space-y-6">
              <article className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tight  self-center md:self-start">
                 Marwa Bibi
                </h2>
                <h3 className="text-sm font-semibold self-center md:self-start">
                  Software Developer
                </h3>
              </article>
              <article className="flex flex-col space-y-2 w-full ">
                <p className=" text-sm leading-7 text-center md:text-start">
                  I have a background in Computer Science and Software Engineering, 
                  with experience across AI, machine learning, software development, 
                  and research. I enjoy building intelligent systems, 
                  exploring new technologies, and turning ideas into practical solutions.
                </p>
                <p className="text-sm leading-7 text-center md:text-start">
                  My interests span machine learning, NLP, computer vision, generative AI,
                   and intelligent software systems. I am open to both research and 
                   industry opportunities where I can contribute, learn, and work on meaningful technology.
                </p>
              </article>
              <article className="flex flex-col space-y-2 w-full md:w-3/4">
                <h3 className="pt-18 text-3xl font-bold tracking-tight self-center md:self-start">
                  Technologies I use
                </h3>
                <div className="pt-5 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center md:justify-start text-sm">
                  {technologies.map((category) =>
                    category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center flex-col"
                      >
                        {tech.icon}
                        <span className="mt-2">{tech.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
