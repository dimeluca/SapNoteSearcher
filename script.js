var sap_note_url = "https://me.sap.com/notes/"
var sap_note_pdf_url_1 = "https://me.sap.com/servicessupport/search/%7B%22q%22%3A%22"
var sap_note_pdf_url_2 = "%22%2C%22originContext%22%3A%22CentralSearch%22%7D"
document.getElementById("searchbt1").addEventListener("click", displayNote);
document.getElementById("searchbt2").addEventListener("click", searchNote);
function displayNote(){
	if(document.getElementById('form1').value.length == 0){
		alert("Insert a Valid Note Number");
	}else{
		var final_url = sap_note_url + document.getElementById('form1').value
		window.open(final_url, '_blank').focus();
	}
}
function searchNote(){
	if(document.getElementById('form2').value.length == 0){
		alert("Insert a Valid Description");
	}else{
		var final_url = sap_note_pdf_url_1 + document.getElementById('form2').value + sap_note_pdf_url_2
		window.open(final_url, '_blank').focus();
	}
}