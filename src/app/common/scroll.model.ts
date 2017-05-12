/**
 * model for page scroll
 */
export default class ScrollModel {
  public height: number;
  public offsetTop: number;
  public scrollTop: number;

  public static buildFromElement (element: JQuery) {
    const scroll = new ScrollModel();
    scroll.height = element.height();
    scroll.offsetTop = element[0].offsetTop;
    scroll.scrollTop = $('body').scrollTop();
    return scroll;
  }
}
