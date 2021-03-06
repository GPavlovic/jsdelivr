ej.addCulture( "et-EE", {
	name: "et-EE",
	englishName: "Estonian (Estonia)",
	nativeName: "eesti (Eesti)",
	language: "et",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": " ",
		".": ",",
		"NaN": "avaldamatu",
		negativeInfinity: "miinuslõpmatus",
		positiveInfinity: "plusslõpmatus",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],
				namesAbbr: ["P","E","T","K","N","R","L"],
				namesShort: ["P","E","T","K","N","R","L"]
			},
			months: {
				names: ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember",""],
				namesAbbr: ["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets",""]
			},
			AM: ["EL","el","EL"],
			PM: ["PL","pl","PL"],
			eras: [{"name":"anno Domini","start":null,"offset":0}],
			patterns: {
				d: "d.MM.yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "dd. MMMM"
			}
		}
	}
});