import Vue from "vue";
import Component from "vue-class-component";
import { RawLocation } from "vue-router";
import { router } from "../router";
import markdown from "../components/markdown";

import * as template from "text!./xss.html";
@Component({
  template,
  components: {
    markdown
  }
})
export default class XSSView extends Vue {
  input: string = "";

  clear() {
    (<HTMLInputElement>document.querySelector("#textArea")).value = "";
    this.input = "";
  }

  navigate(name: string, opts?: RawLocation) {
    if (~name.indexOf("://")) return window.open(name, "_blank");
    router.push(
      Object.assign(
        {
          name
        },
        opts
      )
    );
  }
}
