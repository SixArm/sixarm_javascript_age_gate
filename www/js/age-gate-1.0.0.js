function ageGate(target) { 	
	var top = $(target).closest(".age-gate");
    console.log("ageGate id:" + top.attr('id'));

	var gate = parseInt(target.gate.value, 10);
	var y = parseInt(target.year.value, 10);
	var m = parseInt(target.month.value, 10);
	var d = parseInt(target.day.value, 10);

	if (isNaN(gate)){ alert("This form is missing the age gate."); return false; }
	if (isNaN(y)){ alert("Please choose a year."); return false; }
	if (isNaN(m)){ alert("Please choose a month."); return false; }
	if (isNaN(d)){ alert("Please choose a day."); return false; }

	var birth = new Date(y,m-1,d);
	var today = new Date();

	var age = ageInYears(birth, today);
	var accept = (age >= gate);

	if (accept){
		alert("ageGate accepting");
		top.find(".age-gate-prompt").hide();
		top.find(".age-gate-accept").show();
	}
	else{
		alert("ageGate rejecting");
		top.find(".age-gate-prompt").hide();
		top.find(".age-gate-reject").show();
	}
	return false; 
}

function ageInYears(d1, d2){
	return (d2.getFullYear() - d1.getFullYear()) - (((d1.getMonth() < d2.getMonth()) || ((d1.getMonth() === d2.getMonth()) && (d1.getDate() <= d2.getDate()))) ? 0 : 1);
}
