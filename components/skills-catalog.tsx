import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BuiltinSkill = {
  name: string;
  description: string;
  category: string;
};

const builtinSkills: BuiltinSkill[] = [
  {
    name: "agent-browser",
    description:
      "Browser automation for testing and web interactions using the agent-browser CLI.",
    category: "Testing",
  },
  {
    name: "ai-elements",
    description:
      "Build AI chat interfaces -- conversations, messages, tool displays, prompt inputs.",
    category: "AI",
  },
  {
    name: "ai-sdk-4",
    description:
      "Patterns for building AI-powered applications with AI SDK version 4.",
    category: "AI",
  },
  {
    name: "ai-sdk-5",
    description:
      "Patterns for building AI-powered applications with AI SDK version 5.",
    category: "AI",
  },
  {
    name: "ai-sdk-6",
    description:
      "Patterns for AI-powered applications with AI SDK 6. Current default version.",
    category: "AI",
  },
  {
    name: "aws-aurora-dsql",
    description:
      "AWS Aurora DSQL integration with IAM authentication using pg.",
    category: "Database",
  },
  {
    name: "aws-aurora-postgresql",
    description: "AWS Aurora PostgreSQL integration with IAM authentication.",
    category: "Database",
  },
  {
    name: "aws-dynamodb",
    description: "Amazon DynamoDB integration with IAM authentication.",
    category: "Database",
  },
  {
    name: "charts",
    description:
      "Charts and data visualizations using shadcn/ui with Recharts.",
    category: "UI",
  },
  {
    name: "chat-sdk",
    description:
      "Chat SDK for bots across Slack, Teams, Google Chat, Discord, GitHub, and Linear.",
    category: "AI",
  },
  {
    name: "deep-infra",
    description: "Deep Infra AI integration for model inference.",
    category: "AI",
  },
  {
    name: "fal",
    description:
      "Fal AI integration for image generation using @fal-ai/serverless.",
    category: "AI",
  },
  {
    name: "github-cli",
    description:
      "Execute GitHub CLI commands for repository, issue, PR, and check viewing.",
    category: "DevOps",
  },
  {
    name: "grok",
    description: "xAI Grok integration using AI SDK for text generation.",
    category: "AI",
  },
  {
    name: "groq",
    description: "Groq AI integration for fast LLM inference.",
    category: "AI",
  },
  {
    name: "neon",
    description:
      "Neon serverless PostgreSQL integration using @neondatabase/serverless.",
    category: "Database",
  },
  {
    name: "nuxt",
    description:
      "Nuxt 4+ server routes, file-based routing, middleware patterns, and composables.",
    category: "Framework",
  },
  {
    name: "nuxt-ui",
    description:
      "Build UIs with @nuxt/ui v4 -- 125+ accessible Vue components.",
    category: "UI",
  },
  {
    name: "python-aurora",
    description:
      "AWS Aurora PostgreSQL and Aurora DSQL Python integration using asyncpg.",
    category: "Python",
  },
  {
    name: "python-aws-dynamodb",
    description: "Amazon DynamoDB Python integration using aioboto3.",
    category: "Python",
  },
  {
    name: "python-neon",
    description: "Neon serverless PostgreSQL Python integration using asyncpg.",
    category: "Python",
  },
  {
    name: "python-services",
    description:
      "Building Python backend services using Vercel experimentalServices API.",
    category: "Python",
  },
  {
    name: "python-supabase",
    description:
      "Supabase Python integration with async client and query builder.",
    category: "Python",
  },
  {
    name: "python-upstash-redis",
    description:
      "Upstash Redis Python integration with async HTTP-based client.",
    category: "Python",
  },
  {
    name: "r3f",
    description:
      "React Three Fiber for creating 3D scenes, models, and animations.",
    category: "UI",
  },
  {
    name: "rapier",
    description:
      "3D physics engine using @react-three/rapier for simulations and colliders.",
    category: "UI",
  },
  {
    name: "shadcn",
    description:
      "Manages shadcn components and projects -- adding, searching, fixing, styling.",
    category: "UI",
  },
  {
    name: "shopify",
    description: "Shopify Storefront API integration for e-commerce.",
    category: "Integration",
  },
  {
    name: "skill-creation",
    description:
      "Build and iterate on custom skills stored in the memory system.",
    category: "DevOps",
  },
  {
    name: "stripe",
    description: "Stripe Checkout integration patterns for payments.",
    category: "Integration",
  },
  {
    name: "supabase-next15",
    description:
      "Supabase integration patterns for Next.js 15 with auth and database.",
    category: "Database",
  },
  {
    name: "supabase-next16",
    description:
      "Supabase integration patterns for Next.js 16 with auth and database.",
    category: "Database",
  },
  {
    name: "upstash-redis",
    description:
      "Upstash Redis integration for serverless caching and data storage.",
    category: "Database",
  },
  {
    name: "vercel-blob",
    description:
      "Vercel Blob storage integration for file uploads and management.",
    category: "Integration",
  },
  {
    name: "vercel-cli",
    description:
      "Manage Vercel project settings, domains, env vars, and routing rules.",
    category: "DevOps",
  },
  {
    name: "vercel-toolbar",
    description:
      "List or check Vercel toolbar comments and threads for a project.",
    category: "DevOps",
  },
  {
    name: "workflow",
    description:
      "Creates durable, resumable workflows using Vercel Workflow SDK.",
    category: "Integration",
  },
  {
    name: "find-skills",
    description:
      "Helps discover and install agent skills for extending capabilities.",
    category: "DevOps",
  },
  {
    name: "frontend-design",
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality.",
    category: "UI",
  },
  {
    name: "json-render-core",
    description:
      "Core package for defining schemas, catalogs, and AI prompt generation for json-render.",
    category: "Integration",
  },
  {
    name: "json-render-image",
    description:
      "Image renderer for json-render that turns JSON specs into SVG and PNG via Satori.",
    category: "Integration",
  },
  {
    name: "json-render-react-native",
    description:
      "React Native renderer for json-render that turns JSON specs into native mobile UIs.",
    category: "Integration",
  },
  {
    name: "json-render-react",
    description:
      "React renderer for json-render that turns JSON specs into React components.",
    category: "Integration",
  },
  {
    name: "json-render-shadcn",
    description:
      "Pre-built shadcn/ui components for json-render with Radix UI and Tailwind CSS.",
    category: "Integration",
  },
];

const categoryColors: Record<string, string> = {
  AI: "bg-violet-100 text-violet-800 border-violet-200",
  Database: "bg-emerald-100 text-emerald-800 border-emerald-200",
  UI: "bg-sky-100 text-sky-800 border-sky-200",
  Framework: "bg-orange-100 text-orange-800 border-orange-200",
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Integration: "bg-rose-100 text-rose-800 border-rose-200",
  DevOps: "bg-slate-100 text-slate-800 border-slate-200",
  Testing: "bg-teal-100 text-teal-800 border-teal-200",
};

const categories = [
  "AI",
  "Database",
  "UI",
  "Framework",
  "Python",
  "Integration",
  "DevOps",
  "Testing",
] as const;

export function SkillsCatalog() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4">
      <header className="flex flex-col gap-2">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground text-balance">
          Built-in Skills
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          {builtinSkills.length} skills available across {categories.length}{" "}
          categories.
        </p>
      </header>

      {categories.map((category) => {
        const skills = builtinSkills.filter((s) => s.category === category);
        if (skills.length === 0) return null;

        return (
          <section key={category} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h2 className="font-sans text-lg font-semibold text-foreground">
                {category}
              </h2>
              <span className="text-muted-foreground text-sm">
                ({skills.length})
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="gap-1 border-border/60 py-3 shadow-none"
                >
                  <CardHeader className="gap-0 py-0">
                    <div className="flex items-center gap-2">
                      <CardTitle className="font-mono text-sm font-medium">
                        {skill.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={`px-1.5 py-0 text-[10px] leading-4 ${categoryColors[skill.category]}`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="py-0">
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
