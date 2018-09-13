var ctx = {
	add: true,
	addOK: 0,
	subOK: 0,
	addNG: 0,
	subNG: 0,
	curQ: null,
	curAll: null,
	addAll: [],
	subAll: []
};

(function() {
	function init() {
		$("#menu button").on('click', function() {
			ctx.add = (this.id == "menu_add");
			$("#menu button").removeClass('cur');
			$(this).addClass('cur');
			newQuiz();
		});

		$("#a button").on('click', function() {
			if (ctx.curQ == null) { return; }
			var a = $(this).text();
			if (a == ctx.curQ[2]) {
				if (ctx.add) { ctx.addOK++; } else { ctx.subOK++; }
				ctx.curAll.splice(ctx.curAll.indexOf(ctx.curQ), 1);
				newQuiz();
				$("#ok").show().delay(500).fadeOut(100);
			} else {
				if (ctx.add) { ctx.addNG++; } else { ctx.subNG++; }
				$(this).addClass('ng');
				$("#ng").show().delay(500).fadeOut(100);
				$("#q").css('background', 'red');
				setTimeout(function() { $("#q").css('background', ''); }, 500);
			}
			updateCount();
		});

		$(window).on('resize', resize);
		resize();
		initQuiz();
		newQuiz();
	}

	function resize() {
		var w = $("body").width();
		var h = $("body").height();
		var y = $("#a").position()['top'];
		var bw = Math.floor(w / 3);
		var bh = (h - y) / 4;
		$("#menu button").css({
			width: (w / 2) + "px"
		});
		$("#a button").css({
			width: bw + "px",
			height: bh + "px",
			fontSize: (Math.min(bw, bh) * .6) + "px"
		});

		var m = Math.min(w, h) * .5;
		$("#ok, #ng").css({
			top: ((h - m) / 2) + "px",
			width: w + "px",
			fontSize: m + "px"
		});
	};

	function initQuiz() {
		for (var x = 1; x <= 10; x++) {
			for (var y = 1; y <= 10; y++) {
				if (x + y <= 10) {
					ctx.addAll.push([x, y, x + y]);
				}
				if (x - y >= 1) {
					ctx.subAll.push([x, y, x - y]);
				}
			}
		}
	};

	function newQuiz() {
		$("#a button").removeClass('ng');

		ctx.curAll = (ctx.add ? ctx.addAll : ctx.subAll);
		if (ctx.curAll.length == 0) {
			$("#q").text("🎉");
			ctx.curQ = null;
			return;
		}

		ctx.curQ = ctx.curAll[Math.floor(Math.random() * ctx.curAll.length)];
		$("#q").text(ctx.curQ[0] +
			(ctx.add ? "＋" : "－") +
			ctx.curQ[1]);
	}

	function updateCount() {
		$("#addOK").text(ctx.addOK);
		$("#addNG").text(ctx.addNG);
		$("#subOK").text(ctx.subOK);
		$("#subNG").text(ctx.subNG);
	}

	init();
})();