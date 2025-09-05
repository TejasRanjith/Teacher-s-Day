import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-4 md:p-6 border-b border-border/20 flex justify-center items-center bg-primary shadow-lg">
      <div className="flex items-center gap-2">
        <Sparkles className="w-8 h-8 text-accent" />
        <h1 className="text-3xl font-headline font-bold text-accent">Festivio</h1>
      </div>
    </header>
  );
}
