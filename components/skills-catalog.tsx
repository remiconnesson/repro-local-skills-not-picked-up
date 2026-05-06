import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import skillsLock from "@/skills-lock.json";

type SkillEntry = {
  source: string;
  sourceType: string;
  skillPath: string;
  computedHash: string;
};

const skills = skillsLock.skills as Record<string, SkillEntry>;

function getSourceOrg(source: string): string {
  return source.split("/")[0] ?? source;
}

function getSourceColor(org: string): string {
  switch (org) {
    case "vercel":
    case "vercel-labs":
      return "bg-foreground text-background";
    case "anthropics":
      return "bg-amber-100 text-amber-800";
    case "mattpocock":
      return "bg-sky-100 text-sky-800";
    case "pproenca":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function getCategoryFromPath(skillPath: string): string | null {
  if (skillPath.includes(".experimental")) return "experimental";
  if (skillPath.includes(".curated")) return "curated";
  return null;
}

function getCategoryBadgeClass(category: string): string {
  switch (category) {
    case "experimental":
      return "border-amber-300 text-amber-700 bg-amber-50";
    case "curated":
      return "border-emerald-300 text-emerald-700 bg-emerald-50";
    default:
      return "";
  }
}

const sortedSkills = Object.entries(skills).sort(([a], [b]) =>
  a.localeCompare(b),
);

export function SkillsCatalog() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground text-balance">
          Skills Catalog
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          {sortedSkills.length} skills installed from{" "}
          {
            new Set(Object.values(skills).map((s) => getSourceOrg(s.source)))
              .size
          }{" "}
          sources. Hashes serve as version identifiers for git-sourced skills.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3">
        {sortedSkills.map(([name, skill]) => {
          const org = getSourceOrg(skill.source);
          const category = getCategoryFromPath(skill.skillPath);
          const shortHash = skill.computedHash.slice(0, 8);

          return (
            <Card key={name} className="py-4 shadow-none">
              <CardHeader className="gap-1 py-0">
                <div className="flex items-center gap-2">
                  <CardTitle className="font-mono text-sm">{name}</CardTitle>
                  {category && (
                    <Badge
                      variant="outline"
                      className={`text-[10px] px-1.5 py-0 leading-4 ${getCategoryBadgeClass(category)}`}
                    >
                      {category}
                    </Badge>
                  )}
                </div>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <Badge
                    className={`text-[10px] px-1.5 py-0 leading-4 font-normal border-0 ${getSourceColor(org)}`}
                  >
                    {skill.source}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="py-0">
                <code className="font-mono text-[11px] text-muted-foreground">
                  {shortHash}
                </code>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
