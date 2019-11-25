import { _decorator, Component, Node , systemEvent, SystemEventType, CameraComponent, geometry, PhysicsSystem, Layers} from "cc";
const { ccclass, property } = _decorator;

@ccclass("conCamera")
export class conCamera extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    _ray = new geometry.ray();//这个对象的作用不甚适合讲解，怕是大家要自行去探讨
    _maxDistance= 100;

    start () {
        // Your initialization goes here.
        //监听系统点击事件，参数的含义是：要监听的事件，回调函数，作用对象
        //此处监听的事鼠标的按下事件，回调函数是 this._touchStart
        systemEvent.on(SystemEventType.TOUCH_START, this._touchStart, this);
    }

    _touchStart(touch, event){//回调函数
        //这一段代码获取的是鼠标点击屏幕时，点击到的最近的模型，存放到result中。
        let camera = this.node.getComponent(CameraComponent);//获取节点上的摄像机组件
        camera.screenPointToRay(touch._point.x, touch._point.y, this._ray);
        let result = PhysicsSystem.instance.raycastClosest(this._ray, Layers.Enum.DEFAULT, this._maxDistance);
        //result为true时表示有获取到模型
        const r = PhysicsSystem.instance.raycastClosestResult._collidier;
        console.log('----------------获取到的对象', r);
        return;
        if (result) {
            const r = PhysicsSystem.instance.raycastClosestResult._collidier.node.getComponent(cubeNode);
            r.changeScale();
        }
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}
