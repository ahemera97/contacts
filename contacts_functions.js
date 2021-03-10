function myContacts(x,a,b,c)
{	var contacts="",srtContact=[""];
	if(a.length==1)
	contacts="                        You don't have any contacts";
	else
	{
		for(x=1;x<a.length;x++)
		{ 
		srtContact.push(a[x]+"  "+b[x]+"\n      "+c[x]);
		}
		srtContact.sort();
		for(x=1;x<a.length;x++)
		{ 
		contacts=contacts+x+") "+srtContact[x]+"\n";
		}
	}
	return contacts;
}

function addContact(d,e,f,a,c,bb,b)
{
	 do
	 {
		do
		{
			d=prompt("Create Contact\n\nEnter the contact's first name :","");
			if (!isNaN(d)||d=="")
				alert("Create Contact\n\nPlease enter contact's first name!!");
		}while(!isNaN(d)||d=="")
		do
		{
			e=prompt("Create Contact\n\nEnter the contact's last name :","");
			if (!isNaN(e)||e=="")
				alert("Create Contact\n\nPlease enter contact's last name!!");
		}while(!isNaN(e)||e=="")
		do
		{
			f=prompt("Create Contact\n\nEnter the contact's number :","");
			if (isNaN(f)||f==0)
			alert("Create Contact\n\nPlease enter a number!!");
		}while(isNaN(f)||f==0)
		a.push(d);
		b.push(e);
		c.push(f);
		do
		{
		bb=prompt("Create Contact\n\n"+myContacts(xContact,conName1,conName2,conNumber)+"\n1 ->> Create another contact\n2 ->> back","");
		if (bb!=1&&bb!=2)
		alert("Create Contact\n\nPlease enter number from 1~2");
		}while(bb!=1&&bb!=2)
	}while(bb!=2)
}

function editContact(a,d,c,e,b)
{
	if (a.length==1)
	alert("Edit Contact\n\n                        You don't have any contacts");
	else
	{
		do
		{
			do
			{
			d=Number(prompt("Edit Contact\n\nEnter number of contact you want to edit :\n"+myContacts(xContact,conName1,conName2,conNumber)+"\n"+a.length+" ->> back",""));
			if(isNaN(d)||d==0||d>a.length)
				alert("Edit Contact\n\nPlease enter number between 1~"+a.length);
			}while(isNaN(d)||d==0||d>a.length)
			if (d!=a.length)
			{
				do
				{
					e=prompt("Edit Contact\n\nEnter the new first name :\nThe current name is : "+a[d],a[d]);
					if (!isNaN(e)||e=="")
					alert("Edit Contact\n\nPlease enter contact's first name!!");
				}while(!isNaN(e)||e=="")
				a.splice(d,1,e);
				do
				{
					e=prompt("Edit Contact\n\nEnter the new last name :\nThe current name is : "+b[d],b[d]);
					if (!isNaN(e)||e=="")
					alert("Edit Contact\n\nPlease enter contact's last name!!");
				}while(!isNaN(e)||e=="")
				b.splice(d,1,e);
				do{
				e=prompt("Edit Contact\n\nEnter the new number name :\nThe current number is : "+c[d],c[d]);
				if (isNaN(e)||e==0)
					alert("Edit Contact\n\nPlease enter a number!!");
				}while(isNaN(e)||e==0)
				c.splice(d,1,e);
				
			}
		}while(d!=a.length)
	}	
}

function removeContact(a,c,ff,e,b)
{
		do
		{
	 if (a.length==1)
	alert("Remove Contact\n\n                        You don't have any contacts");
	else
	{
			do
			{
			ff=Number(prompt("Remove Contact\n\nEnter number of contact you want to remove :\n"+myContacts(xContact,conName1,conName2,conNumber)+"\n"+a.length+" ->> back",""));
				if(isNaN(ff)||ff==0||ff>a.length)
				alert("Remove Contact\n\nPlease Enter Number Between 1~"+a.length);
			}while(isNaN(ff)||ff==0||ff>a.length)
			if (ff!=a.length)
				{
				do
				{
				e=Number(prompt("Remove Contact\n\nAre you sure you want to remove "+a[ff]+b[ff]+"?\n1)Yes                                  2)No",""));
				if (e!=1&&e!=2)
				alert("Remove Contact\n\nPlease enter number between 1~2");
				}while(e!=1&&e!=2)
				if(e==1)
				{
				a.splice(ff,1);
				b.splice(ff,1);
				c.splice(ff,1);
				ff--
				}
				}
				if (a.length==1)
				alert("Remove Contact\n\n                        You don't have any contacts");
	}
		}while(ff!=a.length&&a.length!=1)
}

function searchContact(a,d,s)
{
	if (a.length==1)
	alert("Search\n\n                        You don't have any contacts");
	else
	{
			if (a==conName1)
			{
			do
			{
				d=prompt("Search\n\nEnter contact's first name :\n\n0 ->> back","");
				if (!isNaN(d)&&d!="0")
					alert("Search\n\nPlease enter contact's first name!!");
			}while(!isNaN(d)&&d!="0")
			}
			else if (a==conName2)
			{
			do
			{
				d=prompt("Search\n\nEnter contact's last name :\n\n0 ->> back","");
				if (!isNaN(d)&&d!="0")
					alert("Search\n\nPlease enter contact's last name!!");
			}while(!isNaN(d)&&d!="0")
			}
			else if (a==conNumber)
			{
			do
			{
				d=prompt("Search\n\nEnter contact's number :\n\n0 ->> back","");
				if (isNaN(d)&&d!="0")
					alert("Search\n\nPlease enter contact's number!!");
			}while(isNaN(d)&&d!="0")
			}
			if (d!="0")
			{
			 var cont="",x=0;
			 s=a.indexOf(d,0);
			 if (s!=-1)
			 {
			 	while(s!=-1)
				{ 
				 x++;
				 s=a.indexOf(d,x);
				 if (a.indexOf(d,x)!=a.indexOf(d,x+1))
				 cont=cont+s+") "+conName1[s]+"  "+conName2[s]+"\n      "+conNumber[s]+"\n";
				}
			 alert("Search :  "+d+"\n\n"+cont);
			 }
			 else 
				alert("Search\n\nNot found!");
			}
	}
}

function closeProgram(c,p)
{
		do
		{
		 c=Number(prompt("Are you sure you want to exit the program?\n1) Yes                                  2) No",""));
		if(c!=1&&c!=2)
		alert("Close\n\nPlease enter number from 1~2");
		else 
		if(c==1)
		alert ("                                Good Bye, "+p+".");
		}while(c!=1&&c!=2)
		return c;
}