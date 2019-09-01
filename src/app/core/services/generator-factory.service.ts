import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GetRandomStringThree = new InjectionToken<string>('GenerateThreeRandChars');

export function GeneratorFactoryService(n: number): (data: GeneratorService) => string {
  return (data: GeneratorService): string => {
    console.log('data :', data);
    return data.generateString().slice(2, 2 + n);
  };
}
