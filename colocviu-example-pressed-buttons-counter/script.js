var cnt=0;
var cnt1= 0;
var cnt2= 0;

function CountFun()
{
     cnt=parseInt(cnt)+parseInt(1);
     

}
function CountFun1()
{
     cnt1=parseInt(cnt1)+parseInt(1);
     

}
function CountFun2()
{
     cnt2=parseInt(cnt2)+parseInt(1);
     

}
function dispData()
{
	var divData=document.getElementById("showCount1");
     divData.innerHTML="Number of button 1 pressed: ("+cnt +")";//this part has been edited
	 var divData1=document.getElementById("showCount2");
     divData1.innerHTML="Number of button 2 pressed: ("+cnt1 +")";//this part has been edited
	 var divData2=document.getElementById("showCount3");
     divData2.innerHTML="Number of button 3 pressed: ("+cnt2 +")";//this part has been edited
}