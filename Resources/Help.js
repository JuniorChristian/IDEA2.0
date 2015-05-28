function HelpWindow(title) {

	var win = Ti.UI.createWindow({
  		backgroundColor: 'white',
  		title:'Help'
	});

	function addRow(obj) {

		var row = Ti.UI.createTableViewRow({
			height:Ti.UI.SIZE,
			layout: 'horizontal',
		});

		var view = Ti.UI.createView({
			bottom: 10,
    		height: Ti.UI.SIZE,
    		layout: 'vertical',
    		top: 20
		});
		row.add(view);
	
		var titleLabel = Ti.UI.createLabel({
			text: obj.title || '',
			font: {fontSize: 16, fontWeight: 'bold'},
			height: Ti.UI.SIZE,
    		left: 10,
   			right: 10,
    		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
		});
		view.add(titleLabel);
	
		if(obj.text){
			var textLabel = Ti.UI.createLabel({
				text: obj.text || '',
				height: Ti.UI.SIZE,
    			left: 10,
    			right: 10,
    			textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
			});
			view.add(textLabel);
		}
		return row;
	}

	var data = [
		{
			title: 'Welcome to Interactive Discovery and Environmental Assistance app. version 2.0'
		},
		{
			title: 'TO BEGIN WITH...', 
			text: 'The term "POI" means "Point Of Interest".\n'
				+ ' - POI LIST: is the list of our "POI" e.g  a bathroom, an office or some other place.\n'
				
		},
		{
			title: 'QR CODES DISPOSITION', 
			text: 'QR Codes are placed at about the height of your head, giving your back to the door you find the Qrcodes on your left side when starting from a POI and when arriving to a POI you still find them on your left side'
			    + '. We use QRcode only as a checkpoint i.e to check where you are and if you arrive at the destination specified'
		},
		{
			title: 'HOW TO SCAN?', 
			text: 'To scan, go to "QR Scan" Tab, click on "Scan Code" and face the phone towards the wall, at your head\'s height. When a QR code is found, the app will automatically display the text.'
		},
		{
			title: 'NAVIGATION',
			text: 'You search manually for the destination and starting point, just go on "Nav Tab", search for the Point of Interest you desire and then choose where  you want to go.'
		}
		
	];

	var rows = [], intRow = 0, intRows = data.length;
	for (intRow = 0; intRow < intRows; intRow = intRow + 1) {
    	rows.push(addRow({
        	title: data[intRow].title,
        	text: data[intRow].text
   		}));
    }
	
	var tableview = Ti.UI.createTableView({
    	data: rows,
    	height: Ti.UI.FILL,
    	minRowHeight: 40,
    	width: Ti.UI.FILL
	});
	win.add(tableview);

	return win;
	};

module.exports = HelpWindow;