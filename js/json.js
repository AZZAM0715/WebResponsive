$.getJSON('json/menu.json', function (data) {
    		let menu = data.menu;
    		$.each(menu, function(i, data){
    			$('#daftar-menu').append('<div class="col-md-4"><div class="card" style="width: 18rem;"><img src="img/menu/' + data.gambar +' " class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">$ ' + data.harga + '</h5><a href="contact.html" class="btn btn-primary">Donate now</a></div></div></div>')
    		});

    	});