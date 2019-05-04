const componentName = "demoComponent";

const component = {
  template: `
      <h1>It works {{$ctrl.name}}</h1>
      <div>{{$ctrl.foo.bar}}</div>
      <ul>
        <li ng-repeat="item in $ctrl.things">
          <button ng-click="$ctrl.onClick(item)">{{item}}</button>
        </li>
      </ul>
  `,
  bindings: {
    name: "<",
    foo: "<",
    things: "<",
    onEvent: "&"
  },
  controller: class {
    $onInit() {
      console.log("$onInit");
    }

    $onChanges(changes) {
      console.log("$onChanges", changes);
    }

    onClick(item) {
      console.log("onClick", item);
      this.onEvent({ item });
    }
  }
};

export default [componentName, component];
