let app = new Vue({
	el: '#app',
	data: {
		coffee: {},
		extra: {},
		butType: false,
		butSize: false,
		butExtra: false,
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

			for (item of this.coffee) {
				console.log(item);
				if (item.title == this.picked.type) {
					console.log("inside if");
				}
			}
		}
	}


}) // fin app