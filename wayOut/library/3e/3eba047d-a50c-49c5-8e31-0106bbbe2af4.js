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
          key: "init",
          value: function init(index, typeIndex) {
            //初始化方块状态
            this.index = index; //用于计算当前方块的位置

            if (typeIndex == 1) {
              this.node.scale.y = 1;
            } else {
              this.node.scale.y = 0.5;
            }
          }
        }, {
          key: "changeSide",
          value: function changeSide() {}
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
              //派发一个消息，让相邻的方块执行状态变化
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY3VkZU5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJ0d2VlblV0aWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJjdWRlTm9kZSIsIl9zY2FsZSIsImluZGV4IiwidHlwZUluZGV4Iiwibm9kZSIsInNjYWxlIiwieSIsImVuZFNjYWxlWSIsImNvcHkiLCJ0byIsIngiLCJ6IiwiZWFzaW5nIiwib25VcGRhdGUiLCJjYWxsIiwidW5pb24iLCJyZXBlYXQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBa0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7OzsrRUFFNEI7OztBQURqRUMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0pHLE0sR0FBUyxJQUFJTCxJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEM7Ozs7OztrQ0FFRCxDQUNKO0FBQ0g7OzsrQkFFSU0sSyxFQUFPQyxTLEVBQVU7QUFDbEI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhQSxLQUFiLENBRmtCLENBRUM7O0FBQ25CLGdCQUFHQyxTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZCxtQkFBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxDQUFoQixHQUFtQixDQUFuQjtBQUNILGFBRkQsTUFFSztBQUNELG1CQUFLRixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLENBQWhCLEdBQW9CLEdBQXBCO0FBQ0g7QUFDSjs7O3VDQUVXLENBRVg7Ozt3Q0FFYTtBQUFBOztBQUNWLGdCQUFJQyxTQUFTLEdBQUcsR0FBaEIsQ0FEVSxDQUNVOztBQUNwQixnQkFBSSxLQUFLSCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLENBQWhCLElBQXFCLEdBQXpCLEVBQThCO0FBQzFCO0FBQ0FDLGNBQUFBLFNBQVMsR0FBRyxDQUFaO0FBQ0gsYUFIRCxNQUdPLElBQUksS0FBS0gsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxDQUFoQixJQUFxQixDQUF6QixFQUE0QjtBQUMvQjtBQUNBQyxjQUFBQSxTQUFTLEdBQUcsR0FBWjtBQUNIOztBQUVEWCxZQUFBQSxJQUFJLENBQUNZLElBQUwsQ0FBVSxLQUFLUCxNQUFmLEVBQXVCLEtBQUtHLElBQUwsQ0FBVUMsS0FBakMsRUFWVSxDQVU4Qjs7QUFDeENSLFlBQUFBLFNBQVMsQ0FBQyxLQUFLSSxNQUFOLENBQVQsQ0FBc0I7QUFBdEIsYUFDQ1EsRUFERCxDQUNJLEdBREosRUFDUyxJQUFJYixJQUFKLENBQVMsS0FBS0ssTUFBTCxDQUFZUyxDQUFyQixFQUF3QkgsU0FBeEIsRUFBbUMsS0FBS04sTUFBTCxDQUFZVSxDQUEvQyxDQURULEVBQzJEO0FBQ3ZEQyxjQUFBQSxNQUFNLEVBQUMsY0FEZ0Q7QUFDakM7QUFDdEJDLGNBQUFBLFFBQVEsRUFBRSxvQkFBSTtBQUNWLGdCQUFBLE1BQUksQ0FBQ1QsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLE1BQUksQ0FBQ0osTUFBdkI7QUFDSDtBQUpzRCxhQUQzRCxFQU9DYSxJQVBELENBT00sWUFBSSxDQUNOO0FBQ0E7QUFDSCxhQVZELEVBV0NDLEtBWEQsR0FZQ0MsTUFaRCxDQVlRLENBWlIsRUFZVTtBQVpWLGFBYUNDLEtBYkQsR0FYVSxDQXdCRDtBQUNaLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUF6RDBCdEIsUzs7b0JBRloiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgLCBWZWMzLCB0d2VlblV0aWx9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJjdWRlTm9kZVwiKVxyXG5leHBvcnQgY2xhc3MgY3VkZU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIF9zY2FsZSA9IG5ldyBWZWMzKDAsMCwwKTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBpbml0KGluZGV4LCB0eXBlSW5kZXgpe1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pa55Z2X54q25oCBXHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4Oy8v55So5LqO6K6h566X5b2T5YmN5pa55Z2X55qE5L2N572uXHJcbiAgICAgICAgaWYodHlwZUluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUueSA9MTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlLnkgPSAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNpZGUoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTY2FsZSgpIHtcclxuICAgICAgICBsZXQgZW5kU2NhbGVZID0gMC41Oy8v5Ly457yp5Yqo5L2c5pyA5ZCO6auY5bqm55qE5YCN5pWwXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZS55ID09IDAuNSkge1xyXG4gICAgICAgICAgICAvL+WmguaenOW9k+WJjeWPquaciTAuNO+8jCDpgqPkuYjlsLHmiafooYzkvLjpq5jliqjkvZxcclxuICAgICAgICAgICAgZW5kU2NhbGVZID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5zY2FsZS55ID09IDEpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzlvZPliY3lj6rmnIkwLjjvvIwg6YKj5LmI5bCx5omn6KGM57yp5Yqo5L2cXHJcbiAgICAgICAgICAgIGVuZFNjYWxlWSA9IDAuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9zY2FsZSwgdGhpcy5ub2RlLnNjYWxlKTsvL+WwhuW9k+WJjeiKgueCueeahOWAjeaVsOeKtuaAgei1i+WAvOe7mSB0aGlzLl9zY2FsZVxyXG4gICAgICAgIHR3ZWVuVXRpbCh0aGlzLl9zY2FsZSkvL+aJp+ihjOe8k+WKqOWKqOS9nFxyXG4gICAgICAgIC50bygwLjEsIG5ldyBWZWMzKHRoaXMuX3NjYWxlLngsIGVuZFNjYWxlWSwgdGhpcy5fc2NhbGUueikse1xyXG4gICAgICAgICAgICBlYXNpbmc6J0JvdW5jZS1Jbk91dCcsLy/nvJPliqjnsbvlnotcclxuICAgICAgICAgICAgb25VcGRhdGU6ICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLl9zY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgLy/nvJPliqjliqjkvZzlrozmiJDml7bnmoTlm57osINcclxuICAgICAgICAgICAgLy/mtL7lj5HkuIDkuKrmtojmga/vvIzorqnnm7jpgrvnmoTmlrnlnZfmiafooYznirbmgIHlj5jljJZcclxuICAgICAgICB9KVxyXG4gICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgLnJlcGVhdCgxKS8v5Y+N5aSN5omn6KGM57yT5Yqo55qE5qyh5pWwXHJcbiAgICAgICAgLnN0YXJ0KCk7Ly/lvIDlp4vmiafooYxcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=