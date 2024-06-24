function mdSizeLastGridItem() {

	if(window.matchMedia("(min-width: 992px)").matches){

		var figs = document.querySelectorAll("figure");
		var count=1;

		for(var i=0;i<figs.length;i++){
			console.log("sos");
			if(i%3==0 || i%3==1){
				var oldArea = ""+(count);
				figs[i].style.gridArea = oldArea;
				figs[i].style.width = "40vmin";
				figs[i].querySelector("img").style.width = "40vmin";
			}else{
				var newArea = (count+1)+ "/ span 2";
				figs[i].style.gridArea =  newArea;
				figs[i].style.width = "90vmin";
				figs[i].querySelector("img").style.width = "90vmin";
				count+=2;
			}
		}

	}else if(window.matchMedia("(min-width: 772px)").matches){

		var figs = document.querySelectorAll("figure");
		var count=1;

		for(var i=0;i<figs.length;i++){
			figs[i].style.gridArea = (count)+"";
			figs[i].style.width = "36vmin";
			figs[i].querySelector("img").style.width = "36vmin";
			if(i%2==1)count++;
		}

		if(figs.length%2==1){
			
			var newArea = figs.length-1 + " / span 2";
			figs[figs.length-1].style.gridArea = newArea;
			figs[figs.length-1].style.width = "90vmin";
			figs[figs.length-1].style.margin = "0 auto";
			figs[figs.length-1].querySelector("img").style.width = "90vmin";

		}

	}else{
		
		var figs = document.querySelectorAll("figure");

		for(var i=0;i<figs.length;i++){
			figs[i].style.gridArea = (i+1)+"";
			figs[i].style.width = "90vmin";
			figs[i].querySelector("img").style.width = "90vmin";
		}

	}

}