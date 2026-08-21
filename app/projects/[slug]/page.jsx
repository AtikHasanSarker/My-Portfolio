import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, getProjectBySlug } from "@/data/projects";
import BackButton from "@/components/actions/BackButton";

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
    <section className="relative min-h-screen py-16 overflow-hidden">
      <div className="relative z-10 w-11/12 max-w-4xl mx-auto">
        {/* Back Link */}
        <BackButton />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>

        {/* Screenshot */}
        <div className="relative rounded-4xl overflow-hidden border mb-12">
          <Image
            width={900}
            height={500}
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 pointer-events-none" />
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-8 max-w-3xl">
          {project.fullDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5">
            Tech{" "}
            <span className="font-semibold">
              Stack
            </span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="theme-card px-4 py-2 border rounded-full text-sm"
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
            <span className="font-semibold">
              Features
            </span>
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-violet-400 mt-0.5 shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Contributions */}
        {project.keyContributions?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-5">
              Key{" "}
              <span className="font-semibold">
                Contributions
              </span>
            </h2>
            <ul className="space-y-3">
              {project.keyContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-violet-400 mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges Faced */}
        {project.challengesFaced?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-5">
              Challenges{" "}
              <span className="font-semibold">
                Faced
              </span>
            </h2>
            <ul className="space-y-3">
              {project.challengesFaced.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-violet-400 mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Future Plans */}
        {project.futurePlans?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-5">
              Future{" "}
              <span className="font-semibold">
                Plans
              </span>
            </h2>
            <ul className="space-y-3">
              {project.futurePlans.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-violet-400 mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-button inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={18} />
            Live Preview
          </a>

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-icon-button inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <SiGithub size={18} />
              GitHub Repository
            </a>
          )}
        </div>

        {/* Bottom Back Link */}
        <div className="pt-8 border-t">
          <BackButton />
        </div>
      </div>
    </section>
  );
}
