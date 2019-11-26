import { _decorator, Component, Node , Vec3, tweenUtil} from "cc";
const { ccclass, property } = _decorator;

@ccclass("cudeNode")
export class cudeNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    _scale = new Vec3(0,0,0);

    start() {
        // Your initialization goes here.
    }

    changeScale() {
        let endScaleY = 0.5;//伸缩动作最后高度的倍数
        if (this.node.scale.y == 0.5) {
            //如果当前只有0.4， 那么就执行伸高动作
            endScaleY = 1;
        } else if (this.node.scale.y == 1) {
            //如果当前只有0.8， 那么就执行缩动作
            endScaleY = 0.5;
        }

        Vec3.copy(this._scale, this.node.scale);//将当前节点的倍数状态赋值给 this._scale
        tweenUtil(this._scale)//执行缓动动作
        .to(0.1, new Vec3(this._scale.x, endScaleY, this._scale.z),{
            easing:'Bounce-InOut',//缓动类型
            onUpdate: ()=>{
                this.node.scale = this._scale;
            }
        })
        .call(()=>{
            //缓动动作完成时的回调

        })
        .union()
        .repeat(1)//反复执行缓动的次数
        .start();//开始执行
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}
