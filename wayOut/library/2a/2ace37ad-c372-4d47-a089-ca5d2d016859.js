"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, systemEvent, SystemEventType, CameraComponent, geometry, PhysicsSystem, Layers, _dec, _class, _temp, ccclass, property, conCamera;

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

            var r = PhysicsSystem.instance.raycastClosestResult._collidier;
            console.log('----------------获取到的对象', r);
            return;

            if (result) {
              var _r = PhysicsSystem.instance.raycastClosestResult._collidier.node.getComponent(cubeNode);

              _r.changeScale();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY29uQ2FtZXJhLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50VHlwZSIsIkNhbWVyYUNvbXBvbmVudCIsImdlb21ldHJ5IiwiUGh5c2ljc1N5c3RlbSIsIkxheWVycyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImNvbkNhbWVyYSIsIl9yYXkiLCJyYXkiLCJfbWF4RGlzdGFuY2UiLCJvbiIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnQiLCJ0b3VjaCIsImV2ZW50IiwiY2FtZXJhIiwibm9kZSIsImdldENvbXBvbmVudCIsInNjcmVlblBvaW50VG9SYXkiLCJfcG9pbnQiLCJ4IiwieSIsInJlc3VsdCIsImluc3RhbmNlIiwicmF5Y2FzdENsb3Nlc3QiLCJFbnVtIiwiREVGQVVMVCIsInIiLCJyYXljYXN0Q2xvc2VzdFJlc3VsdCIsIl9jb2xsaWRpZXIiLCJjb25zb2xlIiwibG9nIiwiY3ViZU5vZGUiLCJjaGFuZ2VTY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBa0JDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGEsT0FBQUEsYTtBQUFlQyxNQUFBQSxNLE9BQUFBLE07OztnRkFFdEM7OztBQURqRUMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0pHLEksR0FBTyxJQUFJTixRQUFRLENBQUNPLEdBQWIsRTtnQkFDUEMsWSxHQUFjLEc7Ozs7OztrQ0FFTDtBQUNMO0FBQ0E7QUFDQTtBQUNBWCxZQUFBQSxXQUFXLENBQUNZLEVBQVosQ0FBZVgsZUFBZSxDQUFDWSxXQUEvQixFQUE0QyxLQUFLQyxXQUFqRCxFQUE4RCxJQUE5RDtBQUNIOzs7c0NBRVdDLEssRUFBT0MsSyxFQUFNO0FBQUM7QUFDdEI7QUFDQSxnQkFBSUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmpCLGVBQXZCLENBQWIsQ0FGcUIsQ0FFZ0M7O0FBQ3JEZSxZQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsQ0FBckMsRUFBd0NQLEtBQUssQ0FBQ00sTUFBTixDQUFhRSxDQUFyRCxFQUF3RCxLQUFLZCxJQUE3RDtBQUNBLGdCQUFJZSxNQUFNLEdBQUdwQixhQUFhLENBQUNxQixRQUFkLENBQXVCQyxjQUF2QixDQUFzQyxLQUFLakIsSUFBM0MsRUFBaURKLE1BQU0sQ0FBQ3NCLElBQVAsQ0FBWUMsT0FBN0QsRUFBc0UsS0FBS2pCLFlBQTNFLENBQWIsQ0FKcUIsQ0FLckI7O0FBQ0EsZ0JBQU1rQixDQUFDLEdBQUd6QixhQUFhLENBQUNxQixRQUFkLENBQXVCSyxvQkFBdkIsQ0FBNENDLFVBQXREO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDSixDQUF0QztBQUNBOztBQUNBLGdCQUFJTCxNQUFKLEVBQVk7QUFDUixrQkFBTUssRUFBQyxHQUFHekIsYUFBYSxDQUFDcUIsUUFBZCxDQUF1Qkssb0JBQXZCLENBQTRDQyxVQUE1QyxDQUF1RGIsSUFBdkQsQ0FBNERDLFlBQTVELENBQXlFZSxRQUF6RSxDQUFWOztBQUNBTCxjQUFBQSxFQUFDLENBQUNNLFdBQUY7QUFDSDtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUFuQzJCcEMsUzs7b0JBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnRUeXBlLCBDYW1lcmFDb21wb25lbnQsIGdlb21ldHJ5LCBQaHlzaWNzU3lzdGVtLCBMYXllcnN9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJjb25DYW1lcmFcIilcclxuZXhwb3J0IGNsYXNzIGNvbkNhbWVyYSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgX3JheSA9IG5ldyBnZW9tZXRyeS5yYXkoKTsvL+i/meS4quWvueixoeeahOS9nOeUqOS4jeeUmumAguWQiOiusuino++8jOaAleaYr+Wkp+WutuimgeiHquihjOWOu+aOouiuqFxyXG4gICAgX21heERpc3RhbmNlPSAxMDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIC8v55uR5ZCs57O757uf54K55Ye75LqL5Lu277yM5Y+C5pWw55qE5ZCr5LmJ5piv77ya6KaB55uR5ZCs55qE5LqL5Lu277yM5Zue6LCD5Ye95pWw77yM5L2c55So5a+56LGhXHJcbiAgICAgICAgLy/mraTlpITnm5HlkKznmoTkuovpvKDmoIfnmoTmjInkuIvkuovku7bvvIzlm57osIPlh73mlbDmmK8gdGhpcy5fdG91Y2hTdGFydFxyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fdG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvdWNoU3RhcnQodG91Y2gsIGV2ZW50KXsvL+Wbnuiwg+WHveaVsFxyXG4gICAgICAgIC8v6L+Z5LiA5q615Luj56CB6I635Y+W55qE5piv6byg5qCH54K55Ye75bGP5bmV5pe277yM54K55Ye75Yiw55qE5pyA6L+R55qE5qih5Z6L77yM5a2Y5pS+5YiwcmVzdWx05Lit44CCXHJcbiAgICAgICAgbGV0IGNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTsvL+iOt+WPluiKgueCueS4iueahOaRhOWDj+acuue7hOS7tlxyXG4gICAgICAgIGNhbWVyYS5zY3JlZW5Qb2ludFRvUmF5KHRvdWNoLl9wb2ludC54LCB0b3VjaC5fcG9pbnQueSwgdGhpcy5fcmF5KTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdCh0aGlzLl9yYXksIExheWVycy5FbnVtLkRFRkFVTFQsIHRoaXMuX21heERpc3RhbmNlKTtcclxuICAgICAgICAvL3Jlc3VsdOS4unRydWXml7booajnpLrmnInojrflj5bliLDmqKHlnotcclxuICAgICAgICBjb25zdCByID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5fY29sbGlkaWVyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0t6I635Y+W5Yiw55qE5a+56LGhJywgcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuX2NvbGxpZGllci5ub2RlLmdldENvbXBvbmVudChjdWJlTm9kZSk7XHJcbiAgICAgICAgICAgIHIuY2hhbmdlU2NhbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWUpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19