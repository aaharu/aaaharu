enchant();
$(function() {
    var $wrapper = $("#wrapper"),
        sw = $wrapper.width(),
        sh = $wrapper.height() + 20,
        anim = new Core(sw, sh);
    anim.scale = 1;
    anim.preload("/img/human.png");
    anim.fps = 7;
    anim.onload = function() {
        var human = new Sprite(32, 32),
            h = sh - 32,
            w = sw + 32;
        human.image = anim.assets["/img/human.png"];
        human.frame = [1];
        human.x = 0;
        human.y = -32;
        anim.rootScene.addChild(human);
        human.tl
            .moveTo(0, h, ~~(h / 15))
            .then(function() {
                human.frame = [0, 1];
            })
            .moveTo(w, h, ~~(w / 10))
            .wait(150)
            .moveTo(0, -32, 0)
            .then(function() {
                human.frame = [1];
            })
            .loop();
    };
    anim.loadingScene.removeChild(anim.loadingScene.childNodes[0]);
    anim.start();
});
