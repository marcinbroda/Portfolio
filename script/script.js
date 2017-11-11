( function() {
	
$(document).ready( function () {

	var links = $(".trans");
		
	links.on("click", function () {
		var targetHash = this.hash,
		    $target = $(targetHash),
		    target_h3 =  $target.find(".accordion_title_about"),
	  		target_p = target_h3.next(".accordion_text"),
	  		target_i = target_h3.find(".fa-times");
		 	

		  if (targetHash === "#aboutMe") {  			
		  		target_p.slideDown(300);
		  		target_i.slideDown(300);
		  		target_h3.addClass("accordion_title_active");	
		  }

       $('html, body').stop().animate({
        'scrollTop': $target.offset().top-30
   		 }, 900, 'swing', function () {
    	
			});
	       	
			  return false;
	});				


	var titles = $(".accordion_title"),
	texts = $(".accordion_text"),
	xEnd = $(".fa-times");

	texts.hide();
	xEnd.hide();

	titles.on("click", function () {

		titles.removeClass("accordion_title_active");
		texts.stop().slideUp(300);
		xEnd.slideUp(300);

		var that = $(this);
		var close = that.find(".fa-times");
		var	text= that.next();
		var	isVisible = text.is(":visible");

		that.toggleClass("accordion_title_active", !isVisible);

		if(!isVisible){
			text.stop().slideDown(300);
			close.slideDown(300);
		
		} else {
			text.stop().slideUp(300);
			close.slideUp(300);		
		}

	});		
      
      /*formularz*/

var form = document.querySelector("#myForm"),
	fields = form.querySelectorAll("[data-error]");

		function isNotEmpty(field){
			return field.value !== "";
		}

		function containEmail(field){
			return field.value.indexOf("@") !== -1;
		}

		function moreThan(field, min){
			return field.value.length > min;
		}

		function displayErrors(errors){
			var ul = document.querySelector("ul.errors");

			if(ul === null){
				ul = document.createElement("ul");
				ul.classList.add("errors");
			}

			ul.innerHTML ="";

			errors.forEach(function(error){
				li = document.createElement("li");
				li.textContent = error;
				ul.appendChild(li);
			})
			form.parentNode.insertBefore(ul, form);
		}

	form.addEventListener("submit", function(e){
		e.preventDefault();
		var errors = [];

		for (var i =0; i <fields.length; i++) {

			var field = fields[i],
				isValid = false;

			if (field.type === "text") {
				isValid = isNotEmpty(field);
			}else if(field.type === "email"){
				isValid = containEmail(field);

			}else if (field.type === 'select-one'){
				isValid = isNotEmpty(field);

			}else if (field.type === "textarea") {
				isValid = moreThan(field, 3);

			}

			if (isValid === false) {
				field.classList.add("error");
				errors.push(field.dataset.error);
			}else {
				field.classList.remove("error");
			}
		}

		if (errors.length > 0) {
		 	displayErrors(errors);
		} else {
			alert("Przepraszamy, brak obsuługi danych w skrypcie PHP")/*form.submit();*/
		}

	},false)
});
})();