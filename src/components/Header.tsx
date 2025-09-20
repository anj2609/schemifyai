import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export function Header() {
  const { currentLanguage, setLanguage, translate, availableLanguages } = useLanguage();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Globe className="size-6" />
          </div>
          <div>
            <h1 className="text-primary">{translate('appTitle')}</h1>
            <p className="text-muted-foreground text-sm">{translate('tagline')}</p>
          </div>
        </div>
        
        <Select value={currentLanguage} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {availableLanguages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.nativeName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}