import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="font-bold text-primary border-primary/20 hover:bg-primary hover:text-white transition-all w-10 h-10 rounded-full p-0"
    >
      {i18n.language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};
