const Vector3 = gr.lib.math.Vector3;
gr.registerComponent("Earth", {
	attribute: {
		rev: {
			default: false,
			converter: "Boolean"
		}
	},
	$mount: function() {
		this.__bindAttributes();
		this.r = 0;
		console.log(this.rev);
	},
	$update: function() {
		this.node.setAttribute("rotation", "0, " + this.r + ", " + 30);
		this.r += 1 / 10;
	}
});
gr.registerNode("earth", ["Earth"], {
	geometry: "sphere",
	scale: "5,5,5",
	position: "0,0,0",
	rotation: "0,0,0",
	texture: "./earth_sw.png"
}, "mesh");

gr.registerComponent("Clockbg", {
	attribute: {},
	$mount: function() {
	},
	$update: function() {
	}
});
gr.registerNode("clockbg", ["Clockbg"], {
	geometry: "quad",
	scale: "4,1,0",
	color: "rgba(200,200,200,1)",
	position: "0,0,10",
	rotation: "0,0,0",
}, "mesh");
