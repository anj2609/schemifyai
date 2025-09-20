import { useState } from "react";
import { LanguageProvider } from "./components/LanguageProvider";
import { Header } from "./components/Header";
import { UserInputForm, type UserData } from "./components/UserInputForm";
import { SchemeCard, type Scheme } from "./components/SchemeCard";
import { SchemeDetails } from "./components/SchemeDetails";
import { getRecommendedSchemes } from "./components/mockData";
import { useLanguage } from "./components/LanguageProvider";
import { Card, CardContent } from "./components/ui/card";
import { Loader2, Users, Target, Globe2 } from "lucide-react";

type View = 'input' | 'results' | 'details';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('input');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [recommendedSchemes, setRecommendedSchemes] = useState<Scheme[]>([]);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { translate } = useLanguage();

  const handleUserSubmit = async (data: UserData) => {
    setIsLoading(true);
    setUserData(data);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const schemes = getRecommendedSchemes(data);
    setRecommendedSchemes(schemes);
    setIsLoading(false);
    setCurrentView('results');
  };

  const handleViewDetails = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setCurrentView('details');
  };

  const handleBackToResults = () => {
    setCurrentView('results');
    setSelectedScheme(null);
  };

  const handleBackToInput = () => {
    setCurrentView('input');
    setUserData(null);
    setRecommendedSchemes([]);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardContent className="py-12">
              <Loader2 className="size-12 animate-spin mx-auto mb-4 text-primary" />
              <h3 className="mb-2">{translate('loading')}</h3>
              <p className="text-muted-foreground text-sm">
                Analyzing your profile and matching with available schemes...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentView === 'input' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="size-8 text-primary" />
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="size-8 text-primary" />
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe2 className="size-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mb-4 text-primary max-w-4xl mx-auto">
                Discover Government Schemes You're Eligible For
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get personalized recommendations for welfare schemes based on your profile. 
                Simplified applications, step-by-step guidance, and multilingual support.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Government Schemes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Match Accuracy</div>
                </div>
              </div>
            </div>
            
            <UserInputForm onSubmit={handleUserSubmit} />
          </div>
        )}
        
        {currentView === 'results' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl mb-2">{translate('recommendedSchemes')}</h2>
                <p className="text-muted-foreground">
                  Found {recommendedSchemes.length} schemes matching your profile
                </p>
              </div>
              <button 
                onClick={handleBackToInput}
                className="text-primary hover:underline text-sm"
              >
                Modify Details
              </button>
            </div>
            
            {recommendedSchemes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedSchemes.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <h3 className="mb-2">{translate('noSchemes')}</h3>
                  <p className="text-muted-foreground text-sm">
                    Try modifying your criteria or check back later for new schemes.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        
        {currentView === 'details' && selectedScheme && (
          <SchemeDetails 
            scheme={selectedScheme} 
            onBack={handleBackToResults}
          />
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}