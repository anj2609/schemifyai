import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage } from "./LanguageProvider";

export interface UserData {
  age: number;
  occupation: string;
  monthlyIncome: number;
  gender: string;
  state: string;
  district: string;
}

interface UserInputFormProps {
  onSubmit: (data: UserData) => void;
}

const occupations = [
  'farmer', 'student', 'unemployed', 'daily_wage_worker', 'government_employee',
  'private_employee', 'self_employed', 'retired', 'homemaker', 'disabled'
];

const states = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab',
  'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'
];

export function UserInputForm({ onSubmit }: UserInputFormProps) {
  const { translate } = useLanguage();
  const [formData, setFormData] = useState<Partial<UserData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData as UserData);
    }
  };

  const isFormValid = () => {
    return formData.age && formData.occupation && formData.gender && 
           formData.state && formData.district && formData.monthlyIncome !== undefined;
  };

  const updateField = (field: keyof UserData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{translate('personalInfo')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">{translate('age')}</Label>
              <Input
                id="age"
                type="number"
                min="0"
                max="120"
                value={formData.age || ''}
                onChange={e => updateField('age', parseInt(e.target.value))}
                className="bg-input-background"
              />
            </div>
            
            <div>
              <Label htmlFor="gender">{translate('gender')}</Label>
              <Select value={formData.gender} onValueChange={value => updateField('gender', value)}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue placeholder={translate('gender')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">{translate('male')}</SelectItem>
                  <SelectItem value="female">{translate('female')}</SelectItem>
                  <SelectItem value="other">{translate('other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="occupation">{translate('occupation')}</Label>
            <Select value={formData.occupation} onValueChange={value => updateField('occupation', value)}>
              <SelectTrigger className="bg-input-background">
                <SelectValue placeholder={translate('occupation')} />
              </SelectTrigger>
              <SelectContent>
                {occupations.map(occ => (
                  <SelectItem key={occ} value={occ}>
                    {occ.replace('_', ' ').toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="income">{translate('monthlyIncome')}</Label>
            <Input
              id="income"
              type="number"
              min="0"
              value={formData.monthlyIncome || ''}
              onChange={e => updateField('monthlyIncome', parseInt(e.target.value))}
              className="bg-input-background"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">{translate('state')}</Label>
              <Select value={formData.state} onValueChange={value => updateField('state', value)}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue placeholder={translate('state')} />
                </SelectTrigger>
                <SelectContent>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="district">{translate('district')}</Label>
              <Input
                id="district"
                value={formData.district || ''}
                onChange={e => updateField('district', e.target.value)}
                placeholder={translate('district')}
                className="bg-input-background"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={!isFormValid()}
          >
            {translate('findSchemes')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}