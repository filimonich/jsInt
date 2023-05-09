export default class VueGetters {
  constructor(settings) {
    this.$el = document.querySelector(settings.el);
    this.$template = settings.template;
    this.$data = settings.data;
    this.data = {};

    for (let name in this.$data) {
      Object.defineProperty(this.data, name, {
        get: () => {
          return this.$data[name];
        },
        set: value => {
          this.$data[name] = value;
          this.render();
        },
      });
    }

    this.render();
  }

  render() {
    /* 
            + виртуальная DOM 
            + обширные возможности в шаблонах    
        */

    /*
            {
                tag: 'div',
                listeners: [],
                classes: [],
                children: [
                    {
                        tag: 'h2',
                        innerText: '{{clicks}}'
                    },
                    {
                        tag: 'div',
                        innerText: '{{some}}'
                    }
                ]
            }

        */

    let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
      let key = name.trim();
      return this.$data[key];
    });

    this.$el.innerHTML = html;
  }
}
