var ctx = {
	qid: "",
	curQ: null,
	q: {add1: [], add2: [], sub1: [], sub2: []},
	done: {add1: 0, add2: 0, sub1: 0, sub2: 0}
};

(function() {
	function init() {
		$("#a").on('click', function(e) {
			if (ctx.curQ == null) { return; }
			if (e.target.tagName !== 'BUTTON') { return; }
			var btn = $(e.target);
			if (btn.hasClass('ng')) { return; }
			var a = btn.text();
			if (a == ctx.curQ[2]) {
				var cur = ctx.q[ctx.qid];
				cur.splice(cur.indexOf(ctx.curQ), 1);
				ctx.done[ctx.qid]++;
				newQuiz();
				if (cur.length > 0) {
					$("#ok").show().delay(500).fadeOut(100);
				}
			} else {
				btn.addClass('ng');
				$("#ng").show().delay(500).fadeOut(100);
				$("#q").css('background', 'red');
				setTimeout(function() { $("#q").css('background', ''); }, 500);
			}
		});

		$(window).on('resize', resize);
		resize();
		initQuiz();
		initMenu();
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
		$("#ok, #ng, #done").css({
			top: ((h - m) / 2) + "px",
			width: w + "px",
			fontSize: m + "px"
		});
	};

	function initQuiz() {
		for (var x = 1; x <= 10; x++) {
			for (var y = 1; y <= 10; y++) {
				if (x + y <= 10) {
					ctx.q.add1.push([x, y, x + y]);
				} else {
					if (x != 10 && y != 10) {
						ctx.q.add2.push([x, y, x + y]);
						ctx.q.sub2.push([x + y, y, x]);
					}
				}
				if (x - y >= 1) {
					ctx.q.sub1.push([x, y, x - y]);
				}
			}
		}
	};

	function initMenu() {
		$("div#select a").click(function() {
			ctx.qid = this.id;
			newQuiz();
		});
		$("div#qa header i").click(function() {
			showMenu();
		});
	}

	function showMenu() {
		$("#select").show();
		$("#qa, #done").hide();
	}

	function newQuiz() {
		$("#a button").removeClass('ng');
		$("#select").hide();
		$("#qa").show();

		// count
		$("#qa header .count").text(ctx.done[ctx.qid]);
		var a = $("#a");
		a.children().remove();

		var cur = ctx.q[ctx.qid];
		if (cur.length == 0) {
			$("#q").hide();
			$("#done").show();
			ctx.curQ = null;
			return;
		}

		// init answers
		for (var i = 1; i <= 10; i++) {
			$("<button>")
				.text(i + (ctx.qid === 'add2' ? 10 : 0))
				.appendTo(a);
		}

		$("#q").show();
		$("#done").hide();
		resize();

		ctx.curQ = cur[Math.floor(Math.random() * cur.length)];
		$("#q span").text(ctx.curQ[0] +
			(ctx.qid.charAt(0) === 'a' ? " + " : " - ") +
			ctx.curQ[1]);
	}

	init();
})();