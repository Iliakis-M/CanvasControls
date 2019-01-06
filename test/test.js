﻿var cc;

window.onload = function load() {
	if (CanvasControls.CanvasControls.ControllableCanvas.isMobile) {
		window.onerror = function error(e) {
			alert(e);
		};
	}
	cc = new CanvasControls.CanvasControls.ControllableCanvas({
		dragEnabled: true,
		wheelEnabled: true,
		pinchEnabled: true,
		useRight: 3
	});
	cc.handle();
	resize();
	frame();
};

function resize() {
	cc.target.width = innerWidth;
	cc.target.height = innerHeight;
} //resize

window.onresize = resize.bind(window);

function reset() {
	cc.scale(1, 1, true);
	cc.translate(0, 0, true);
} //reset

function frame() {
	cc.context.setTransform(1, 0, 0, 1, 0, 0);
	cc.context.clearRect(0, 0, cc.target.width, cc.target.height);
	cc.retransform();
	cc.context.fillRect(50, 50, 30, 30);
	cc.context.fillRect(200, 110, 50, 60);
	cc.context.fillRect(0, 0, 5, 5);
	cc.context.fillStyle = "rgba(250,5,5,.5)";
	cc.context.beginPath();
	cc.context.arc(...cc._coordinates.map((crd, idx) => (crd - cc.trans[idx]) / cc.scl[idx] ), 5, 0, Math.PI * 2);
	cc.context.fill();
	cc.context.closePath();
	cc.context.fillStyle = "black";
	requestAnimationFrame(frame);
} //frame
