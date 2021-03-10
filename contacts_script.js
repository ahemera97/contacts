var conName1=[""],conName2=[""],conNumber=[""],xContact,contName1,contName2,contNumber,srchContact,close;
do
{
var pName=prompt("Enter your name :","");
if(!isNaN(pName)||pName=="")
alert("Please, Enter your name!!");
else
alert ("hi, "+pName+".\n"+"Welcome to our contacts program.");
}while(!isNaN(pName)||pName=="")
do
{
	var processNumber=prompt("Enter Process Number :\n1 ... My Contacts          2 ... Create Contact\n3 ... Edit Contact           4 ... Remove Contact\n5 ... Search                     6 ... Close","");
	var processNum=Number(processNumber);
	switch (processNum)
	{
	 case 1:
		alert("My Contacts\n\n"+myContacts(xContact,conName1,conName2,conNumber));
	 break;
	 case 2:
		addContact(contName1,contName2,contNumber,conName1,conNumber,srchContact,conName2);
	 break;
	 case 3:
		editContact(conName1,contName1,conNumber,contName2,conName2);
	 break;
	 case 4:
		removeContact(conName1,conNumber,contNumber,contName2,conName2);
	 break;
	 case 5:
		do
		{
		contNumber=prompt("Search\n\nEnter process number:\n1 ->> Search by contact's first name.\n2 ->> Search by contact's last name.\n3 ->> Search by contact's number.\n\n0 ->> back","");
		switch (contNumber)
		{
		 case "1":
		 searchContact(conName1,contName1,srchContact);
		 break;
		 case "2":
		 searchContact(conName2,contName1,srchContact);
		 break;
		 case "3":
		 searchContact(conNumber,contName1,srchContact);
		 break;
		 case "0":
		 break;
		 default:
		 alert ("Please enter number between 0~3");
		 break;
		}
		}while (contNumber!="0")
	 break;
	 case 6:
		var z=closeProgram(close,pName);
	break;
	 default:
		alert("Please enter number between 1~6");
	 break;
	}
}while(z!=1)