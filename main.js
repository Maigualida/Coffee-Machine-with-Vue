let app = new Vue({
	el: '#app',
	data: {
		coffee: {},
		extra: {},
		butType: false,
		butSize: false,
		butExtra: false,
		priceC: 0,
		priceE: 0,
		total: 0,
		picked: {
			type: '',
			size: '',
			extra: '',
		},
	},
	created: function () {
		// fonction (hook) qui se grefe dès la création de l'instance
		let url = "http://localhost:3000/coffee";

		// Requete en AJAX de typ)e GET derriere une URL
		this.$http.get(url).then(function (reponse) {
			app.coffee = reponse.body; // body: corps de ma réponse
			console.log(app.coffee);
		});

		url = "http://localhost:3000/extra";

		// Requete en AJAX de typ)e GET derriere une URL
		this.$http.get(url).then(function (reponse) {
			app.extra = reponse.body; // body: corps de ma réponse
			console.log(app.extra);
		});

	},
	methods: {
		pickedT: function () {
			this.butType = true;
		},
		payment: function () {
			let price = 0;
			if (this.picked.size === '' || this.picked.type === '') {
				alert("please pick a size or type")
			} else {
				if (this.picked.size === 'Small') {
					for (item of this.coffee) {
						console.log(item);
						if (item.title == this.picked.type) {
							this.priceC = item.priceS;
							console.log(" small")
						}
					} // end for s
				}// end if small
				if (this.picked.size === 'Medium') {
					for (item of this.coffee) {
						console.log(item);
						if (item.title == this.picked.type) {
							this.priceC = item.priceM;
							console.log("medium");
						}
					} // end for M
				}// end if M
				if (this.picked.size === 'Large') {
					for (item of this.coffee) {
						console.log(item);
						if (item.title == this.picked.type) {
							this.priceC = item.priceL;
							console.log(" L");
						}
					} // end for L
				}// end if L
			}// end else 
			if (this.picked.extra === '') {
				console.log("no extra")
			}
			else {
				console.log("extra")
				if (this.picked.size === 'Small') {
					for (item of this.extra) {
						if (item.name == this.picked.extra) {
							this.priceE = item.priceS;
							console.log("extra,  small", price)
						}
					} // end for s
				}// end if small
				if (this.picked.size === 'Medium') {
					for (item of this.extra) {
						console.log(item);
						if (item.name == this.picked.extra) {
							this.priceE = item.priceM;
							console.log("medium extra ", price);
						}
					} // end for M
				}// end if M
				if (this.picked.size === 'Large') {
					for (item of this.extra) {
						console.log(item);
						if (item.name == this.picked.extra) {
							this.priceE = item.priceL;
							console.log("L extra", price);
						}
					} // end for M
				}// end if M

			}// end else extra

			this.total = this.priceC + this.priceE;

		}, // end funtion
		change: function () {
			this.picked.type = '';
			this.picked.size = '';
			this.picked.extra = '';
		}


	}// end methods


}) // fin app