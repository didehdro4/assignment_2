function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	 var time = int(random(4));
	//	time = 0 ;


	if (time == 0) {
		// Early morning
		background(83, 99, 123);
		fill(192, 96, 0);
		ellipse(625, 341, 40, 40);
	} else if (time == 1) {
		// morning
		background(114, 174, 226);
		fill(245, 170, 0)
		ellipse(510, 150, 45, 45);
	} else if (time == 2) {
		// noon
		background(205, 255, 255);
		fill(255, 230, 0)
		ellipse(320, 50, 45, 45);
	} else if (time == 3) {
		// sunset
		background(186, 164, 230);
		fill(242, 111, 50);
		ellipse(100, 289, 45, 45);
	} else if (time == 4) {
		// night
		background(3, 32, 61);
		fill(250, 250, 250);
		var starSize;
		starSize = random(4, 8);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
	}




	// set a fill color
	fill(0, 0, 0);

	// buildings
	rect(5, 330, 30, 40);
	rect(30, 230, 14, 150);
	rect(42, 210, 26, 150);
	rect(68, 230, 14, 150);
	rect(78, 310, 23, 120);
	rect(90, 288, 18, 127);
	rect(107, 304, 8, 130);
	rect(114, 327, 18, 150);
	rect(123, 254, 31, 300);
	rect(154, 278, 21, 150);
	rect(175, 317, 58, 100);
	rect(193, 242, 19, 200);
	rect(183, 287, 43, 200);
	rect(231, 178, 30, 300);
	rect(235, 150, 20, 30);
	rect(240, 130, 10, 20);
	rect(243, 80, 4, 50);
	rect(255, 293, 19, 300);
	rect(274, 258, 80, 300);
	rect(285, 240, 15, 18);
	rect(315, 250, 13, 8);
	rect(312, 247, 19, 3);
	rect(340, 232, 14, 30);
	rect(340, 224, 6, 8);
	rect(354, 317, 14, 200);
	rect(368, 335, 7, 40);
	rect(375, 349, 30, 11);
	rect(405, 273, 13, 100);
	rect(418, 250, 25, 119);
	rect(443, 273, 13, 100);
	rect(456, 325, 10, 35);
	rect(466, 309, 70, 55);
	rect(471, 300, 60, 9);
	rect(476, 290, 50, 10);
	rect(481, 280, 40, 10);
	rect(491, 260, 20, 20);
	rect(496, 240, 10, 40);
	rect(535, 345, 27, 20);
	rect(562, 229, 24, 140);
	rect(562, 222, 9, 7);
	rect(585, 312, 17, 48);
	rect(597, 287, 13, 80);
	rect(610, 337, 30, 23);
	rect(615, 330, 20, 7);
	rect(620, 315, 10, 15);
}
