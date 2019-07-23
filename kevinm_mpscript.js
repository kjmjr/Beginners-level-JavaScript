function DisplayResult(){
	
	var fullName = document.createElement('p');
	var firstName = document.getElementById('firstName_id').value;
	var lastName = document.getElementById('lastName_id').value;
	fullName.textContent = "Name: " + firstName + " " + lastName;
	
	//add attributes
	fullName.setAttribute("id", "result");
	fullName.setAttribute("class", "dynamic");
	
	//place element on page
	document.body.appendChild(fullName);
}//end function

function validate(){
	
	validateInput = true;
	var firstName = document.getElementById('firstName_id').value;
	var lastName = document.getElementById('lastName_id').value;
	
	var numbers = ['123456789'];
	
	var symbols = ['!@#$%^&*()_+{}|":?><=[]\';,./'];
	
	if(firstName == '' || lastName == ''){
		
		alert("can not allow empty text boxes");
		validateInput = false;
	}//end if
	
	else{
		
		validateInput = true;
		
	}//end else
		
		
	for(var i= 0; i < firstName.length; i++){
		
		if(firstName[i] == numbers){
			
			alert("first name can not contain numbers, sorry");
			validateInput = false;
			
		}//end if
		
		else if(firstName[i] == symbols){
			
			alert("first name can not contain symbols, sorry");
			validateInput = false;
			
		}//end else if 
		
		else{
			
			validateInput = true;
		}//end else
		
		
	}//end for 
		
	for(var s= 0; s < lastName.length; s++){
		
		if(lastName[s] == numbers){
			
			alert("last name can not contain numbers, sorry");
			validateInput = false;
			
		}//end if
		
		else if(lastName[i] == symbols){
			
			alert("last name can not contain symbols, sorry");
			validateInput = false;
			
		}//end else if 
		
		else{
			
			validateInput = true;
		}//end else
		
	}//end for
		
		
	
		
	return validateInput;
	
}//end function 


var unscramble_button = document.querySelector('#unscramblePhrase_id');

unscramble_button.addEventListener('click', function(){
	
	if(validate() == true){
		
		unscrambleWords();
		
		var removeItem = document.querySelector('#click_id');
		removeItem.parentNode.removeChild(removeItem);
		
		
	}//end if
	else{
		
		
		validate();
		
	}
	
	
}, false);//end of event listener


var startOver_button = document.querySelector('#clearResults_id');

startOver_button.addEventListener('click', function(){
	
  startOver();
	
	
}, false);//end of event listener


function startOver(){
	
	var startOverButton = true;
	
	if(startOverButton == true)
    {
	  
	  //clears the text boxes
	document.querySelector("#firstName_id").value = " ";
	document.querySelector("#lastName_id").value = " ";
	
	
	//clears the items of the page
	var resultFullName = document.querySelector('#result');
	var resultOneContent = document.querySelector('#result1');
	var resultTwoContent = document.querySelector('#result2');
	var resultUContent = document.querySelector('#resultU');
	var resultIContent = document.querySelector('#resultI');
	
	
	resultFullName.parentNode.removeChild(resultFullName);
    resultOneContent.parentNode.removeChild(resultOneContent);
	resultTwoContent.parentNode.removeChild(resultTwoContent);
	resultUContent.parentNode.removeChild(resultUContent);
	resultIContent.parentNode.removeChild(resultIContent);
   }//end if
  
  else
  {
	  
	  startOverButton = false;
  }//end else	
	  
  return startOverButton;
  
}//end function 

//this function will unscramble the words in the paragraph
	function unscrambleWords(){
       
	    //get the text of the object 
		var getWords = document.getElementById('jumble_sentence_id').innerHTML;

		var instructions = document.createElement('p');
		
		var header1 = document.createElement('h1');
		
		var header2 = document.createElement('h2');
		
		var unscrambledWords = document.createElement('p');
		
		//unscramble the words once you get the object
		//turn into array
		//loop through each item 
		//parse numbers (examine u price81 lower)
		//construct object 
		//construct new array 
		//display values in the array

        //Utoday.21
        //U
		//today
		//21
		
		//var caseVar = value.substring(start, end) 
		//var caseVar = value.substring(0, 1)
        
		//method A: (loop through each first digit)
			
			//-loop through value 
			//-pick off character using index from loop & charAt function 
			//-check for not a number or integer 
			//-keep going if not a number & continue (break)
			//-use index of loop & exit loop 
			//-use index to get a number string using... do not specify
			//-stop to the end of the string 
			
		//var wordVar = value.substring(1, ) 
		//var posVar 
				
		 //method B: (using Regular Expression)
		
		//[0-9]
		// /d 
		//var stringVar = "uchallenge.21";
		//var firstDigit = stringVar.match(/\d/);
		
		//get the position of the number to use with the substr
		//var numberPos = stringVar.indexOf(firstDigit);
		
		//get the actual number using position with substr function 
		//var actualNumber = stringVar.substr(numberPos);
				  		 			
		var sentence = "lchallenge.21 uthey16 lam2 lgreatest12 llearning3 "+
		"lup18 lmy7 land13 lthe11 lis6 lsmartest14 lteacher.8 lto19 ujavascript.4 " +
		"lstudents.15 ui1 ushe9 lstepped17 utina5 lthe20 lhas10";
		
		
	//convert sentence to uppercase and replace every period with a empty delimeter
       sentence = sentence.split(' ');
       var caseVar; 
	   var wordVar;
	   var posVar;
	   var matchFirstDigit; 
	   var actualNumber;	 	   
	   var secondArray = [];
	   
		
        
      for (var n = 0; n < sentence.length; n++) {
			
		///this matches the first digit with the sentence.....matchFirstDigit is 1
           matchFirstDigit = sentence[n].match(/\d/);
		   
		   ///this returns the position of the index....position is 4
		   posVar = sentence[n].indexOf(matchFirstDigit);
		   
		   ///this returns the actual number in the substring....at the end of the loop actual number is 10
		   actualNumber = sentence[n].substr(posVar);
		   
		   ///checking for the case of the string when we substring it starting at 0 and end at 1
		   //which ends up returning l in the string "lhas10"
		   caseVar = sentence[n].substring(0,1);
		   
		   ///this returns the word in the string starting at 1 and ends at matchFirstDigit
          wordVar = sentence[n].substring(1, posVar);
				
				//the u is uppercase and l is lowercase 
				if(caseVar == 'u'){
					//actually unscrambling the word 
                    secondArray[actualNumber] = wordVar.toUpperCase();
                                         			   			   				   			   					
				}//end if 
																
				else{
					//actually unscrambling the word 
                    secondArray[actualNumber] = wordVar.toUpperCase();              
				   			   
				}//end else
					
        																			   
       }//end for 

        //adding all the elements in the array to a whole sentence
        secondArray = secondArray[1] + ' ' +
            secondArray[2] + ' ' +
            secondArray[3] + ' ' +
            secondArray[4] + ' ' +
            secondArray[5] + ' ' +
            secondArray[6] + ' ' +
            secondArray[7] + ' ' +
            secondArray[8] + ' ' +
            secondArray[9] + ' ' +
            secondArray[10] + ' ' +
            secondArray[11] + ' ' +
            secondArray[12] + ' ' +
            secondArray[13] + ' ' +
            secondArray[14] + ' ' +
            secondArray[15] + ' ' +
            secondArray[16] + ' ' +
            secondArray[17] + ' ' +
            secondArray[18] + ' ' +
            secondArray[19] + ' ' +
            secondArray[20] + ' ' +
            secondArray[21];
		  	  	  	   
      					
		var msg2 = "Thanks for unscrambling the words!";
											
		var msg3 = "Unscrambled Sentence:";
				
		var msg1 = "Click the [clear page] button to start over!";
		
		
		unscrambledWords.textContent = secondArray;
	
        header1.textContent = msg2;
        header2.textContent = msg3;			
		
		instructions.textContent = msg1;
			 					
		//add attributes		
		header1.setAttribute("id", "result1");
		header1.setAttribute("class", "dynamic");
		
		header2.setAttribute("id", "result2");
		header2.setAttribute("class", "dynamic");
		
		unscrambledWords.setAttribute("id", "resultU");
		unscrambledWords.setAttribute("class", "dynamic");
		
		instructions.setAttribute("id", "resultI");
		instructions.setAttribute("class", "dynamic");

		//places elements on page		
        document.body.appendChild(header1);	
        
		//call the function for the name that was made at the top 
		DisplayResult();
        document.body.appendChild(header2);

        document.body.appendChild(unscrambledWords);

		document.body.appendChild(instructions);

	}//end function