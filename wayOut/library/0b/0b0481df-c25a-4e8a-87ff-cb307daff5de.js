"use strict";

System.register(["cc", "./cudeNode.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, cudeNode, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, levelNode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_cudeNodeJs) {
      cudeNode = _cudeNodeJs.cudeNode;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "0b048HfwlpOiof/yzB9r/Xe", "levelNode"); // begin levelNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("levelNode", levelNode = (_dec = ccclass("levelNode"), _dec2 = property([cc.Prefab]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(levelNode, _Component);

        function levelNode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, levelNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(levelNode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "cudeNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(levelNode, [{
          key: "start",
          value: function start() {
            this.initItemData();
          }
        }, {
          key: "initItemData",
          value: function initItemData() {
            //this.childArr = [];//存放当前关卡数据 -- 方块对象
            var levelData = [[0, 1, 0], [0, 1, 0], [0, 1, 0]]; //关卡上要摆的方块位置

            var x_mid = Math.floor(levelData[0].length / 2); //中心位置 x

            var y_mid = Math.floor(levelData.length / 2); //中心位置 y

            for (var i = 0; i < levelData.length; i++) {
              for (var j = 0; j < levelData[i].length; j++) {
                if (levelData[i][j] != 0) {
                  //数组中的元素为0时，表示空位置
                  console.log('--------------------aaa');
                  var x = j - x_mid;
                  var z = i - y_mid;
                  var index = i * levelData[0].length + j;
                  var node = cc.instantiate(this.cudeNode);
                  node.parent = this.node;
                  node.position = new cc.v3(x, 0.5, z);
                  node.getComponent(cudeNode).init(index, levelData[i][j]); //this.childArr.push(node);
                }
              }
            }
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return levelNode;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cudeNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end levelNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvbGV2ZWxOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjdWRlTm9kZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImxldmVsTm9kZSIsImNjIiwiUHJlZmFiIiwiaW5pdEl0ZW1EYXRhIiwibGV2ZWxEYXRhIiwieF9taWQiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJ5X21pZCIsImkiLCJqIiwiY29uc29sZSIsImxvZyIsIngiLCJ6IiwiaW5kZXgiLCJub2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInYzIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7O0FBQ1pDLE1BQUFBLFEsZUFBQUEsUTs7O2dGQUNnRTs7O0FBQWpFQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBTUhDLFFBQVEsQ0FBQyxDQUFDRSxFQUFFLENBQUNDLE1BQUosQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHQTtBQUNMLGlCQUFLQyxZQUFMO0FBQ0g7Ozt5Q0FFYTtBQUNWO0FBQ0EsZ0JBQUlDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQUQsRUFDQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQURELEVBRUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FGRCxDQUFoQixDQUZVLENBSWdCOztBQUMxQixnQkFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhSSxNQUFiLEdBQW9CLENBQS9CLENBQVosQ0FMVSxDQUtvQzs7QUFDOUMsZ0JBQUlDLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdILFNBQVMsQ0FBQ0ksTUFBVixHQUFpQixDQUE1QixDQUFaLENBTlUsQ0FNaUM7O0FBQzNDLGlCQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR04sU0FBUyxDQUFDSSxNQUE3QixFQUFxQ0UsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQyxtQkFBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdQLFNBQVMsQ0FBQ00sQ0FBRCxDQUFULENBQWFGLE1BQWhDLEVBQXdDRyxDQUFDLEVBQXpDLEVBQTRDO0FBQ3hDLG9CQUFHUCxTQUFTLENBQUNNLENBQUQsQ0FBVCxDQUFhQyxDQUFiLEtBQW1CLENBQXRCLEVBQXdCO0FBQUM7QUFDckJDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLHNCQUFJQyxDQUFDLEdBQUdILENBQUMsR0FBR04sS0FBWjtBQUNBLHNCQUFJVSxDQUFDLEdBQUdMLENBQUMsR0FBR0QsS0FBWjtBQUNBLHNCQUFJTyxLQUFLLEdBQUdOLENBQUMsR0FBR04sU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhSSxNQUFqQixHQUEwQkcsQ0FBdEM7QUFDQSxzQkFBSU0sSUFBSSxHQUFHaEIsRUFBRSxDQUFDaUIsV0FBSCxDQUFlLEtBQUtyQixRQUFwQixDQUFYO0FBQ0FvQixrQkFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBS0YsSUFBbkI7QUFDQUEsa0JBQUFBLElBQUksQ0FBQ0csUUFBTCxHQUFnQixJQUFJbkIsRUFBRSxDQUFDb0IsRUFBUCxDQUFVUCxDQUFWLEVBQWEsR0FBYixFQUFrQkMsQ0FBbEIsQ0FBaEI7QUFDQUUsa0JBQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQnpCLFFBQWxCLEVBQTRCMEIsSUFBNUIsQ0FBaUNQLEtBQWpDLEVBQXdDWixTQUFTLENBQUNNLENBQUQsQ0FBVCxDQUFhQyxDQUFiLENBQXhDLEVBUm9CLENBU3BCO0FBQ0g7QUFDSjtBQUNKO0FBRUosVyxDQUVEO0FBQ0E7QUFDQTs7OztRQXZDMkJmLFM7Ozs7O2lCQU1oQixJOzs7O29CQVRHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IGN1ZGVOb2RlIH0gZnJvbSBcIi4vY3VkZU5vZGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwibGV2ZWxOb2RlXCIpXHJcbmV4cG9ydCBjbGFzcyBsZXZlbE5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGN1ZGVOb2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0SXRlbURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0SXRlbURhdGEoKXtcclxuICAgICAgICAvL3RoaXMuY2hpbGRBcnIgPSBbXTsvL+WtmOaUvuW9k+WJjeWFs+WNoeaVsOaNriAtLSDmlrnlnZflr7nosaFcclxuICAgICAgICBsZXQgbGV2ZWxEYXRhID0gW1swLDEsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbMCwxLDBdLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFswLDEsMF1dOy8v5YWz5Y2h5LiK6KaB5pGG55qE5pa55Z2X5L2N572uXHJcbiAgICAgICAgbGV0IHhfbWlkID0gTWF0aC5mbG9vcihsZXZlbERhdGFbMF0ubGVuZ3RoLzIpOy8v5Lit5b+D5L2N572uIHhcclxuICAgICAgICBsZXQgeV9taWQgPSBNYXRoLmZsb29yKGxldmVsRGF0YS5sZW5ndGgvMik7Ly/kuK3lv4PkvY3nva4geVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZXZlbERhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGV2ZWxEYXRhW2ldLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGlmKGxldmVsRGF0YVtpXVtqXSAhPSAwKXsvL+aVsOe7hOS4reeahOWFg+e0oOS4ujDml7bvvIzooajnpLrnqbrkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS1hYWEnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGogLSB4X21pZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeiA9IGkgLSB5X21pZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpICogbGV2ZWxEYXRhWzBdLmxlbmd0aCArIGo7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1ZGVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IGNjLnYzKHgsIDAuNSwgeik7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY3VkZU5vZGUpLmluaXQoaW5kZXgsIGxldmVsRGF0YVtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNoaWxkQXJyLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==