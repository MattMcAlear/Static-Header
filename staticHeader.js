// Purpose:	For serving static headers to table headers
// By: 		Matt McAlear
// Date:	7/26/13

function makeStaticHeader(elementID){
	this._element 	= document.getElementById(elementID);
	this._jElement 	= $('#'+elementID);
	this._doc		= $(document);
	this._header	= document.getElementById('staticHead');
}

makeStaticHeader.prototype = {
	//restore constructor
	constructor: makeStaticHeader,
	
	init: function(){
		that = this;
		window.onscroll = function(){
	        if(that._doc.scrollTop() >= that._jElement.position().top){
		        that._header.style.display = 'block';
	        }else{
		        that._header.style.display = 'none';
	        }
	        
	        $('#staticHead').css({
		        'top': $(this).scrollTop()
		    });
	    };
	},
	
	makeHeader: function(){
		that = this;
    	var w = this._element.offsetWidth;
	    var body=document.getElementsByTagName('body')[0];
		var table=document.createElement('table');
		table.style.width=w+'px';
		table.style.position='absolute';
		table.style.top='0px';
		table.style.display='none';
		table.style.opacity=.75;
		table.style.backgroundColor='#888';
		table.style.color='white';
		table.style.overflowX='auto';
		table.setAttribute('border','1');
		table.setAttribute('id', 'staticHead');
		
		var tbody=document.createElement('tbody');
		var tr = this._element.cloneNode(true);
		tr.style.width=w+'px';
		var total = 0;
		for(var i=0; i<this._element.cells.length; i++){
			var pad;
			if(i==0 || (i+1==this._element.cells.length)){ pad=2; }else{ pad = 4; }
			tr.cells[i].style.width=(this._element.cells[i].offsetWidth-pad)+'px';
		}
		
		//Set elements
		tbody.appendChild(tr);
		table.appendChild(tbody);
		body.appendChild(table);
		
		//Set new static header
		that._header = document.getElementById('staticHead');
		
		//init listener
		that.init();
	}
}