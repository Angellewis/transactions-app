import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class BaseVue extends Vue {
  constructor() {
    super();
  }
  operationSuccess(message: string = "Successful operation!", duration = 2000) {
    this.$buefy.toast.open({
      message: message,
      type: "is-success",
      duration: duration,
    });
  }
  operationFailed(message: string = "Operation failed!", duration = 4000) {
    this.$buefy.toast.open({
      message: message,
      type: "is-danger",
      position: "is-top-right",
      duration: duration,
    });
  }
  operationNoAllowed(
    message: string = "Operación no permitida!",
    duration = 4000
  ) {
    this.$buefy.toast.open({
      message: message,
      type: "is-warning",
      duration: duration,
      position: "is-bottom",
    });
  }

  displayDialogErrors( { title = 'Ha ocurrido un error', message = "" }) {
    this.$buefy.dialog.alert({
      title,
      message,
      type: 'is-danger',
      hasIcon: true,
      icon: 'times-circle',
      iconPack: 'fa',
      ariaRole: 'alertdialog',
      ariaModal: true
    })
  }

  operationFailedErrors(
    errors: string[],
    queue = false,
    duration = 4000,
    type = "is-danger"
  ) {
    errors.forEach((e) =>
      this.$buefy.toast.open({
        message: e,
        duration: duration,
        queue: queue,
        type: type,
        position: "is-top-right",
      })
    );
  }
}
