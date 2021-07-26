// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {showToast} from "./Toast";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    MainCamera = null

    @property(cc.Node)
    button = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.MainCamera = this.node.getChildByName("MainCamera")
        this.button = this.MainCamera.getChildByName("button");
        this.button.on("click", this.onClick, this)
    }

    start() {

    }

    onClick() {
        showToast("Hello World")
    }

    // update (dt) {}
}
