(function(){
	this.SlideController = function(){

		this.defaults = {
			id: '',
            container: '',
            childrens: '',
            claseactivo: 'activo',
            next: 0,
            autoslide: false,
            interval: false,
            autotime: false,
            maxrand: 6000,
            minrand: 4500
        }
        this.options = extendDefaults(this.defaults, arguments[0]);
        if(this.options.autoslide){
        	this.autoslide();
        }
	}

	SlideController.prototype.autoslide = function(){
		var _ = this;
		var time = _.options.autotime || Math.floor((Math.random() * _.options.maxrand) + _.options.minrand); 
		_.options.interval = setInterval(function(){
			var slide = $(_.options.id+" "+_.options.container);
			var slides = slide.children(_.options.childrens);
			
			$.each(slides, function(v,i){
				if($(i).hasClass("activo")){
					_.options.next = (v + 1) + 1 ;
				}
			});
			if(_.options.next > slides.length){
				_.options.next = 1;
			}
			slides.removeClass("activo");
			$(_.options.id+" "+_.options.container+" "+_.options.childrens+":nth-child("+(_.options.next)+")").addClass("activo");
		},time);
	}

	// function para extender las opciones del plugins
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
}());
