
export class UtilService {

  language: string;

  constructor() {
    this.language = 'en';
  }

  getLanguage(): string {
    return this.language;
  }

  setLanguage(language: string): void {
    this.language = language;
  }
}
