		var inv = 
			[
				{ICode:101,ItemName:'Roses',Rate:'25',Unit:'Piece'},
				{ICode:102,ItemName:'Roses',Rate:'205',Unit:'Bunch'},
				{ICode:103,ItemName:'Roses',Rate:'520',Unit:'Bouquet'},
				{ICode:104,ItemName:'Tulips',Rate:'35',Unit:'Piece'},
				{ICode:105,ItemName:'Tulips',Rate:'250',Unit:'Bunch'},
				{ICode:106,ItemName:'Tulips',Rate:'600',Unit:'Bouquet'},
				{ICode:107,ItemName:'Daffodil',Rate:'45',Unit:'Piece'},
				{ICode:108,ItemName:'Daffodil',Rate:'150',Unit:'Bunch'},
				{ICode:109,ItemName:'Daffodil',Rate:'250',Unit:'Bouquet'}
			];
			
			function init(){
				cb = document.getElementById("selItemName");
				for(i=0;i<inv.length;i++){
					opt = document.createElement("option");
					opt.value=inv[i].ICode;
					opt.innerHTML = inv[i].ItemName +"  "+inv[i].Unit;
					cb.append(opt);
				}
			}
			
			function getItemDetails(){
				cb = document.getElementById("selItemName");
				sp1 = document.getElementById("spICode");
				sp2 = document.getElementById("spRate");
				
				icode = parseInt(cb.value);
				item = null;
				for(i=0;i<inv.length;i++) {
					if(inv[i].ICode==icode){
						item = inv[i];
						break;
					}
				}
				if(item==null){
					sp1.innerHTML="";
					sp2.innerHTML="";
				}else{
					sp1.innerHTML=item.ICode;
					sp2.innerHTML=item.Rate;
				}
				
				computeCost();
			}
			function computeCost(){
				tq = document.getElementById("txtQty");
				spr = document.getElementById("spRate");
				spc = document.getElementById("spCost");
				
				rate = parseFloat(spr.innerHTML);
				qty = parseInt(tq.value);
				cost = rate*qty;
				spc.innerHTML=cost;
			}
			
			function addItem(){
				tbody = document.getElementById("tbodyItems");
				cb = document.getElementById("selItemName");
				sp1 = document.getElementById("spICode");
				sp2 = document.getElementById("spRate");
				tq = document.getElementById("txtQty");
				spc = document.getElementById("spCost");
			
				col1 = document.createElement("td");
				col1.innerHTML = cb.options[cb.selectedIndex].innerHTML;
				col2 = document.createElement("td");
				col2.innerHTML = sp1.innerHTML;
				col3 = document.createElement("td");
				col3.innerHTML = sp2.innerHTML;
				col4 = document.createElement("td");
				col4.innerHTML = tq.value;
				col5 = document.createElement("td");
				col5.innerHTML = spc.innerHTML;
				btn = document.createElement("button");
				btn.innerHTML="Remove";
				col6 = document.createElement("td");
				col6.append(btn);
							
				row = document.createElement("tr");
				row.append(col1);
				row.append(col2);
				row.append(col3);
				row.append(col4);
				row.append(col5);
				row.append(col6);
				
				//row.style = "border-bottom:1px solid #ffffff";
				
				btn.onclick = function(eventObject){
								eventObject.target.
								parentElement.parentElement.remove();
								computeBillAmount();
							};
				
				tbody.append(row);			
				computeBillAmount();
			}
			
			function computeBillAmount(){
				var sum=0;
				tbody = document.getElementById("tbodyItems");	
				for(i=0;i<tbody.childNodes.length;i++){
					costCol = tbody.childNodes[i].childNodes[4];
					if(costCol!=null){
						sum += parseInt(costCol.innerHTML)
					}
				}
				tdBillAmt = document.getElementById("tdBillAmt");
				tdBillAmt.innerHTML = sum;
			}