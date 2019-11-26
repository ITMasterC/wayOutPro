"use strict";

System.register(["cc", "./cudeNode.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, systemEvent, SystemEventType, CameraComponent, geometry, PhysicsSystem, Layers, cudeNode, _dec, _class, _temp, ccclass, property, conCamera;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      CameraComponent = _cc.CameraComponent;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      Layers = _cc.Layers;
    }, function (_cudeNodeJs) {
      cudeNode = _cudeNodeJs.cudeNode;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "2ace3etw3JNR6CJyl0tAWhZ", "conCamera"); // begin conCamera


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("conCamera", conCamera = (_dec = ccclass("conCamera"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(conCamera, _Component);

        function conCamera() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, conCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(conCamera)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._ray = new geometry.ray();
          _this._maxDistance = 100;
          return _this;
        }

        babelHelpers.createClass(conCamera, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            //监听系统点击事件，参数的含义是：要监听的事件，回调函数，作用对象
            //此处监听的事鼠标的按下事件，回调函数是 this._touchStart
            systemEvent.on(SystemEventType.TOUCH_START, this._touchStart, this);
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(touch, event) {
            //回调函数
            //这一段代码获取的是鼠标点击屏幕时，点击到的最近的模型，存放到result中。
            var camera = this.node.getComponent(CameraComponent); //获取节点上的摄像机组件

            camera.screenPointToRay(touch._point.x, touch._point.y, this._ray);
            var result = PhysicsSystem.instance.raycastClosest(this._ray, Layers.Enum.DEFAULT, this._maxDistance); //result为true时表示有获取到模型

            var r = PhysicsSystem.instance.raycastClosestResult._collidier; //console.log('----------------获取到的对象', r.node.getComponent(cudeNode));

            if (result) {
              r.node.getComponent(cudeNode).changeScale();
            }
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return conCamera;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end conCamera

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY29uQ2FtZXJhLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50VHlwZSIsIkNhbWVyYUNvbXBvbmVudCIsImdlb21ldHJ5IiwiUGh5c2ljc1N5c3RlbSIsIkxheWVycyIsImN1ZGVOb2RlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiY29uQ2FtZXJhIiwiX3JheSIsInJheSIsIl9tYXhEaXN0YW5jZSIsIm9uIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydCIsInRvdWNoIiwiZXZlbnQiLCJjYW1lcmEiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2NyZWVuUG9pbnRUb1JheSIsIl9wb2ludCIsIngiLCJ5IiwicmVzdWx0IiwiaW5zdGFuY2UiLCJyYXljYXN0Q2xvc2VzdCIsIkVudW0iLCJERUZBVUxUIiwiciIsInJheWNhc3RDbG9zZXN0UmVzdWx0IiwiX2NvbGxpZGllciIsImNoYW5nZVNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFrQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsYSxPQUFBQSxhO0FBQWVDLE1BQUFBLE0sT0FBQUEsTTs7QUFFeEdDLE1BQUFBLFEsZUFBQUEsUTs7O2dGQUFrRTs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzsyQkFJSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFTSkcsSSxHQUFPLElBQUlQLFFBQVEsQ0FBQ1EsR0FBYixFO2dCQUNQQyxZLEdBQWMsRzs7Ozs7O2tDQUVMO0FBQ0w7QUFDQTtBQUNBO0FBQ0FaLFlBQUFBLFdBQVcsQ0FBQ2EsRUFBWixDQUFlWixlQUFlLENBQUNhLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0g7OztzQ0FFV0MsSyxFQUFPQyxLLEVBQU07QUFBQztBQUN0QjtBQUNBLGdCQUFJQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCbEIsZUFBdkIsQ0FBYixDQUZxQixDQUVnQzs7QUFDckRnQixZQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsQ0FBckMsRUFBd0NQLEtBQUssQ0FBQ00sTUFBTixDQUFhRSxDQUFyRCxFQUF3RCxLQUFLZCxJQUE3RDtBQUNBLGdCQUFJZSxNQUFNLEdBQUdyQixhQUFhLENBQUNzQixRQUFkLENBQXVCQyxjQUF2QixDQUFzQyxLQUFLakIsSUFBM0MsRUFBaURMLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWUMsT0FBN0QsRUFBc0UsS0FBS2pCLFlBQTNFLENBQWIsQ0FKcUIsQ0FLckI7O0FBQ0EsZ0JBQU1rQixDQUFDLEdBQUcxQixhQUFhLENBQUNzQixRQUFkLENBQXVCSyxvQkFBdkIsQ0FBNENDLFVBQXRELENBTnFCLENBT3JCOztBQUNBLGdCQUFJUCxNQUFKLEVBQVk7QUFDUkssY0FBQUEsQ0FBQyxDQUFDWCxJQUFGLENBQU9DLFlBQVAsQ0FBb0JkLFFBQXBCLEVBQThCMkIsV0FBOUI7QUFDSDtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUFqQzJCbEMsUzs7b0JBSGIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBDYW1lcmFDb21wb25lbnQsIGdlb21ldHJ5LCBQaHlzaWNzU3lzdGVtLCBMYXllcnN9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5pbXBvcnR7Y3VkZU5vZGV9ZnJvbSBcIi4vY3VkZU5vZGVcIjsgXHJcblxyXG5AY2NjbGFzcyhcImNvbkNhbWVyYVwiKVxyXG5leHBvcnQgY2xhc3MgY29uQ2FtZXJhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBfcmF5ID0gbmV3IGdlb21ldHJ5LnJheSgpOy8v6L+Z5Liq5a+56LGh55qE5L2c55So5LiN55Sa6YCC5ZCI6K6y6Kej77yM5oCV5piv5aSn5a626KaB6Ieq6KGM5Y675o6i6K6oXHJcbiAgICBfbWF4RGlzdGFuY2U9IDEwMDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgLy/nm5HlkKzns7vnu5/ngrnlh7vkuovku7bvvIzlj4LmlbDnmoTlkKvkuYnmmK/vvJropoHnm5HlkKznmoTkuovku7bvvIzlm57osIPlh73mlbDvvIzkvZznlKjlr7nosaFcclxuICAgICAgICAvL+atpOWkhOebkeWQrOeahOS6i+m8oOagh+eahOaMieS4i+S6i+S7tu+8jOWbnuiwg+WHveaVsOaYryB0aGlzLl90b3VjaFN0YXJ0XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfdG91Y2hTdGFydCh0b3VjaCwgZXZlbnQpey8v5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgLy/ov5nkuIDmrrXku6PnoIHojrflj5bnmoTmmK/pvKDmoIfngrnlh7vlsY/luZXml7bvvIzngrnlh7vliLDnmoTmnIDov5HnmoTmqKHlnovvvIzlrZjmlL7liLByZXN1bHTkuK3jgIJcclxuICAgICAgICBsZXQgY2FtZXJhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpOy8v6I635Y+W6IqC54K55LiK55qE5pGE5YOP5py657uE5Lu2XHJcbiAgICAgICAgY2FtZXJhLnNjcmVlblBvaW50VG9SYXkodG91Y2guX3BvaW50LngsIHRvdWNoLl9wb2ludC55LCB0aGlzLl9yYXkpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHRoaXMuX3JheSwgTGF5ZXJzLkVudW0uREVGQVVMVCwgdGhpcy5fbWF4RGlzdGFuY2UpO1xyXG4gICAgICAgIC8vcmVzdWx05Li6dHJ1ZeaXtuihqOekuuacieiOt+WPluWIsOaooeWei1xyXG4gICAgICAgIGNvbnN0IHIgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0Ll9jb2xsaWRpZXI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLeiOt+WPluWIsOeahOWvueixoScsIHIubm9kZS5nZXRDb21wb25lbnQoY3VkZU5vZGUpKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHIubm9kZS5nZXRDb21wb25lbnQoY3VkZU5vZGUpLmNoYW5nZVNjYWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==