import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type DeltaAppRole = 'admin' | 'applicant';

interface DeltaAuthContextType {
  user: User | null;
  session: Session | null;
  role: DeltaAppRole | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, userData: {
    full_name: string;
    phone_number: string;
    date_of_birth: string;
    nationality: string;
    applicant_type: string;
  }) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const DeltaAuthContext = createContext<DeltaAuthContextType | undefined>(undefined);

export function DeltaAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<DeltaAppRole | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          setTimeout(() => {
            fetchUserRole(session.user.id);
          }, 0);
        } else {
          setRole(null);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserRole(session.user.id);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('delta_user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      setRole(data?.role as DeltaAppRole);
    } catch (error) {
      console.error('Error fetching user role:', error);
      setRole(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signUp = async (
    email: string,
    password: string,
    userData: {
      full_name: string;
      phone_number: string;
      date_of_birth: string;
      nationality: string;
      applicant_type: string;
    }
  ) => {
    try {
      const redirectUrl = `${window.location.origin}/portal/login`;
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: redirectUrl,
        },
      });
      
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      setRole(null);
      toast({
        title: "Signed out successfully",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error signing out",
        variant: "destructive",
      });
    }
  };

  return (
    <DeltaAuthContext.Provider
      value={{ user, session, role, loading, signIn, signUp, signOut }}
    >
      {children}
    </DeltaAuthContext.Provider>
  );
}

export function useDeltaAuth() {
  const context = useContext(DeltaAuthContext);
  if (context === undefined) {
    throw new Error('useDeltaAuth must be used within a DeltaAuthProvider');
  }
  return context;
}
