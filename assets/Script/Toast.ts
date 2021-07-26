// show toast
export var showToast = function (content: string) {
    let runningScene = cc.director.getScene();
    let item = runningScene.getChildByName("TOAST");
    if (!item) {
        cc.resources.load<cc.Prefab>("Prefab/Toast", (err, prefabAsset) => {
            if (err) {
                console.error("showToast:" + err);
            } else {
                let runningScene = cc.director.getScene();
                let item = cc.instantiate(prefabAsset)
                item.name = "TOAST";
                item.getChildByName("text").getComponent(cc.Label).string = content;
                runningScene.addChild(item);
                item.setPosition(cc.winSize.width / 2, cc.winSize.height / 2)
                item.scale = 0;
                cc.tween(item).to(0.2, {scale: 1}).delay(1.5).call(() => {
                    item.destroy();
                }).start();
            }
        })
    }
}