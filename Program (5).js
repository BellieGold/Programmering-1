document.writeln("Redovisning av Inlämningsuppgift 1");
document.writeln("Informatik-Systemutveckling, Malmö Högskola, 2016-12-13");
document.writeln(" ");
document.writeln("Elina Bruér, datorid: AG7027");
document.writeln("Belinda Quainoo, datorid: AH0152");
document.writeln(" ");
document.writeln(" ");

document.writeln("==========================================================");
document.writeln("UPPGIFT NR 2");
document.writeln("============");
document.writeln(" ");
document.writeln("Multiplikationstabell 5:");

var x = 5;
var y = 1;
while (y < 11)
{
	document.writeln(x + " * " + y + " = " + x * y);
	y = y + 1;
}

document.writeln(" ");
document.writeln("==========================================================");
document.writeln("UPPGIFT NR 3");
document.writeln("============");
document.writeln(" ");

var a = 3000000;
var b = 1;
while (b < 11)
{
	document.writeln(b + "% " + ": " + a/b + " kr");
	b = b + 1;
}


document.writeln(" ");
document.writeln("==========================================================");
document.writeln("UPPGIFT NR 4");
document.writeln("============");
document.writeln(" ");

function krToEuro(amount)
{
	var kurs = 9.37;
	return (amount / kurs);
}

var z = krToEuro(100);

document.writeln("För 100 kr får du " + Math.round(z*100)/100 + " EUR."); 


document.writeln(" ");
document.writeln("==========================================================");
document.writeln("UPPGIFT NR 5");
document.writeln("============");
document.writeln(" ");

var summa = 0;
for (var i = 1; i < 6; i++) 
	{
		var kast = rollDice();
		document.writeln( "Tärningsslag " + i + ": " + kast);
		summa = summa + kast;
	}

document.writeln("Totala summan: " + summa);
	
document.writeln(" ");
document.writeln("==========================================================");
document.writeln("UPPGIFT NR 6");
document.writeln("============");
document.writeln(" ");

document.writeln("Romerska siffor (1-10):");


function romanNumber(x) 
{
	var result;
	
	if (x == 1)
	{
		result = "I" ;
	}
	
	else if (x == 2)
	{
		result = "II" ;
	}
	
	else if (x == 3)
	{
		result = "III" ;
	}
	
	else if (x == 4)
	{
		result = "IV" ;
	}
	
	else if (x == 5)
	{
		result = "V" ;
	}
	
	else if (x == 6)
	{
		result = "VI" ;
	}
	
	else if (x == 7)
	{
		result = "VII" ;
	}
	
	else if (x == 8)
	{
		result = "VIII" ;
	}
	
	else if (x == 9)
	{
		result = "IX" ;
	}
	
	else if (x == 10)
	{
		result = "X" ;
	}

	else 
	{
		return result;
	}
	
	return result;
}


for (var result = 0; result < 12; result++)
{
	document.writeln(result + " = " + romanNumber(result));
}


document.writeln(" ");
document.writeln("==========================================================");
document.writeln("UPPGIFT NR 7");
document.writeln("============");
document.writeln(" ");

function buildString(a)
{
	var result = "";
	
	for (i = 0; i < a; i++)
	
	{ 
		result = result + " ";
	}
	
	return result + "X";
}

for (a = 10; a >= 0; a = a - 1)
{
	document.writeln(buildString(a));
}

