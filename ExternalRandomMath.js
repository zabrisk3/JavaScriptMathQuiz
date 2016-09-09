var operation_array=["+","-","x"];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function convert_to_function(symbol) {
	operation="";
	
	switch(symbol) {
        case "+":
        operation = add;
        break;
        case "-":
        operation = subtract;
        break;
        case "x":
        operation = multiply;
        			}
		return operation;
		//return eval(operation);
							} //*/

function add(a,b) {return a+b;}
function subtract(c,d) {return c-d;}
function multiply(e,f) {return e*f;}

function rando() {
	this.total_right=0;
	this.total_questions=0;
	currentscore=document.getElementById("currentscore");
	result = document.getElementById("result");
	if(this.total_questions > 10) {
		window.alert("Questions Over!");
		return;
		};	
	this.random1=0;
	this.random2=0;
	this.RandomOperation="";
	this.click_count=0;
	this.generatefunction=function(){ 
		result.innerHTML="";
		document.getElementById("myForm").reset();
		this.total_questions++;
		if(this.total_questions >10) {
		window.alert("Questions Over!");
		return;
		};			
		img=document.getElementById("face");
		img.src="#";
		rando1=getRandomInt(0,100);
		rando2=getRandomInt(0,100);
		this.RandomOperation=operation_array.randomElement();
		equation = document.getElementById("equation");
		equation.innerHTML=rando1+"  "+ this.RandomOperation+"  "+rando2;
		this.random1=rando1;
		this.random2=rando2;
		this.click_count=0;
		currentscore.innerHTML="You have answered "+this.total_right+" correctly " + "out of 					"+this.total_questions + ".";
		return;
		}
	this.checking=function() {			
		if(this.total_questions >10) {
		window.alert("Questions Over!");
		return;
		};			
		solution = document.getElementById("solution").value;
		try {
			if(solution=="")  throw "can not leave it blank.";
			if(isNaN(solution)) throw " must give a number";
			}
		catch(err) {
			result.innerHTML="Error: "+err;
			return;}
		this.click_count++;
		if(this.click_count > 1) {return;}
		solution=Number(solution);
		call=convert_to_function(this.RandomOperation);
		true_answer=call(this.random1,this.random2);
		if(solution==true_answer){
			result.innerHTML="Correct!"; 
			var img = document.getElementById("face");
			img.src = "smile.jpg";
			img.width="100";
			img.height="100";
			this.total_right++;
									}	
		else{ 
			result=document.getElementById("result");
			result.innerHTML="Incorrect. The answer was "+true_answer+".";
			var img = document.getElementById("face");
			img.src = "frown.jpg";
			img.width="100";
			img.height="100";			
			}		
			currentscore.innerHTML="You have answered "+this.total_right+" correctly " + "out of 					"+this.total_questions + ".";
					}

				
}

var RandomInstance=new rando();



