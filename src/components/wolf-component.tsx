import { personalities, getPersonalityById, type Personality } from "@/assets/data";

export function WolfCard({ wolf }: { wolf: Personality }) {
  return (
    <article className="bg-card text-card-foreground rounded-lg shadow-md/20 overflow-hidden p-6 max-w-xs">
      <img 
        src={wolf.img} 
        alt={wolf.name} 
        className="w-full h-50 object-cover drop-shadow-xl rounded-xl" 
      />
      <div className="p-4 justify-items-center">
        <h3 className="text-lg font-semibold">
          {wolf.name}
        </h3>
        <p className="text-sm mt-2">
          {wolf.description || "Ingen beskrivning tillgänglig."}
        </p>
      </div>
    </article>
  );
}

// För att hämta specifik varg, om tom parantes visas alla vargar 
export default function WolfComponent ({ id, wolf }: { id?: string; wolf?: Personality }) {
  const resolved = wolf ?? (id ? getPersonalityById(id) : undefined);

  if (resolved) {
    return <WolfCard wolf={resolved} />;
  }

  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {personalities.map(p => <WolfCard key={p.id} wolf={p} />)}
    </section>
  )
}