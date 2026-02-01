import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail } from "lucide-react";

interface PersonalInfoStepProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onChange: (data: Partial<PersonalInfoStepProps["data"]>) => void;
}

const PersonalInfoStep = ({ data, onChange }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Bienvenue ! Commençons par faire connaissance
        </h2>
        <p className="text-muted-foreground">
          Ces informations nous permettent de personnaliser votre expérience et de vous contacter si nécessaire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            Prénom <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder="Votre prénom"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            Nom <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder="Votre nom"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground" />
          Adresse email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
        <p className="text-xs text-muted-foreground">
          Nous utiliserons cette adresse pour vous envoyer les notifications de réservation.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
