function $(str)
{
    if(str.charAt(0)=="#")
	{
	    return document.getElementById(str.substring(1));
	}
	else if(str.charAt(0)=="@")
	{
	   return document.getElementByName(str.substring(1));
	}
}