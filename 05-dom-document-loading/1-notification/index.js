export default class NotificationMessage {
  static activeNotification;

  element;
  timerId;

  constructor(message, {
    duration  = 2000,
    type = "success",
  } = {}) {
    this.message = message;
    this.duratinInSeconds = (duration/1000) + 'S';
    this.type = type;
    this.duration = duration;

    this.render();
  }

  get template() {
    return `<div class = "notification ${this.type}"
    style = "--value:${this.duratinInSeconds}">
            <div class = "timer"></div>
            <div class = "inner-wrapper">
            <div class = "notification-header">Notification</div>
            <div class = "notification-body">
            ${this.message}
            </div>
            </div>
            </div>`
                  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;

    this.element = element.firstElementChild;
  }

  show(parent = document.body) {
    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove();
    }

    parent.append(this.element);

    this.timeId = setTimeout( () => {
      this.remove();
    }, this.duration);

    NotificationMessage.activeNotification = this.element;
  }

  remove() {
    clearTimeout(this.timeId);
    this.element.remove();
  }

  destroy() {
    this.remove();
  }



}
