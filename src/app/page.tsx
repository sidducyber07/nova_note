import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <h1 className="text-2xl font-bold text-foreground">nova_note</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Your AI-Powered <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Workspace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notion meets AI. Organize your thoughts, create beautiful notes, and let AI supercharge your productivity with intelligent summaries, writing enhancement, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg">
                Start Free
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card/50 backdrop-blur border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Powerful Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Notes',
                description: 'Create, organize, and manage your notes with AI-powered suggestions.',
                icon: '📝',
              },
              {
                title: 'AI Assistant',
                description: 'Summarize, enhance writing, extract tasks with GPT-4 powered AI.',
                icon: '🤖',
              },
              {
                title: 'Document Upload',
                description: 'Upload PDFs and text files for instant AI analysis and extraction.',
                icon: '📄',
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2026 nova_note. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}