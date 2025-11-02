import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useDeltaAuth } from '@/contexts/DeltaAuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User, Home } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';

interface PortalLayoutProps {
  children: ReactNode;
}

export function PortalLayout({ children }: PortalLayoutProps) {
  const { user, role, signOut } = useDeltaAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span className="font-semibold">Delta Personal Services</span>
            </Link>
            {user && (
              <Link
                to={role === 'admin' ? '/portal/admin' : '/portal/dashboard'}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {role === 'admin' ? 'Admin Panel' : 'Dashboard'}
              </Link>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            {user && (
              <>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      
      <main className="container py-8">
        {children}
      </main>
    </div>
  );
}
