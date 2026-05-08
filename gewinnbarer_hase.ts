export class GewinnbarerHase {
  constructor(
    private derHase: string,
    private derZahlenmässigeHase: number,
  ) {}

  public get hase(): string {
    return this.derHase;
  }

  public get zahlenmässigerHase(): number {
    return this.derZahlenmässigeHase;
  }

  public set zahlenmässigerHase(neuerHase: number) {
    this.derZahlenmässigeHase = neuerHase;
  }
}
