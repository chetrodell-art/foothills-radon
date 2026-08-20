import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { company } from "@/data/site";

interface EstimateFormProps {
  variant?: "card" | "section";
  title?: string;
}

export const EstimateForm = ({ variant = "card", title = "Get a Free Estimate" }: EstimateFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // UI only — integration wiring happens after user connects a CRM
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const wrapperClass =
    variant === "section"
      ? "rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
      : "rounded-xl border border-border bg-card p-6 shadow-sm";

  if (submitted) {
    return (
      <div className={`${wrapperClass} text-center`}>
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 font-heading text-xl font-bold text-primary">Request Received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — we'll call you back within {company.responseHours}. If you need immediate help, call us at{" "}
          <a href={company.phoneHref} className="font-semibold text-accent">{company.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <h3 className="font-heading text-xl font-bold text-primary">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Quick form — we respond within {company.responseHours}. No obligation.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(303) 816-3130" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="zip">ZIP Code *</Label>
            <Input id="zip" name="zip" required placeholder="80470" maxLength={5} />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="service">Service Needed</Label>
            <Select name="service">
              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="testing">Radon Testing</SelectItem>
                <SelectItem value="mitigation">Radon Mitigation</SelectItem>
                <SelectItem value="crawl-space">Crawl Space Encapsulation</SelectItem>
                <SelectItem value="fan-repair">Fan Replacement / Repair</SelectItem>
                <SelectItem value="post-mitigation">Post-Mitigation Testing</SelectItem>
                <SelectItem value="new-construction">New Construction Prevention</SelectItem>
                <SelectItem value="real-estate">Real Estate Services</SelectItem>
                <SelectItem value="commercial">Commercial Services</SelectItem>
                <SelectItem value="not-sure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="foundation">Foundation Type</Label>
            <Select name="foundation">
              <SelectTrigger><SelectValue placeholder="Select foundation" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="basement">Basement</SelectItem>
                <SelectItem value="crawl-space">Crawl Space</SelectItem>
                <SelectItem value="slab">Slab</SelectItem>
                <SelectItem value="combination">Combination</SelectItem>
                <SelectItem value="not-sure">Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="notes">Brief Notes</Label>
          <Textarea id="notes" name="notes" rows={3} placeholder="Tell us about your home or situation" />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          {loading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
          ) : (
            "Request My Free Estimate"
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your request. We never share your info.
        </p>
      </form>
    </div>
  );
};
