import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { useLanguage } from "./LanguageProvider";
import { type Scheme } from "./SchemeCard";
import { ArrowLeft, CheckCircle, FileText, ExternalLink, Users, IndianRupee, Calendar } from "lucide-react";

interface SchemeDetailsProps {
  scheme: Scheme;
  onBack: () => void;
}

export function SchemeDetails({ scheme, onBack }: SchemeDetailsProps) {
  const { translate, currentLanguage } = useLanguage();
  
  const schemeName = currentLanguage === 'hi' && scheme.nameHi ? scheme.nameHi : scheme.name;
  const schemeDescription = currentLanguage === 'hi' && scheme.descriptionHi ? scheme.descriptionHi : scheme.description;
  const benefits = currentLanguage === 'hi' && scheme.benefitsHi ? scheme.benefitsHi : scheme.benefits;
  const applicationSteps = currentLanguage === 'hi' && scheme.applicationStepsHi ? scheme.applicationStepsHi : scheme.applicationSteps;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="size-4 mr-2" />
          {translate('backToResults')}
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{schemeName}</CardTitle>
              <p className="text-muted-foreground">{scheme.department}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <span>{translate('eligibilityMatch')}</span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {scheme.eligibilityMatch}%
                </Badge>
              </div>
              <Progress value={scheme.eligibilityMatch} className="w-32" />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{schemeDescription}</p>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Target Group</p>
                <p>{scheme.targetGroup.join(', ')}</p>
              </div>
            </div>
            
            {scheme.maxIncome && (
              <div className="flex items-center gap-3">
                <IndianRupee className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Max Income</p>
                  <p>₹{scheme.maxIncome.toLocaleString()}/month</p>
                </div>
              </div>
            )}
            
            {(scheme.minAge || scheme.maxAge) && (
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Age Range</p>
                  <p>
                    {scheme.minAge || 0} - {scheme.maxAge || 'No limit'} years
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <Separator />
          
          <div>
            <h3 className="mb-4">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="mb-4">{translate('applicationSteps')}</h3>
            <div className="space-y-4">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full size-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="mb-4 flex items-center gap-2">
              <FileText className="size-5" />
              Required Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {scheme.documentsRequired.map((doc, index) => (
                <div key={index} className="text-sm p-3 bg-muted rounded-md">
                  {doc}
                </div>
              ))}
            </div>
          </div>
          
          {scheme.applicationUrl && (
            <>
              <Separator />
              <Button 
                className="w-full md:w-auto" 
                size="lg"
                onClick={() => window.open(scheme.applicationUrl, '_blank')}
              >
                <ExternalLink className="size-4 mr-2" />
                {translate('applyNow')}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}