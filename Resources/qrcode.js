
function ScannerWindow() 
{
	var self = Ti.UI.createWindow({
		title:'QR Scan',
		backgroundColor:'white'
	});
	
var Barcode = require('ti.barcode');
Barcode.allowRotation = true;
Barcode.displayedMessage = '';
Barcode.useLED = false;

var scrollView = Ti.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 0,
    showVerticalScrollIndicator: true,
    layout: 'vertical'
});

/**
 * Create a chrome for the barcode scanner.
 */
var overlay = Ti.UI.createView({
    backgroundColor: 'transparent',
    top: 0, right: 0, bottom: 0, left: 0
});

var toggleLEDButton = Ti.UI.createButton({
    title: Barcode.useLED ? 'LED is On' : 'LED is Off',
    textAlign: 'center',
    color: '#000', backgroundColor: '#fff', style: 0,
    font: { fontWeight: 'bold', fontSize: 16 },
    borderColor: '#000', borderRadius: 10, borderWidth: 1,
    opacity: 1,
    width: 220, height: 30,
    bottom: 40
});
toggleLEDButton.addEventListener('click', function () {
    Barcode.useLED = !Barcode.useLED;
    toggleLEDButton.title = Barcode.useLED ? 'LED is On' : 'LED is Off';
});
overlay.add(toggleLEDButton);

var cancelButton = Ti.UI.createButton({
    title: 'Cancel', textAlign: 'center',
    color: '#000', backgroundColor: '#fff', style: 0,
    font: { fontWeight: 'bold', fontSize: 16 },
    borderColor: '#000', borderRadius: 10, borderWidth: 1,
    opacity: 1,
    width: 220, height: 30,
    top: 20
});
cancelButton.addEventListener('click', function () {
    Barcode.cancel();
});
overlay.add(cancelButton);

/**
 * Create a button that will trigger the barcode scanner.
 */
var scanCode = Ti.UI.createButton({
    title: 'SCAN',
    font: { fontWeight: 'bold', fontSize: 50 },
    top: 50, width: 220, height: 220,
    color: 'white', backgroundColor: 'green', style: 1,
    borderColor: 'green', borderRadius: 10, borderWidth: 1,
    opacity: 1
});
scanCode.addEventListener('click', function () {
    reset();
    // Note: while the simulator will NOT show a camera stream in the simulator, you may still call "Barcode.capture"
    // to test your barcode scanning overlay.
    Barcode.capture({
        animate: false,
        overlay: overlay,
        showCancel: false,
        showRectangle: true,
        keepOpen: false/*,
        acceptedFormats: [
            Barcode.FORMAT_QR_CODE
        ]*/
    });
});
scrollView.add(scanCode);


/**
 * Now listen for various events from the Barcode module. This is the module's way of communicating with us.
 */
var scannedBarcodes = {}, scannedBarcodesCount = 0;
function reset() {
    scannedBarcodes = {};
    scannedBarcodesCount = 0;
    cancelButton.title = 'Cancel';
   
     scanParsed.text = ' ';
}
Barcode.addEventListener('error', function (e) {
  
    scanParsed.text = ' ';
    
});
Barcode.addEventListener('cancel', function (e) {
    Ti.API.info('Cancel received');
});

Barcode.addEventListener('cancel', function (e) {
    Ti.API.info('Cancel received');
});
Barcode.addEventListener('success', function (e) {
    Ti.API.info('Success called with barcode: ' + e.result);
    if (!scannedBarcodes['' + e.result]) {
        scannedBarcodes[e.result] = true;
        scannedBarcodesCount += 1;
        cancelButton.title = 'Finished (' + scannedBarcodesCount + ' Scanned)';
        
        scanParsed.text += parseResult(e) + ' ';
        
       
        
        
         
     }
});



var scanParsed = Ti.UI.createLabel({
    text: ' ', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: Ti.UI.SIZE || 'auto'
});
scrollView.add(scanParsed);



  
 
function parseContentType(contentType) {
    switch (contentType) {
        
         
           default:
           return 'UNKNOWN';
    }
}



function parseResult(event) {
   var msg = '';
   
   switch (event.contentType) {
       
        case Barcode.TEXT:
            msg = 'You are now in front of : ' + event.result;
           break;
     
        default:
            msg = 'unknown content type';
            break;
    }
       
       return msg;
   }; 
 

 self.add(scrollView);
 return self;
 

 };
 
module.exports = ScannerWindow;