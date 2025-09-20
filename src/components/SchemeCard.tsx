import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useLanguage } from "./LanguageProvider";
import { CheckCircle, Clock, Users, IndianRupee } from "lucide-react";

export interface Scheme {
  id: string;
  name: string;
  nameHi?: string;
  description: string;
  descriptionHi?: string;
  department: string;
  eligibilityMatch: number;
  benefits: string[];
  benefitsHi?: string[];
  category: string;
  targetGroup: string[];
  maxIncome?: number;
  minAge?: number;
  maxAge?: number;
  applicationSteps: string[];
  applicationStepsHi?: string[];
  documentsRequired: string[];
  applicationUrl?: string;
}

interface SchemeCardProps {
  scheme: Scheme;
  onViewDetails: (scheme: Scheme) => void;
}

export function SchemeCard({ scheme, onViewDetails }: SchemeCardProps) {
  const { translate, currentLanguage } = useLanguage();
  
  const schemeName = currentLanguage === 'hi' && scheme.nameHi ? scheme.nameHi : scheme.name;
  const schemeDescription = currentLanguage === 'hi' && scheme.descriptionHi ? scheme.descriptionHi : scheme.description;
  const benefits = currentLanguage === 'hi' && scheme.benefitsHi ? scheme.benefitsHi : scheme.benefits;

  const getMatchColor = (match: number) => {
    if (match >= 90) return "bg-green-500";
    if (match >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="line-clamp-2">{schemeName}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{scheme.department}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">{translate('eligibilityMatch')}</span>
              <Badge variant="secondary">{scheme.eligibilityMatch}%</Badge>
            </div>
            <Progress value={scheme.eligibilityMatch} className="w-20" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {schemeDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="size-3" />
            {scheme.targetGroup[0]}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="size-3" />
            {scheme.category}
          </Badge>
          {scheme.maxIncome && (
            <Badge variant="outline" className="flex items-center gap-1">
              <IndianRupee className="size-3" />
              ≤ ₹{scheme.maxIncome.toLocaleString()}
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <p className="text-sm">Key Benefits:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {benefits.slice(0, 2).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="size-3 mt-0.5 text-green-600 flex-shrink-0" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onViewDetails(scheme)}
            className="flex-1"
          >
            {translate('viewDetails')}
          </Button>
          {scheme.applicationUrl && (
            <Button 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(scheme.applicationUrl, '_blank')}
            >
              {translate('applyNow')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}