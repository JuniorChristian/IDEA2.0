var FindPath = require('FindPath');
var Qr = require('qrcode');
var HELP = require('Help');


var __a,__b;
var theFindPath = new FindPath(__a,__b);

var QRCODE = new Qr();
var HelpWindow = new HELP ();

// a tabgroup that contains the navigation window, qrcode window and help window
var tabGroup = Ti.UI.createTabGroup();

// our main window that contains all
var win = Titanium.UI.createWindow({
 
 title:'NAVIGATION',	
 backgroundColor: '#777',
 layout: 'vertical'
 });
 
 
 
// first input data
var textField1 = Titanium.UI.createTextField({
	
	hintText: 'enter a location',
	width:'60%',
	top:'6',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});


//label  of the first input data
var label1 = Ti.UI.createLabel({
	text: "From",
	top:'50',
	width: '60%'
	});

//  second input data
var textField2 = Titanium.UI.createTextField({
	
	hintText: 'enter a location',
	width:'60%',
	top:'6',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});

// label of the second input data
var label2 = Ti.UI.createLabel({
	text: "To",
	top:'50',
	width: '60%'
	});


	
var button = Titanium.UI.createButton({
		color: 'white',
		backgroundColor: 'orange',
		borderColor: '#bbb',
		borderWidth: 2,
		borderRadius: 5,
		top:'100',
		width:'40%',
		title:'Estimate'
	});
	


 // we create a scrollist to suggest location to the user
 var opt = Ti.UI.createOptionDialog({
 	title : "POI LIST",
    options : [
 	 "OFFICES","MassaOffice","DAndreaOffice","CasatiOffice","BattistiOffice","DeNataleOffice","GiunchigliaOffice","ConciOffice","BruzzoneOffice","PiccoOffice",
 	 "MEETING ROOM", "DKM1Room","CorniselloMeetingRoom","TerlagoMeetingRoom","DKM2Room",
 	 "STAIRS","EastStairs","WestStairs",
 	 "TOILETTE","MenToilette","WomenToilette",
 	 "LAB", "WirelessNetworkingLab","MediaLab1",
 	 "LIFT","Lift1","Lift2",
     "cancel"
                ],
    cancel: 27 	
 });
 
 // after a click on the textfield, the list of location appears and the user chooses where to go 
 opt.addEventListener ("click",function(e){
 	
 	//if    (e.index == 0) {textField2.value = opt.options[0];}
 	 if (e.index == 1) {textField2.value = opt.options[1];}
 	else if (e.index == 2) {textField2.value = opt.options[2];}
 	else if (e.index == 3) {textField2.value = opt.options[3];}
 	else if (e.index == 4) {textField2.value = opt.options[4];}
 	else if (e.index == 5) {textField2.value = opt.options[5];}
 	else if (e.index == 6) {textField2.value = opt.options[6];}
 	else if (e.index == 7) {textField2.value = opt.options[7];}
 	else if (e.index == 8) {textField2.value = opt.options[8];}
 	else if (e.index == 9) {textField2.value = opt.options[9];}
 	//else if (e.index == 10) {textField2.value = opt.options[10];}
 	else if (e.index == 11) {textField2.value = opt.options[11];}
 	else if (e.index == 12) {textField2.value = opt.options[12];}
 	else if (e.index == 13) {textField2.value = opt.options[13];}
 	else if (e.index == 14) {textField2.value = opt.options[14];}
 	//else if (e.index == 15) {textField2.value = opt.options[15];}
 	else if (e.index == 16) {textField2.value = opt.options[16];}
 	else if (e.index == 17) {textField2.value = opt.options[17];}
 	//else if (e.index == 18) {textField2.value = opt.options[18];}
 	else if (e.index == 19) {textField2.value = opt.options[19];}
 	else if (e.index == 20) {textField2.value = opt.options[20];}
 	//else if (e.index == 21) {textField2.value = opt.options[21];}
 	else if (e.index == 22) {textField2.value = opt.options[22];}
 	else if (e.index == 23) {textField2.value = opt.options[23];}
 	//else if (e.index == 24) {textField2.value = opt.options[24];}
 	else if (e.index == 25) {textField2.value = opt.options[25];}
 	else if (e.index == 26) {textField2.value = opt.options[26];}
 	//else if (e.index == 27) {textField2.value = opt.options[27];}
 	

 }); 	
 	
 // to display the list of location in the textfield area on a click
 textField2.addEventListener('click',function(e){
 	opt.show();
 }); 
 


 // same as for "opt"
 var opt1 = Ti.UI.createOptionDialog({
 	 title : "POI LIST",
 	  options : [
 	 "OFFICES","MassaOffice","DAndreaOffice","CasatiOffice","BattistiOffice","DeNataleOffice","GiunchigliaOffice","ConciOffice","BruzzoneOffice","PiccoOffice",
 	 "MEETING ROOM", "DKM1Room","CorniselloMeetingRoom","TerlagoMeetingRoom","DKM2Room",
 	 "STAIRS","EastStairs","WestStairs",
 	 "TOILETTE","MenToilette","WomenToilette",
 	 "LAB", "WirelessNetworkingLab","MediaLab1",
 	 "LIFT","Lift1","Lift2",
     "cancel"
                ],
    cancel: 27 		
 });
 
 opt1.addEventListener ("click",function(e){
 	
 	    // if(e.index == 0) {textField1.value = opt1.options[0];}
 	     if (e.index == 1) {textField1.value = opt1.options[1];}
 	else if (e.index == 2) {textField1.value = opt1.options[2];}
 	else if (e.index == 3) {textField1.value = opt1.options[3];}
 	else if (e.index == 4) {textField1.value = opt1.options[4];}
 	else if (e.index == 5) {textField1.value = opt1.options[5];}
 	else if (e.index == 6) {textField1.value = opt1.options[6];}
 	else if (e.index == 7) {textField1.value = opt1.options[7];}
 	else if (e.index == 8) {textField1.value = opt1.options[8];}
 	else if (e.index == 9) {textField1.value = opt1.options[9];}
 	//else if (e.index == 10) {textField1.value = opt1.options[10];}
 	else if (e.index == 11) {textField1.value = opt1.options[11];}
 	else if (e.index == 12) {textField1.value = opt1.options[12];}
 	else if (e.index == 13) {textField1.value = opt1.options[13];}
 	else if (e.index == 14) {textField1.value = opt1.options[14];}
 	//else if (e.index == 15) {textField1.value = opt1.options[15];}
 	else if (e.index == 16) {textField1.value = opt1.options[16];}
 	else if (e.index == 17) {textField1.value = opt1.options[17];}
 	//else if (e.index == 18) {textField1.value = opt1.options[18];}
 	else if (e.index == 19) {textField1.value = opt1.options[19];}
 	else if (e.index == 20) {textField1.value = opt1.options[20];}
 	//else if (e.index == 21) {textField1.value = opt1.options[21];}
 	else if (e.index == 22) {textField1.value = opt1.options[22];}
 	else if (e.index == 23) {textField1.value = opt1.options[23];}
 	//else if (e.index == 24) {textField1.value = opt1.options[24];}
 	else if (e.index == 25) {textField1.value = opt1.options[25];}
 	else if (e.index == 26) {textField1.value = opt1.options[26];}
 	//else if (e.index == 27) {textField1.value = opt1.options[27];}
 	
 	
 	
 }); 
 
 textField1.addEventListener('click',function(e){
 	opt1.show();
 }); 	
 
 
 
	 
button.addEventListener('click',function(e)
{
   
  __a = textField1.value;
  __b = textField2.value;
  Titanium.API.info('Start point : ' + __a);
  Titanium.API.info('End point : ' + __b);
 
 // control on the input of the user
 
   	if (__a == '' && __b != '')
 {
 	alert('Enter a Departure!');
 }
 else if (__a == '' && __b == '')
 {
 	alert ('Enter something!');
 }
 else if(__a != '' && __b == '')
 {
 	alert('Enter a Destination!');
 }
  else if (__a == __b)
  {
  	alert("Error!,Departure same as Destination!");
  }
 else 
 {
 Titanium.API.info("You clicked the button");
   
   
var buttonback = Titanium.UI.createButton({
		color: 'white',
		backgroundColor: 'orange',
		borderColor: '#bbb',
		borderWidth: 2,
		borderRadius: 5,
		top:'40',
		width:'100%',
		title:'back'
	});
	


var labelview1 = Ti.UI.createLabel({
	text : 'From : '+ __a,
	top: '10', 
	width: 'auto',
	left: '10',
	color: 'red'
});  
   
var labelview2 = Ti.UI.createLabel({
	text : 'To : '+ __b,
	top: '6',
	width: 'auto',
	left: '10',
	color: 'red'
}); 

var labelview3 = Ti.UI.createLabel({
	text : 'Path :',
	top: '4',
	width: 'auto',
	left: '10',
	color: 'green'
}); 
 
 var labelview4 = Ti.UI.createLabel({
	text : 'Building : POVO 1',
	top: '10',
	width: 'auto',
	left: '10',
	color: 'blue'
}); 

var labelview5 = Ti.UI.createLabel({
	text : 'FLOOR : DISI',
	top: '10',
	width: 'auto',
	left: '10',
	color: 'blue'
}); 

  var tableview = Ti.UI.createTableView({
	objname:'table',
	editable:true
});

 var findpath = [];
 
 // we save in the variable 'findpath' the shortest path returned by the function "FindPath"
 findpath = FindPath(__a,__b);

// to display the shortest path in terms of direction
var tableData = [];
for ( var i = 0; i< findpath.length; i++)
{
	 
	 var row = Ti.UI.createTableViewRow
	 ({
	 	
	 	title : findpath[i]
	 	
	 });
	 tableData.push(row);
}

tableview.setData(tableData);


var self = Ti.UI.createWindow({
	layout : 'vertical',
	backgroundColor:'white',
	table: tableview
  
});

buttonback.addEventListener ('click',function(){
		self.close();
	});

  
self.add(buttonback);

self.add(labelview4);
self.add(labelview5);
self.add(labelview1);
self.add(labelview2);
self.add(labelview3);

self.add(tableview);
self.open();

}
 
 
 }); 
 
 var tab1 = Ti.UI.createTab({
	 title: 'Nav',
	 icon :  'navidea.png',
	window : win
});


var tab2 = Ti.UI.createTab({
	title : 'QrScan',
	icon: 'qrscan2.png',
	window : QRCODE
});

var tab3 = Ti.UI.createTab({
	title : 'Help',
	icon: 'h3.png',
	window : HelpWindow
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);	  
tabGroup.addTab(tab3);


win.add(label1);
win.add(textField1);
win.add(label2);
win.add(textField2);
win.add(button);


(function() {
	
//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
  if (osname === 'iphone' || osname === 'ipad') {
		tabGroup.open({transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}
	else{
		tabGroup.open();
	}

})();




