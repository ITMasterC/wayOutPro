import { _decorator, Component, Node } from "cc";
import { cudeNode } from "./cudeNode";
const { ccclass, property } = _decorator;

@ccclass("levelNode")
export class levelNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property([cc.Prefab])
    cudeNode = null;

    start () {
        this.initItemData();
    }

    initItemData(){
        //this.childArr = [];//存放当前关卡数据 -- 方块对象
        let levelData = [[0,1,0],
                         [0,1,0], 
                         [0,1,0]];//关卡上要摆的方块位置
        let x_mid = Math.floor(levelData[0].length/2);//中心位置 x
        let y_mid = Math.floor(levelData.length/2);//中心位置 y
        for(let i = 0; i < levelData.length; i++){
            for(let j = 0; j < levelData[i].length; j++){
                if(levelData[i][j] != 0){//数组中的元素为0时，表示空位置
                    console.log('--------------------aaa');
                    let x = j - x_mid;
                    let z = i - y_mid;
                    let index = i * levelData[0].length + j;
                    let node = cc.instantiate(this.cudeNode);
                    node.parent = this.node;
                    node.position = new cc.v3(x, 0.5, z);
                    node.getComponent(cudeNode).init(index, levelData[i][j]);
                    //this.childArr.push(node);
                }
            }
        }

    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}
