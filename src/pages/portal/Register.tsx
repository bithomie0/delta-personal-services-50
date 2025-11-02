import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeltaAuth } from '@/contexts/DeltaAuthContext';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, GraduationCap, HeartPulse } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useDeltaAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    full_name: '',
    phone_number: '',
    date_of_birth: '',
    nationality: '',
    applicant_type: 'ausbildung' as 'ausbildung' | 'nurse_professional',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Password too short",
        description: "Password must be at least 8 characters",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await signUp(formData.email, formData.password, {
      full_name: formData.full_name,
      phone_number: formData.phone_number,
      date_of_birth: formData.date_of_birth,
      nationality: formData.nationality,
      applicant_type: formData.applicant_type,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account, then login.",
      });
      navigate('/portal/login');
    }
  };

  return (
    <PortalLayout>
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Register to apply for job positions at Delta Personal Services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone_number">Phone Number *</Label>
                <Input
                  id="phone_number"
                  type="tel"
                  required
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date_of_birth">Date of Birth *</Label>
                <Input
                  id="date_of_birth"
                  type="date"
                  required
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <Input
                  id="nationality"
                  required
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicant_type">Application Type *</Label>
                <Select
                  value={formData.applicant_type}
                  onValueChange={(value: 'ausbildung' | 'nurse_professional') => 
                    setFormData({ ...formData, applicant_type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your application type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ausbildung">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Ausbildung</span>
                          <span className="text-xs text-muted-foreground">Apprenticeship/Training positions</span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="nurse_professional">
                      <div className="flex items-center gap-2">
                        <HeartPulse className="h-4 w-4" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Nurse Professional</span>
                          <span className="text-xs text-muted-foreground">Qualified nurse professional positions</span>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">Minimum 8 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  minLength={8}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Register
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/portal/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
