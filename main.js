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
		this.add = 1;
		if(this.rev) {
			this.r += 180;
			this.add = -1;
		}
		console.log(this.rev);
	},
	$update: function() {
		this.node.setAttribute("rotation", "y(" + this.r + ")");
		this.r += this.add / 10;
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
