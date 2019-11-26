"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, tweenUtil, _dec, _class, _temp, ccclass, property, cudeNode;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tweenUtil = _cc.tweenUtil;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3eba0R9pQxJxY4xAQa7vir0", "cudeNode"); // begin cudeNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("cudeNode", cudeNode = (_dec = ccclass("cudeNode"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(cudeNode, _Component);

        function cudeNode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, cudeNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(cudeNode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._scale = new Vec3(0, 0, 0);
          return _this;
        }

        babelHelpers.createClass(cudeNode, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "changeScale",
          value: function changeScale() {
            var _this2 = this;

            var endScaleY = 0.5; //伸缩动作最后高度的倍数

            if (this.node.scale.y == 0.5) {
              //如果当前只有0.4， 那么就执行伸高动作
              endScaleY = 1;
            } else if (this.node.scale.y == 1) {
              //如果当前只有0.8， 那么就执行缩动作
              endScaleY = 0.5;
            }

            Vec3.copy(this._scale, this.node.scale); //将当前节点的倍数状态赋值给 this._scale

            tweenUtil(this._scale) //执行缓动动作
            .to(0.1, new Vec3(this._scale.x, endScaleY, this._scale.z), {
              easing: 'Bounce-InOut',
              //缓动类型
              onUpdate: function onUpdate() {
                _this2.node.scale = _this2._scale;
              }
            }).call(function () {//缓动动作完成时的回调
            }).union().repeat(1) //反复执行缓动的次数
            .start(); //开始执行
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return cudeNode;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end cudeNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY3VkZU5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJ0d2VlblV0aWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJjdWRlTm9kZSIsIl9zY2FsZSIsImVuZFNjYWxlWSIsIm5vZGUiLCJzY2FsZSIsInkiLCJjb3B5IiwidG8iLCJ4IiwieiIsImVhc2luZyIsIm9uVXBkYXRlIiwiY2FsbCIsInVuaW9uIiwicmVwZWF0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWtCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTOzs7K0VBRTRCOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNKRyxNLEdBQVMsSUFBSUwsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDOzs7Ozs7a0NBRUQsQ0FDSjtBQUNIOzs7d0NBRWE7QUFBQTs7QUFDVixnQkFBSU0sU0FBUyxHQUFHLEdBQWhCLENBRFUsQ0FDVTs7QUFDcEIsZ0JBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxDQUFoQixJQUFxQixHQUF6QixFQUE4QjtBQUMxQjtBQUNBSCxjQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNILGFBSEQsTUFHTyxJQUFJLEtBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsQ0FBaEIsSUFBcUIsQ0FBekIsRUFBNEI7QUFDL0I7QUFDQUgsY0FBQUEsU0FBUyxHQUFHLEdBQVo7QUFDSDs7QUFFRE4sWUFBQUEsSUFBSSxDQUFDVSxJQUFMLENBQVUsS0FBS0wsTUFBZixFQUF1QixLQUFLRSxJQUFMLENBQVVDLEtBQWpDLEVBVlUsQ0FVOEI7O0FBQ3hDUCxZQUFBQSxTQUFTLENBQUMsS0FBS0ksTUFBTixDQUFULENBQXNCO0FBQXRCLGFBQ0NNLEVBREQsQ0FDSSxHQURKLEVBQ1MsSUFBSVgsSUFBSixDQUFTLEtBQUtLLE1BQUwsQ0FBWU8sQ0FBckIsRUFBd0JOLFNBQXhCLEVBQW1DLEtBQUtELE1BQUwsQ0FBWVEsQ0FBL0MsQ0FEVCxFQUMyRDtBQUN2REMsY0FBQUEsTUFBTSxFQUFDLGNBRGdEO0FBQ2pDO0FBQ3RCQyxjQUFBQSxRQUFRLEVBQUUsb0JBQUk7QUFDVixnQkFBQSxNQUFJLENBQUNSLElBQUwsQ0FBVUMsS0FBVixHQUFrQixNQUFJLENBQUNILE1BQXZCO0FBQ0g7QUFKc0QsYUFEM0QsRUFPQ1csSUFQRCxDQU9NLFlBQUksQ0FDTjtBQUVILGFBVkQsRUFXQ0MsS0FYRCxHQVlDQyxNQVpELENBWVEsQ0FaUixFQVlVO0FBWlYsYUFhQ0MsS0FiRCxHQVhVLENBd0JEO0FBQ1osVyxDQUVEO0FBQ0E7QUFDQTs7OztRQTNDMEJwQixTOztvQkFGWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSAsIFZlYzMsIHR3ZWVuVXRpbH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcImN1ZGVOb2RlXCIpXHJcbmV4cG9ydCBjbGFzcyBjdWRlTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgX3NjYWxlID0gbmV3IFZlYzMoMCwwLDApO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjYWxlKCkge1xyXG4gICAgICAgIGxldCBlbmRTY2FsZVkgPSAwLjU7Ly/kvLjnvKnliqjkvZzmnIDlkI7pq5jluqbnmoTlgI3mlbBcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlLnkgPT0gMC41KSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5b2T5YmN5Y+q5pyJMC4077yMIOmCo+S5iOWwseaJp+ihjOS8uOmrmOWKqOS9nFxyXG4gICAgICAgICAgICBlbmRTY2FsZVkgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLnNjYWxlLnkgPT0gMSkge1xyXG4gICAgICAgICAgICAvL+WmguaenOW9k+WJjeWPquaciTAuOO+8jCDpgqPkuYjlsLHmiafooYznvKnliqjkvZxcclxuICAgICAgICAgICAgZW5kU2NhbGVZID0gMC41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVmVjMy5jb3B5KHRoaXMuX3NjYWxlLCB0aGlzLm5vZGUuc2NhbGUpOy8v5bCG5b2T5YmN6IqC54K555qE5YCN5pWw54q25oCB6LWL5YC857uZIHRoaXMuX3NjYWxlXHJcbiAgICAgICAgdHdlZW5VdGlsKHRoaXMuX3NjYWxlKS8v5omn6KGM57yT5Yqo5Yqo5L2cXHJcbiAgICAgICAgLnRvKDAuMSwgbmV3IFZlYzModGhpcy5fc2NhbGUueCwgZW5kU2NhbGVZLCB0aGlzLl9zY2FsZS56KSx7XHJcbiAgICAgICAgICAgIGVhc2luZzonQm91bmNlLUluT3V0JywvL+e8k+WKqOexu+Wei1xyXG4gICAgICAgICAgICBvblVwZGF0ZTogKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMuX3NjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAvL+e8k+WKqOWKqOS9nOWujOaIkOaXtueahOWbnuiwg1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgLnJlcGVhdCgxKS8v5Y+N5aSN5omn6KGM57yT5Yqo55qE5qyh5pWwXHJcbiAgICAgICAgLnN0YXJ0KCk7Ly/lvIDlp4vmiafooYxcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=