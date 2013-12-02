// Since 360Link loads Prototype, need to use the jQuery prefix instead of $ 
// to avoid conflicts with Prototype.

jQuery(document).ready(function() {

jQuery("head link").remove(); // Remove existing stylesheets from <head>
jQuery("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/link-resolver/360link-resolver.css\" />"); // Load the new custom stylesheet
jQuery("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/styles/main.css\" />"); // Load the new custom stylesheet

jQuery('#header').append('<a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Header\']);"><img class="logo" src="http://library.owu.edu/images/owulogo.png" alt="OWU Logo" /></a><a href="http://library.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Library Home Header\']);"><img class="brand" src="http://library.owu.edu/images/libraries.png" alt="OWU Libraries" /></a><div id="headerlinks"><div class="quicklinks"><ul><li><a href="http://bb.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Blackboard\']);">Blackboard</a></li><li>&#124;</li><li><a href="http://library.owu.edu/reserves.html" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Reserves\']);">Reserves</a></li><li>&#124;</li><li><a href="https://consort.library.denison.edu/patroninfo" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'My Account\']);">My Library Account</a></li></ul></div> <!-- /end quicklinks --><br /><div class="topNavigation"><ul><li><a class="topNavLink">About</a><ul><li><a href="http://library.owu.edu/about.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Libraries\']);">Libraries  &#187;</a><ul><li><a href="http://library.owu.edu/beeghly-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Beeghly\']);">Beeghly Library</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/science-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Science Library\']);">Hobson Science Library</a></li><li><a href="http://library.owu.edu/music-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Music Library\']);">Kinnison Music Library</a></li></ul></li><li><a href="http://library.owu.edu/about.html#collections" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Collections\']);">Collections  &#187;</a><ul><li><a href="http://library.owu.edu/archives-methodism.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Archives\']);">Archives of Ohio United Methodism</a></li><li><a href="http://library.owu.edu/govdocs.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About GovDocs\']);">Government Documents</a></li><li><a href="http://library.owu.edu/rare-books.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Rare Books\']);">Rare Books, Manuscripts, and Artifacts</a></li><li><a href="http://library.owu.edu/owu-history.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About OWU History\']);">OWU Historical Collection</a></li><li><a href="http://drc.owu.edu/" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Digital Collections\']);">Digital Collections</a></li></ul></li><li><a href="http://library.owu.edu/borrow-renew-request.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Borrowing\']);">Borrow, Renew, Request</a></li><li><a href="http://libguides.owu.edu/copyrightandfairuse" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Copyright\']);">Copyright &amp; Fair Use</a></li></ul></li><li><a class="topNavLink">Services</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Research Help\']);">Research Help</a></li><li><a href="http://owu.illiad.oclc.org/illiad/logon.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services ILL\']);">Interlibrary Loan</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/howto-cite.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Citing\']);">How to Cite</a></li><li><a href="http://library.owu.edu/print-copy-scan.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Printing\']);">Print, Copy, Scan</a></li><li><a href="https://www.refworks.com/refworks2/?r=authentication::init&amp;groupcode=RWOHWesleyanU" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services RefWorks\']);">RefWorks</a></li><li><a href="http://library.owu.edu/faculty-support.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Faculty Support\']);">Faculty Support</a></li><li><a href="http://library.owu.edu/services.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services More\']);">More &#187;</a></li></ul></li><li><a class="topNavLink">Contact</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Help\']);">Get Help</a></li><li><a href="http://library.owu.edu/staff-directory.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Staff\']);">Library Staff</a></li></ul></li></ul></div> <!-- /end topNavigation--></div><!-- /end #headerlinks -->');
jQuery("#footerContentWrapper").append('<div id="footerLinks"><ul><li><a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Footer\']);">OWU Home</a></li><li><a href="http://library.owu.edu/policies-guidelines.html">Policies &amp; Guidelines</a></li><li><a href="http://library.owu.edu/donations.html">Donations</a></li><li><a href="http://library.owu.edu/employment.html">Employment</a></li></ul><br /></div><!-- /end #footerLinks --><div id="socialMedia"><ul><li><a href="https://twitter.com/owulibraries" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Twitter\']);"><img src="http://library.owu.edu/images/twitter.png" alt="Twitter" />Twitter</a></li><li><a href="https://www.facebook.com/beeghlylibraryowu" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Facebook\']);"><img src="http://library.owu.edu/images/facebook.png" alt="Facebook" />Facebook</a></li><li><a href="http://www.flickr.com/photos/owulibraries/" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Flickr\']);"><img src="http://library.owu.edu/images/flickr.png" alt="Flickr" /> Flickr</a></li>\</ul></div><!-- /end socialMedia --><p>Ohio Wesleyan University Libraries<br />43 Rowland Ave Delaware, OH 43015</p><p>Copyright &#169; 2013 Ohio Wesleyan University</p>');


var results = ""; 
var articleLinksdata = "";
var journalLinksdata = "";
var BookLinksdata = "";
var dateRangedata = "";
var DatabaseNamedata = "";
var DatabaseLinkdata = "";
var clicks = 0;
var refinerlink = jQuery("#RefinerLink0 a").attr("href");
var hasPrint = false;
var doiLink = "";


//define variables for capturing faulty URLs

var link = "";
var DBname = "";
var ts = 0;	
var datastring = "";

var currentUrl = encodeURIComponent(document.URL);

// var illiadLink = jQuery("table.CandyWrapper:last a.AnchorButton:contains('Interlibrary')").attr("href");
var refworksLink = jQuery("table.CandyWrapper:last a.AnchorButton:last").attr("href");
var ohioLink = 'http://olc1.ohiolink.edu/search/t?SEARCH=';

// Declare variables for OpenURL-aware web services

var sid = jQuery("#exportCitationButtons input[name='sid']").val();	
var title = jQuery("#exportCitationButtons input[name='title']").val();
title = title.replace('&', '%26');
var genre = jQuery("#exportCitationButtons input[name='genre']").val();
var issn = jQuery("#exportCitationButtons input[name='issn']").val();
var isbn = jQuery("#exportCitationButtons input[name='isbn']").val();
var issn = jQuery("#exportCitationButtons input[name='eissn']").val();
var SS_authors = jQuery("#exportCitationButtons input[name='SS_authors']").val();
var aulast = jQuery("#exportCitationButtons input[name='aulast']").val();
var aufirst = jQuery("#exportCitationButtons input[name='aufirst']").val();
var date = jQuery("#exportCitationButtons input[name='date']").val();
var issue = jQuery("#exportCitationButtons input[name='issue']").val();
var part = jQuery("#exportCitationButtons input[name='part']").val();
var volume = jQuery("#exportCitationButtons input[name='volume']").val();
var spage = jQuery("#exportCitationButtons input[name='spage']").val();
var epage = jQuery("#exportCitationButtons input[name='epage']").val();
var atitle = jQuery("#exportCitationButtons input[name='atitle']").val();
atitle = atitle.replace(/"/g, '\'');
atitle = atitle.replace('&', '%26');
var auinitm = jQuery("#exportCitationButtons input[name='auinitm']").val();
var doi = jQuery("#exportCitationButtons input[name='doi']").val();
var pub = jQuery("#exportCitationButtons input[name='pub']").val();

// Build the RefWorks export URL
var refworksURL = '<span id="exportCitationButtons" class="SSALExportItemFormSubmit"><form action="http://0-eg7az5df6p.search.serialssolutions.com.dewey2.library.denison.edu/exportCitation" name="exportCitationForm" method="post" id="exportCitationFormId"><input value="export" type="hidden" name="exportFormType" \/><input type="hidden" name="itemExportType" value="refworks" \/><input type="hidden" name="sid" value="' + sid + '" \/><input type="hidden" name="title" value="' + title + '" \/> <input type="hidden" name="genre" value="' + genre + '" \/><input type="hidden" name="issn" value="' + issn + '" \/><input type="hidden" name="isbn" value="' + isbn + '" \/><input type="hidden" name="eissn" value="' + issn + '" \/><input type="hidden" name="SS_authors" value="' + SS_authors + '" \/><input type="hidden" name="aulast" value="' + aulast + '" \/><input type="hidden" name="aufirst" value="' + aufirst + '" \/><input type="hidden" name="date" value="' + date + '" \/><input type="hidden" name="issue" value="' + issue + '" \/><input type="hidden" name="volume" value="' + volume + '" \/><input type="hidden" name="spage" value="' + spage + '" \/><input type="hidden" name="atitle" value="' + atitle +'" \/><input type="hidden" name="auinitm" value="' + auinitm + '" \/><input type="hidden" name="doi" value="' + doi + '" \/><input type="hidden" name="pub" value="' + pub + '" \/><a onclick="exportFormSubmit(); return false;" id="exportCitationSubmit" name="export">[Send to Refworks]</a></span>';

// Build the ILLiad OpenURL

if (format === "Journal") {
	var illiadLink = 'ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=' + sid + '&rft.genre=' + genre + '&rft.atitle=' + atitle + '&rft.jtitle=' + title + '&rft.aulast=' + aulast + '&rft.aufirst=' + aufirst + '&rft.date=' + date + '&rft.issn=' + issn + '&rft.isbn=' + isbn + '&rft.volume=' + volume + '&rft.issue=' + issue + '&rft.part=' + part + '&rft.spage=' + spage + '&rft.epage=' + epage + '&rft_id=' + doi;
	} else {
	var illiadLink = 'ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=' + sid + '&rft.genre=' + genre + '&rft.atitle=' + atitle + '&rft.title=' + title + '&rft.aulast=' + aulast + '&rft.aufirst=' + aufirst + '&rft.date=' + date + '&rft.issn=' + issn + '&rft.isbn=' + isbn + '&rft.volume=' + volume + '&rft.issue=' + issue + '&rft.part=' + part + '&rft.spage=' + spage + '&rft.epage=' + epage + '&rft_id=' + doi;
	}

// Build the citation

var authorName = jQuery("span.CitationAuthor").text();
authorName = jQuery.trim(authorName); // Trim leading white space form author name

// Journals

if (format === "Journal" || format === "JournalFormat") {

	var journalName = jQuery("span.CitationSource").text();
	journalName = jQuery.trim(journalName); // Trim leading white space form journal name
	var articleName = jQuery("span.CitationArticleOrSectionTitle").text();
	articleName = jQuery.trim(articleName); // Trim leading white space form article name
	var journalVol = jQuery("span.CitationVolume").text();
	journalVol = jQuery.trim(journalVol); // Trim leading white space form journal volume
	if (journalVol !== "") { journalVol = ', <span id="CitationVolume">&nbsp;' + journalVol + '</span>'; } // Add context so if var is blank, it won't display
	var journalIssue = jQuery("span.CitationIssue").text();
	journalIssue = jQuery.trim(journalIssue); // Trim leading white space form journal issue #
	if (journalIssue !== "") {journalIssue = '<span id="CitationIssue">&nbsp;' + journalIssue + ',</span>'; } // Add context so if var is blank, it won't display
	var journalDate = jQuery("span.CitationDate").text();
	journalDate = jQuery.trim(journalDate); // Trim leading white space form journal date
	var journalPages = jQuery("span.CitationSpageValue").text();
	journalPages = jQuery.trim(journalPages); // Trim leading white space form journal pages
	if (journalPages !== "") {journalPages = '<span id="CitationSpageValue">&nbsp;p. ' + journalPages + '.</span>'; } // Add context so if var is blank, it won't display
	var journalissn = jQuery("span.CitationISSN").text();
	journalissn = jQuery.trim(journalissn); // Trim leading white space form journal issn
	if (journalissn !== "") { journalissn = '<span id="CitationISSN">&nbsp;&nbsp;' + journalissn + '</span>'; } // Add context so if var is blank, it won't display 
	var searchissn = jQuery("span.CitationISSN").text();
	searchissn = jQuery.trim(searchissn);
	searchissn = searchissn.replace("(","");
	searchissn = searchissn.replace(")","");

	// Re-build the journal citation div with semantic HTML

	var citationDiv = '<span id="CitationAuthor">' + authorName + '</span>&nbsp; <span id="CitationDate">' + journalDate + '</span>.&nbsp; <span id="CitationArticleOrSectionTitle">' + articleName + '</span>&nbsp; <span id="CitationSource">' + journalName + '&nbsp;(' + searchissn + ')</span>' + journalVol +  journalIssue + journalPages;
	var illForm = 'an electronic copy';
	var illTime = '1 &#8211; 3 days';
	var prcForm = 'articles';
	// Encodes journal titles for use in URLs. There are lots of white spaces in the title that need to be converted.
	var journalTitleEncode = encodeURI(journalName);	

	// Re-build the "Other Options" block with alternative options to get items, such as ILL.
	var nextstepsLink = '<img src="http://library.owu.edu/images/options.png" alt="Other options:"/><li><a href="http://consort.library.denison.edu/search/s' + journalTitleEncode + '">Search for this journal in CONSORT</a></li><li><a href="' + ohioLink + journalTitleEncode + '">Search for this journal in OhioLINK</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';
}

// Books

if (format === "BookFormat" || format === "Book") {

	var bookTitle = jQuery("span.CitationSource").text();
	bookTitle = jQuery.trim(bookTitle); // Trim leading white space form book title
	var bookDate = jQuery("span.CitationDate").text();
	bookDate = jQuery.trim(bookDate); // Trim leading white space form pub date
	var bookisbn = jQuery("span.CitationISBN").text();
	bookisbn = jQuery.trim(bookisbn); // Trim leading white space form ISBN
	if (bookisbn !== "") {  //get best search param for catalog search 
		var searchIsbns = bookisbn.split(", ");
		var firstISBN = searchIsbns[0].replace(/-/g,"");
		firstISBN = firstISBN.replace("(","");
		searchURL = "http://consort.library.denison.edu/search/i" + firstISBN;
		bookisbn = '&nbsp;<span id="CitationISBN">' + bookisbn + '</span>&nbsp;'; } // Add context to citation so if var is blank it will not display
		else {
			searchURL = "http://consort.library.denison.edu/search/s" + bookTitleLink;
		} 
	// Re-build the book citation div with semantic HTML

	var citationDiv = '<span id="CitationAuthor">' + authorName + '</span>&nbsp; <span id="CitationDate">' + bookDate + '</span>.&nbsp; <span id="CitationSource"><em>' + bookTitle + '</em></span>' + bookisbn;

	// Encode book titles for use in URLs. There are lots of white spaces in the title that need to be converted.
	var bookTitleLink = encodeURI(bookTitle); 
	
	// Re-build the "Other Options" div with alternative options to get items, such as ILL or OhioLINK.
	
	var nextstepsLink = '<img src="http://library.owu.edu/images/options.png" alt="Other options:"/><li><a href="' + searchURL + '">Search for a print copy in CONSORT</a></li><li><a href="' + ohioLink + '' + bookTitleLink + '">Search for a print copy in the OhioLINK catalog</a></li><li>Still can\'t find it? <a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Get a copy from another library</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';
}

// Unknown format - treat as book?

if (format === "UnknownFormat" || format === "Unknown") {

	var bookTitle = jQuery("td#CitationUnknownPublicationValue").text();
	bookTitle = jQuery.trim(bookTitle); // Trim leading white space form book title
	var bookDate = jQuery("td#CitationUnknownDateValue").text();
	bookDate = jQuery.trim(bookDate); // Trim leading white space form journal name
	var bookisbn = jQuery("td#CitationBookISBNValue").text();
	bookisbn = jQuery.trim(bookisbn); // Trim leading white space form journal name
	if (bookisbn !== "") { 
		bookisbn = '&nbsp;<span id="CitationBookISBNValue">(ISBN:&nbsp;' + bookisbn + ')</span>&nbsp;'; }
		else {
			searchURL = "http://consort.library.denison.edu/search/s" + bookTitleLink;
		} // 

	// Ok, let's get rid of that table and replace it with a semantic div for our citation

	var citationDiv = '<span id="CitationBookAuthorValue">' + authorName + '</span>&nbsp; <span id="CitationBookDateValue">(' + bookDate + ')</span>.&nbsp; <span id="CitationBookTitleValue"><em>' + bookTitle + '</em></span>&nbsp; <span id="CitationBookISBNValue">&nbsp; </span>';

	// Replace the final table with semantic HTML, along with the dynamic links

	// Remove the line above and uncomment the line below to add items to the bottom of your link resolver
	var bookTitleLink = encodeURI(bookTitle); // Encode the white space in the URL
	var nextstepsLink = '<li><a href="http://library.catalog.gvsu.edu/search/t' + bookTitleLink + '">Search the Daigle Catalog for this book</a></li><li>Not Available Online? <a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Order a copy from Interlibrary Loan</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';
}



// Dissertation

if (format === "Dissertation" || format === "DissertationFormat") {

		var dissAuthor = jQuery("span.CitationAuthor").text();
		var dissTitle = jQuery("span.CitationSource").text();
		dissTitle = jQuery.trim(dissTitle); // Trim leading white space form dissertation title
		var dissDate = jQuery("span.CitationDate").text();
		dissDate = dissDate.replace(')','');
		var dissISBN = jQuery("span.CitationISBN").text();
		dissISBN = dissISBN.replace('(','');
		dissISBN = dissISBN.replace(')','');
		console.log(dissISBN);
		var searchURL = "http://consort.library.denison.edu/search/t" + dissTitle;
		var consortURL = "http://consort.library.denison.edu/search/t";

		// Ok, let's get rid of that table and replace it with a semantic div for our citation

		var citationDiv = '<span id="CitationDissAuthorValue">' + dissAuthor + '</span>&nbsp; <span id="CitationBookDateValue">(' + dissDate + ')</span>.&nbsp; <span id="CitationBookTitleValue"><em>' + dissTitle + '</em></span>. ' + dissISBN;

		// Replace the final table with semantic HTML, along with the dynamic links


		// Remove the line above and uncomment the line below to add items to the bottom of your link resolver
		var dissTitleLink = encodeURI(dissTitle); // Encode the white space in the URL
		var nextstepsLink = '<img src="http://library.owu.edu/images/options.png" alt="Other options:"/><li><a href="' + consortURL + dissTitle + '">Search for a print copy in CONSORT</a></li><li><a href="' + ohioLink + dissTitle + '">Search for a print copy in the OhioLINK catalog</a></li><li>Still can\'t find it? <a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Get a copy from another library</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';

}



// Patent

if (format === "Patent" || format === "PatentFormat") {

	var patentTitle = jQuery("td#CitationPatentTitleValue").text();
	patentTitle = jQuery.trim(patentTitle);  //Trim leading white space from patent title
	var patentDate = jQuery("td#CitationPatentInventorDateValue").text();
	patentDate = jQuery.trim(patentDate);  //Trim leading white space from patent date
	authorName = jQuery("td#CitationPatentInventorValue").text();
	authorName = jQuery.trim(authorName);

	var patentTitleLink = encodeURI(patentTitle);
	var nextstepsLink = '<li><a href="http://www.google.com/?tbm=pts#tbm=pts&q=' + dissTitleLink + '">Search the Google Patents for this patent.</a></li><li>Not Available Online? <a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Submit a request.</a></li>';
  

	var citationDiv = '<span id="CitationPatentInventorValue">' + authorName + '</span>&nbsp; <span id="CitationPatentInventorDateValue">(' + patentDate + ')</span>.&nbsp; <span id="CitationPatentTitleValue"><em>' + patentTitle + '</em></span>';
}


// Get information about displayed results and build results list

jQuery("table#JournalLinkTable").find("tr").each(function(index) { // Grab values from the results table

	if(index !== 0) { 

		// Get the article link, if available

		if(jQuery(this).find("#ArticleCL a").length > 0) { // There is an article link

			var newHref = jQuery(this).find("#ArticleCL a").attr("href");

			articleLinksdata = articleLinksdata + newHref + "|||"; // Placing these pipe characters in the string gives us a delimiter we can use to break each value into separate strings for an array

		} else { // No article length

			articleLinksdata = articleLinksdata + "NA|||";

		}

		// Get the journal link, if available

		if(jQuery(this).find("#JournalCL a").length > 0) { // There is a journal link

			var newHref = jQuery(this).find("#JournalCL a").attr("href");

			journalLinksdata = journalLinksdata + newHref + "|||";

		} else { // No article length

			journalLinksdata = journalLinksdata + "NA|||";

			console.log(journalLinksdata);

		}

		// Get the date range

		var newDates = jQuery(this).find("#DateCL").text();

		dateRangedata = dateRangedata + newDates + "|||";

		// Get the database name

		var newDBName = jQuery(this).find("#DatabaseCL").text();

		DatabaseNamedata = DatabaseNamedata + newDBName + "|||";

		// Get the database link

		var newDBLink = jQuery(this).find("#DatabaseCL a").attr("href");

		DatabaseLinkdata = DatabaseLinkdata + newDBLink + "|||";

	} 
				results = index; // Get total number of results
				BookLinksdata = "NA|||";
});


if(results === "") {

jQuery("table#BookLinkTable").find("tr").each(function(index) { // Grab values from the results table

	if(index !== 0) {

		if(jQuery(this).find("#BookCL a").length > 0) { // There is a book link

			var newHref = jQuery(this).find("#BookCL a").attr("href");
			//console.log(BookLinksdata);
			BookLinksdata = BookLinksdata + newHref + "|||"; // Placing these pipe characters in the string gives us a delimiter we can use to break each value into separate strings for an array

		} else { // No book link

			BookLinksdata = BookLinksdata + "NA|||";

		}

		// Get the date range

		var newDates = jQuery(this).find("#DateCL").text();

		dateRangedata = dateRangedata + newDates + "|||";

		// Get the database name

		var newDBName = jQuery(this).find("#DatabaseCL").text();

		DatabaseNamedata = DatabaseNamedata + newDBName + "|||";

		// Get the database link

		var newDBLink = jQuery(this).find("#DatabaseCL a").attr("href");

		DatabaseLinkdata = DatabaseLinkdata + newDBLink + "|||";
	}
			results = index; // Get total number of rows in the table containing article, journal, or book links
});
	}

// Bust apart arrays into variables we can call

var articleLinks = articleLinksdata.split("|||");
var journalLinks = journalLinksdata.split("|||");
var BookLinks = BookLinksdata.split("|||");
var dateRange = dateRangedata.split("|||");
var DatabaseNames = DatabaseNamedata.split("|||");
var DatabaseLinks = DatabaseLinkdata.split("|||");

var additionalLinksnum = results - 1; // Number of links in the *additional* results list. We subtract by one because the first one is used for the top result div.

if((articleLinks[0] === "NA") && (BookLinks[0] === "NA")) { // There was no article link, but there is a journal link
	TopDatabaseName = jQuery.trim(DatabaseNames[0]);
	console.log('Journal:' + journalLinks[0]);
	
	
	
	// Check to see if top result is a print journal
	
	if(TopDatabaseName === "OWU Beeghly Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Microfilm Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Archive Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Music Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Reference Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Science Periodicals") { // Item is in print
		var topResultdiv = '<ul id="top-result"><li><a href="' + journalLinks[0] + '" class="journal-button" target="_blank">Find a Copy</a> in ' + jQuery.trim(DatabaseNames[0]) + ' <a class="holding-details" id="details"><img src="http://gvsu.edu/icon/help.png" alt="coverage" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[0] + '</p></div></li></ul>';
		var hasPrint = true;	
		} if(doi !== "") { // Build DOI links if present
			var doiLink = 'http://dx.doi.org/' + doi;
			var topResultdiv = '<ul id="top-result"><li><a href="' + doiLink + '" class="article-button" target="_blank">GET ARTICLE</a> &nbsp;from the publisher\'s website <a class="holding-details"><img src="http://gvsu.edu/icon/help.png" alt="coverage" /></a><div class="tooltip" id="details"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[0] + '</p><p><a href="' + journalLinks[0] + '">Browse Journal</a></p></div></li></ul>';
			console.log(topResultdiv);
		} else { // Item is an electronic journal
			var topResultdiv = '<ul id="top-result"><li><a href="' + journalLinks[0] + '" class="journal-button" target="_blank">Browse the Journal</a> in ' + jQuery.trim(DatabaseNames[0]) + ' <a class="holding-details" id="details"><img src="http://gvsu.edu/icon/help.png" alt="coverage" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[0] + '</p></div></li></ul>';
			}
	} else { 
		console.log('Article:' + articleLinks[0]);
		if((BookLinks[0] !== "NA") && (BookLinksdata !== "")) { // There is a book Link
			var topResultdiv = '<ul id="top-result"><li><a href="' + BookLinks[0] + '" class="article-button" target="_blank">READ ONLINE</a> &nbsp;&nbsp;in ' + jQuery.trim(DatabaseNames[0]) + '</li></ul>';
		} else { // There is an article link
			var topResultdiv = '<ul id="top-result"><li><a href="' + articleLinks[0] + '" class="article-button" target="_blank">GET ARTICLE</a> &nbsp;from ' + jQuery.trim(DatabaseNames[0]) + ' <a class="holding-details"><img src="http://gvsu.edu/icon/help.png" alt="coverage" /></a><div class="tooltip" id="details"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[0] + '</p><p><a href="' + journalLinks[0] + '">Browse Journal</a></p></div></li></ul>';
	} 
}


	
// Additional results

if(additionalLinksnum > 0) { // There are additional results

	if(additionalLinksnum === 1) { // Only 1 additional result
		var showResultsLabel = "Show 1 More Source"; 
	} else { // More than one result
	var showResultsLabel = "Show " + additionalLinksnum + " More Sources";
	}


	// Now build the results div by iterating through the additional results the correct number of times starting with [1]
	
	var onlineAdditionalResults = "";
	var printAdditionalResults = "";
	
	var i = 1;
	while(i < results) {

	// Check for an article link

		if(articleLinks[i] !== "NA") { // Article link - article has to be online

			if(onlineAdditionalResults === "") { // First online article listed, add the header

				onlineAdditionalResults = onlineAdditionalResults + '<h4>Online</h4><ul id="additionalDBnames">';

			}

			onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + articleLinks[i] + '" target="_blank">Get the Article</a> &nbsp;from' + DatabaseNames[i] + ' <a class="holding-details"><img src="http://gvsu.edu/icon/help.png" alt="coverage" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p><p><a href="' + journalLinks[i] + '">Browse Journal</a></p></div></li>';

		} else { // No article link

			// Check to see if it is available in print only and save it as a separate variable to be broken out in another list

			if(jQuery.trim(DatabaseNames[i]) === "OWU Beeghly Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Microfilm Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Archive Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Music Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Reference Periodicals" || jQuery.trim(DatabaseNames[i]) === "OWU Science Periodicals") { // Item is in print
				var hasPrint = true;
				if(printAdditionalResults === "") { // First print article listed, add the header

					printAdditionalResults = printAdditionalResults + "<h4>Available in Print</h4><ul>";
				}
		
				printAdditionalResults = printAdditionalResults + '<li><a href="' + journalLinks[i] + '" target="_blank">Available in Print</a> in ' + DatabaseNames[i] + '<a class="holding-details" id="details"><img src="http://gvsu.edu/icon/help.png" alt="" /></a><div class="tooltip"><p><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p></div>';

			} else { // Item is online

				if(onlineAdditionalResults === "") { // First online article listed, add the header
					onlineAdditionalResults = onlineAdditionalResults + "<h4>Online</h4><ul>";
				}

				if((journalLinks[i] === "NA") && (BookLinks[i] !== "NA")) { 
					onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + BookLinks[i] + '" target="_blank">Browse the Journal</a> in ' + DatabaseNames[i] + '</a><a class="holding-details"><img src="http://gvsu.edu/icon/help.png" alt="" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p></div></li>';

				} else {
					onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + journalLinks[i] + '" target="_blank">Browse the Journal</a> in ' + DatabaseNames[i] + '</a><a class="holding-details"><img src="http://gvsu.edu/icon/help.png" alt="" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p></div></li>';
				}

			}
		}
		
		i = i + 1;
	
	}

	if(onlineAdditionalResults !== "") { // There are online results, close the list
		onlineAdditionalResults = onlineAdditionalResults + '</ul>';
	}
	
	if(printAdditionalResults !== "") { // There are online results, close the list
		printAdditionalResults = printAdditionalResults + '</ul>';
	}

	var moreResultsdiv = '<div class="event-head">' + showResultsLabel + '</div><div class="event-body">' + onlineAdditionalResults + printAdditionalResults + '</div>';

	Resultdiv = topResultdiv + moreResultsdiv;

} else {

var Resultdiv = topResultdiv;

}


// No results. Serials Solutions page isn't very clear about this problem. Let's make it more clear.

if(results === "") { // Item is not available online or in print
		var Resultdiv = '<div id="ContentNotAvailableTable"><p class="lib-big-text">This item is not available online through the OWU Libraries</p></div>';	
}

// Idiot div

var idiotDiv = jQuery(".SS_HoldingText a").attr("href");

if(typeof(idiotDiv) !== 'undefined') { // There is a choice between two different citations

var whichCitationLink = "";
var whichCitationJournal = "";
var whichCitationIssn = "";
var idiotResults = "";

jQuery(".SS_HoldingText").each(function(n) {

	var newwhichCitationLink = jQuery(this).find("a").attr("href");
	whichCitationLink = whichCitationLink + newwhichCitationLink + "|||";

	var newwhichCitationJournal = jQuery(this).find(".SS_JournalTitle").text();
	whichCitationJournal = whichCitationJournal + newwhichCitationJournal + "|||";

	var newwhichCitationIssn = jQuery(this).find(".SS_IssnText").text();
	whichCitationIssn = whichCitationIssn + newwhichCitationIssn + "|||";

	idiotResults = n;

});

// Create variables to work with

idiotResults = idiotResults + 1;

var citationLink = whichCitationLink.split("|||");
var citationJournal = whichCitationJournal.split("|||");
var citationIssn = whichCitationIssn.split("|||");

topResultdiv = '<h4>This item is available in the following publications:</h4><ul id="top-result">';


t = 0;
while(t < idiotResults) {

	// Build the list of results 

topResultdiv = topResultdiv + '<li><a href="' + citationLink[t] + '">' + citationJournal[t] + ' ' + citationIssn[t] + '</a></li>';

t = t + 1;

}

var Resultdiv = topResultdiv + '</ul>';


}


// Do the magic if this is a link resolver display page:
// Rewrite Serials Solutions terrible page with a nice semantic, clean div full of easy-to-follow markup
// Sadly, can't use replaceWith since IE 7 will delete the contents instead of replacing.
// So we need to add a div wrapper around the Serials Solutions content to add this HTML into

var query = document.location.search;
var pairvalues = query.split("&");

if(pairvalues[0] !== "?SS_Page=refiner") { // Don't rewrite the page if this is the citation form

//check and see if there are print holdings.  if not, show a "search the catlog" link

if (hasPrint != true && (format === "Journal" || format === "JournalFormat")) {
nextstepsLink = '<img src="http://library.owu.edu/images/options.png" alt="Other options:"/><li><a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Get a copy from another library</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';
 };

jQuery(".360link-reset").html('<img src="http://library.owu.edu/images/looking.png" alt="You are looking for:"/><div id="citation">' + citationDiv + '&nbsp;<a href="' + refinerlink + '"><img src="http://gvsu.edu/icon/pencil.png" alt="Edit this Citation" /></a>&nbsp;<a id="refworks" href="' + refworksLink + '">Export to Refworks</a></div>' + Resultdiv + '<div id="next-step"><ul>' + nextstepsLink + '</ul></div></div><div class="clear"></div>');

jQuery("#360link-reset").html('<div id="page-content"><img src="http://library.owu.edu/images/looking.png" alt="You are looking for:" /><div id="citation">' + citationDiv + '&nbsp;<a href="' + refinerlink + '"><img src="http://gvsu.edu/icon/pencil.png" alt="Edit this Citation" /></a>&nbsp;&nbsp;&nbsp;' + refworksURL + '</div></div>' + Resultdiv + '<div id="next-step"><ul>' + nextstepsLink + '</ul></div></div><div class="clear"></div></div>');

}

// Let's show a tooltip highlighting Document Delivery when the user has tried a few sources.
// First, let's add the code for the tooltip:

// jQuery("#next-step ul").append('<li class="doc-del-tooltip">Having trouble? You can order a copy from Document Delivery, and they\'ll get it for you. It\'s free!<br /><a href="http://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '" class="lib-db-access-button" style="font-size: 1.2em !important;">Order a Copy</a></li>');
// jQuery(".doc-del-tooltip").hide();

// Now let's count clicks



jQuery("#360link-reset ul li a").click(function() {

	clicks = clicks + 1;
	link = encodeURIComponent(window.location);
	DBname = encodeURIComponent(jQuery(this).siblings("a.SS_DatabaseHyperLink").text());
	ts = Math.round((new Date()).getTime() / 1000);	
	datastring = datastring + ts + "," + DBname + "," + link + "\n";
	if(clicks > 1) {
		jQuery(".doc-del-tooltip").show();
		//lets also grab the openURL we are passing to the browser and pass it off
		//to a PHP script that will write it elsewhere, so it can be checked

		datastring = "data=" + datastring;
		jQuery.ajax({
		dataType: "string",
		type: "POST",
		url: "url_write.php",
		data: datastring
	});
		datastring = "";		
	}	
});

// 
	jQuery(".event-body").hide(); 
	jQuery(".event-head").click(function() {
	jQuery(".event-body").slideToggle(400);
		var current_text = jQuery(".event-head").text();
		if(current_text === "Hide additional sources") {
		  jQuery(".event-head").text('Show more sources');
		  } else {
		  jQuery(".event-head").text('Hide additional sources');
		  }
	});

	if (format === "Journal" || format === "JournalFormat") {
	jQuery(".holding-details").tooltip({effect: 'toggle',offset:[50,110]});
	};

});