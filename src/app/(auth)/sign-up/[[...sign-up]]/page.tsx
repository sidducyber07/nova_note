import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">nova_note</h1>
          <p className="mt-2 text-muted-foreground">Create your AI workspace</p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}