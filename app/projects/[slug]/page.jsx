import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Atik Hasan`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden text-white">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-700/15 blur-[120px] rounded-full" />

      <div className="relative z-10 w-11/12 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-pink-400" />
          {project.badge}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {project.name}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
          {project.fullDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-violet-400 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(167,139,250,0.35)]"
          >
            <ExternalLink size={18} />
            Live Preview
          </a>

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-medium"
            >
              <SiGithub size={18} />
              GitHub
            </a>
          )}
        </div>

        {/* Screenshot */}
        <div className="relative rounded-4xl overflow-hidden border border-white/10 mb-12">
          <Image
            width={900}
            height={500}
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5">
            Tech{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5">
            Key{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-300"
              >
                <CheckCircle
                  size={18}
                  className="text-violet-400 mt-0.5 shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Back Link */}
        <div className="pt-8 border-t border-white/10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
