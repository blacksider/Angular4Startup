export default class ElementStateModel {
  public active: boolean;
  public manualScrolling: boolean;

  constructor (active: boolean, manualScrolling: boolean) {
    this.active = active;
    this.manualScrolling = manualScrolling;
  }
}
