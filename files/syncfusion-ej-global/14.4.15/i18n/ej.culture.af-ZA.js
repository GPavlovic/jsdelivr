ej.addCulture( "af-ZA", {
	name: "af-ZA",
	englishName: "Afrikaans (South Africa)",
	nativeName: "Afrikaans (Suid-Afrika)",
	language: "af",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": " ",
		".": ",",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "%"
		},
		currency: {
			pattern: ["$-n","$ n"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			firstDay: 0,
			days: {
				names: ["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],
				namesAbbr: ["Son","Maan","Dins","Woen","Dond","Vry","Sat"],
				namesShort: ["So","Ma","Di","Wo","Do","Vr","Sa"]
			},
			months: {
				names: ["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],
				namesAbbr: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""]
			},
			AM: ["VM.","vm.","VM."],
			PM: ["NM.","nm.","NM."],
			patterns: {
				d: "yyyy/MM/dd",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});