/*
* 	This script is adapted from Matthew Reidsma's 360Link Reset script.
*
*	360Link Reset > 360link-reset.js
* 	Script for radically improving the Serials Solutions 360Link Link Resolver
*
*	For more information, see http://github.com/gvsulib/360Link-Reset
* 
*	Author: Matthew Reidsma, reidsmam@gvsu.edu, @mreidsma
*	Version 2.0
*/

// Simplify the noConflict call since 360Link loads Prototype
window.$j = jQuery.noConflict();

$j(document).ready(function() { // Wait until the original page loads

	// Make site responsive
	$j("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');

	// Remove existing stylesheets
	$j("head link").remove();

	// Load custom local stylesheets
	$j("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/styles/main.css\" />"); // Load stylesheet from library website
	$j("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/link-resolver/360link-resolver.css\" />"); // Load custom stylesheet for 360Link
	$j("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://library.owu.edu/styles/popover.css\" />");


	// Add the OWU Libraries header and footer
	$j('#header').append('<a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Header\']);"><img class="logo" src="http://library.owu.edu/images/owulogo.png" alt="OWU Logo" /></a><a href="http://library.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Library Home Header\']);"><img class="brand" src="http://library.owu.edu/images/libraries.png" alt="OWU Libraries" /></a><div id="headerlinks"><div class="quicklinks"><ul><li><a href="http://bb.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Blackboard\']);">Blackboard</a></li><li>&#124;</li><li><a href="http://library.owu.edu/reserves.html" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'Reserves\']);">Course Reserves</a></li><li>&#124;</li><li><a href="https://consort.library.denison.edu/patroninfo" onClick="_gaq.push([\'_trackEvent\', \'Other Tools &amp; Services\', \'Click\', \'My Account\']);">My Library Account</a></li></ul></div> <!-- /end quicklinks --><br /><div class="topNavigation"><ul><li><a class="topNavLink">About</a><ul><li><a href="http://library.owu.edu/about.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Libraries\']);">Libraries  &#187;</a><ul><li><a href="http://library.owu.edu/beeghly-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Beeghly\']);">Beeghly Library</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/science-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Science Library\']);">Hobson Science Library</a></li><li><a href="http://library.owu.edu/music-library.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Music Library\']);">Kinnison Music Library</a></li></ul></li><li><a href="http://library.owu.edu/about.html#collections" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Collections\']);">Collections  &#187;</a><ul><li><a href="http://library.owu.edu/archives-methodism.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Archives\']);">Archives of Ohio United Methodism</a></li><li><a href="http://library.owu.edu/govdocs.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About GovDocs\']);">Government Documents</a></li><li><a href="http://library.owu.edu/rare-books.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Rare Books\']);">Rare Books, Manuscripts, and Artifacts</a></li><li><a href="http://library.owu.edu/owu-history.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About OWU History\']);">OWU Historical Collection</a></li><li><a href="http://libguides.owu.edu/digitalcollections" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Digital Collections\']);">Digital Collections</a></li></ul></li><li><a href="http://library.owu.edu/borrow-renew-request.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Borrowing\']);">Borrow, Renew, Request</a></li><li><a href="http://libguides.owu.edu/copyrightandfairuse" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'About Copyright\']);">Copyright &amp; Fair Use</a></li></ul></li><li><a class="topNavLink">Services</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Research Help\']);">Research Help</a></li><li><a href="https://owu.illiad.oclc.org/illiad/logon.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services ILL\']);">Interlibrary Loan</a></li><li><a href="http://library.owu.edu/media-center.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Media Center\']);">Media Center</a></li><li><a href="http://library.owu.edu/howto-cite.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Citing\']);">How to Cite</a></li><li><a href="http://library.owu.edu/print-copy-scan.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services Printing\']);">Print, Copy, Scan</a></li><li><a href="https://www.refworks.com/refworks2/?r=authentication::init&amp;groupcode=RWOHWesleyanU" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services RefWorks\']);">RefWorks</a></li><li><a href="http://library.owu.edu/faculty-support.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Faculty Support\']);">Faculty Support</a></li><li><a href="http://library.owu.edu/services.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Services More\']);">More &#187;</a></li></ul></li><li><a class="topNavLink">Contact</a><ul><li><a href="http://library.owu.edu/research-help.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Help\']);">Get Help</a></li><li><a href="http://library.owu.edu/staff-directory.html" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'Contact Staff\']);">Library Staff</a></li></ul></li></ul></div> <!-- /end topNavigation--></div><!-- /end #headerlinks -->');
	$j("#footerContentWrapper").append('<div id="footerLinks"><ul><li><a href="http://www.owu.edu" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'Click\', \'OWU Home Footer\']);">OWU Home</a></li><li><a href="http://library.owu.edu/policies-guidelines.html">Policies &amp; Guidelines</a></li><li><a href="http://library.owu.edu/donations.html">Donations</a></li><li><a href="http://library.owu.edu/employment.html">Employment</a></li></ul><br /></div><!-- /end #footerLinks --><div id="socialMedia"><ul><li><a href="https://twitter.com/owulibraries" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Twitter\']);"><img src="http://library.owu.edu/images/twitter.png" alt="Twitter" />Twitter</a></li><li><a href="https://www.facebook.com/beeghlylibraryowu" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Facebook\']);"><img src="http://library.owu.edu/images/facebook.png" alt="Facebook" />Facebook</a></li><li><a href="http://www.flickr.com/photos/owulibraries/" onClick="_gaq.push([\'_trackEvent\', \'Social Media\', \'Click\', \'Flickr\']);"><img src="http://library.owu.edu/images/flickr.png" alt="Flickr" /> Flickr</a></li>\</ul></div><!-- /end socialMedia --><p>Ohio Wesleyan University Libraries<br />43 Rowland Ave Delaware, OH 43015</p><p>Copyright &#169; 2013 Ohio Wesleyan University</p>');

	var currentUrl = encodeURIComponent(document.URL);

	// Declare variables for results
	var articleLinksdata = "";
	var BookLinksdata = "";
	var DatabaseNamedata = "";
	var DatabaseLinkdata = "";
	var dateRangedata = "";
	var doiLink = "";
	var hasPrint = false;
	var journalLinksdata = "";
	var refinerlink = $j("#RefinerLink0 a").attr("href");
	var results = ""; 

	// Declare variables for OpenURL-aware web services
	var sid = jQuery("#exportCitationButtons input[name='sid']").val();	
	var title = jQuery("#exportCitationButtons input[name='title']").val();
	title = title.replace('&', '%26');
	var genre = jQuery("#exportCitationButtons input[name='genre']").val();
	var issn = jQuery("#exportCitationButtons input[name='issn']").val();
	var isbn = jQuery("#exportCitationButtons input[name='isbn']").val();
	var eissn = jQuery("#exportCitationButtons input[name='eissn']").val();
	var SS_authors = jQuery("#exportCitationButtons input[name='SS_authors']").val();
	var aulast = jQuery("#exportCitationButtons input[name='aulast']").val();
	var aufirst = jQuery("#exportCitationButtons input[name='aufirst']").val();
	var date = jQuery("#exportCitationButtons input[name='date']").val();
	var pubyear = date.slice(0,4);
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

	// Declare variables for local library services
	var ohioLink = 'http://olc1.ohiolink.edu/search/t?SEARCH=';
	var consortLink = 'http://consort.library.denison.edu/search/t';
	var refworksURL = '<form action="http://0-eg7az5df6p.search.serialssolutions.com.dewey2.library.denison.edu/exportCitation" name="exportCitationForm" method="post" id="exportCitationFormId"><input value="export" type="hidden" name="exportFormType" \/><input type="hidden" name="itemExportType" value="refworks" \/><input type="hidden" name="sid" value="' + sid + '" \/><input type="hidden" name="title" value="' + title + '" \/> <input type="hidden" name="genre" value="' + genre + '" \/><input type="hidden" name="issn" value="' + issn + '" \/><input type="hidden" name="isbn" value="' + isbn + '" \/><input type="hidden" name="eissn" value="' + issn + '" \/><input type="hidden" name="SS_authors" value="' + SS_authors + '" \/><input type="hidden" name="aulast" value="' + aulast + '" \/><input type="hidden" name="aufirst" value="' + aufirst + '" \/><input type="hidden" name="date" value="' + date + '" \/><input type="hidden" name="issue" value="' + issue + '" \/><input type="hidden" name="volume" value="' + volume + '" \/><input type="hidden" name="spage" value="' + spage + '" \/><input type="hidden" name="atitle" value="' + atitle +'" \/><input type="hidden" name="auinitm" value="' + auinitm + '" \/><input type="hidden" name="doi" value="' + doi + '" \/><input type="hidden" name="pub" value="' + pub + '" \/><img src="http://library.owu.edu/images/export.png" alt="Upload" />&nbsp;&nbsp;<a onclick="exportFormSubmit(); return false;" id="exportCitationSubmit" name="export" class="text-small">Send to Refworks</a>';

	// Build the ILLiad OpenURL
	if (format === "Journal") {
		var illiadLink = 'ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=' + sid + '&rft.genre=' + genre + '&rft.atitle=' + atitle + '&rft.jtitle=' + title + '&rft.aulast=' + aulast + '&rft.aufirst=' + aufirst + '&rft.date=' + date + '&rft.issn=' + issn + '&rft.isbn=' + isbn + '&rft.volume=' + volume + '&rft.issue=' + issue + '&rft.part=' + part + '&rft.spage=' + spage + '&rft.epage=' + epage + '&rft_id=' + doi;
		} else {
		var illiadLink = 'ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=' + sid + '&rft.genre=' + genre + '&rft.atitle=' + atitle + '&rft.title=' + title + '&rft.aulast=' + aulast + '&rft.aufirst=' + aufirst + '&rft.date=' + date + '&rft.issn=' + issn + '&rft.isbn=' + isbn + '&rft.volume=' + volume + '&rft.issue=' + issue + '&rft.part=' + part + '&rft.spage=' + spage + '&rft.epage=' + epage + '&rft_id=' + doi;
		}

	// Get the author name
	var authorName = $j("span.CitationAuthor").text();
	authorName = $j.trim(authorName); // Trim leading white space form author name
	authorNameLink = 'by <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a>';

	// Journals
	if (format === "Journal" || format === "JournalFormat") {

		var journalName = $j("span.CitationSource").text();
		journalName = $j.trim(journalName); // Trim leading white space form journal name
		
		var journalNameLink = encodeURI(journalName);
		
		var articleName = $j("span.CitationArticleOrSectionTitle").text();
		articleName = $j.trim(articleName); // Trim leading white space form article name
		
		var journalVol = $j("span.CitationVolume").text();
		journalVol = $j.trim(journalVol); // Trim leading white space form journal volume
		if (journalVol !== "") { journalVol = ' <span id="CitationVolume">' + journalVol + '</span>'; } // Add context so if var is blank, it won't display
		
		var journalIssue = $j("span.CitationIssue").text();
		journalIssue = $j.trim(journalIssue); // Trim leading white space form journal issue #
		journalIssue = journalIssue.replace(/\(|\)/g, '');
		if (journalIssue !== "") {journalIssue = '<span id="CitationIssue">&nbsp;' + journalIssue + ',</span>'; } // Add context so if var is blank, it won't display

		var journalDate = $j("span.CitationDate").text();
		journalDate = $j.trim(journalDate); // Trim leading white space form journal date
		journalDate = journalDate.replace(/\(|\)/g, '');
		
		var journalPages = $j("span.CitationSpageValue").text();
		journalPages = $j.trim(journalPages); // Trim leading white space form journal pages
		if (journalPages !== "") {journalPages = '<span id="CitationSpageValue">&nbsp;p. ' + journalPages + '.</span>'; } // Add context so if var is blank, it won't display
		
		var journalissn = $j("span.CitationISSN").text();
		journalissn = $j.trim(journalissn); // Trim leading white space form journal issn
		if (journalissn !== "") { journalissn = '<span id="CitationISSN">&nbsp;&nbsp;' + journalissn + '</span>'; } // Add context so if var is blank, it won't display 
		
		var searchissn = $j("span.CitationISSN").text();
		searchissn = $j.trim(searchissn);
		searchissn = searchissn.replace("(","");
		searchissn = searchissn.replace(")","");

		if (issn != "") {
			var cover_issn = issn;
		} else {
			var cover_issn = eissn;
		}

		if (issn === "" && eissn === "") {
			var cover_issn = '8675309';
		}

		// Get cover art if available
		var cover_art = 'src="http://www.syndetics.com/index.php?client=ohwesleyu&issn=' + cover_issn + '/mc.jpg"';

		// Load default book icon if cover art is not available
		var default_icon = 'http://library.owu.edu/images/magazine.png';
		
		if (journalVol.length > 1) {
			journalVol = 'Volume ' + journalVol;
		}

		if (journalIssue.length > 1) {
			journalIssue = 'Issue ' + journalIssue;
		}

		if (authorName.length > 1) {
		var citationDiv = '<h4 class="genre-color">Article</h3><h2 class="newtitle">' + articleName + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a></p><p>Published&#58; ' + journalDate + '</p><p>In&#58; <span class="italic"><a href="http://eg7az5df6p.search.serialssolutions.com/?S=AC_T_B&V=1.0&N=100&L=EG7AZ5DF6P&C=' + journalNameLink + '">' + journalName + '</a>,</span> ' + journalVol + ', ' + journalIssue + journalPages + '</p></div>';
		} else {
		var citationDiv = '<h4 class="genre-color">Article</h3><h2 class="newtitle">' + articleName + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>Published&#58; ' + journalDate + '</p><p>In&#58; <span class="italic"><a href="http://eg7az5df6p.search.serialssolutions.com/?S=AC_T_B&V=1.0&N=100&L=EG7AZ5DF6P&C=' + journalNameLink + '">' + journalName + '</a>,</span> ' + journalVol + ', ' + journalIssue + journalPages + '</p></div>';
		}

		// Encodes journal titles for use in URLs. There are lots of white spaces in the title that need to be converted.
		var journalTitleEncode = encodeURI(journalName);	

	}

	// Books
	if (format === "BookFormat" || format === "Book") {

		var bookTitle = $j("span.CitationSource").text();
		bookTitle = $j.trim(bookTitle); // Trim leading white space form book title
		
		var bookTitleLink = encodeURI(bookTitle); // Encode book titles for use in URLs. There are lots of white spaces in the title that need to be converted.
		
		var bookChapterTitle = atitle;
		
		var bookDate = $j("span.CitationDate").text();
		bookDate = $j.trim(bookDate); // Trim leading white space form pub date
		
		var bookisbn = $j("span.CitationISBN").text();
		bookisbn = $j.trim(bookisbn); // Trim leading white space form ISBN
		if (bookisbn !== "") {  //get best search param for catalog search 
			var searchIsbns = bookisbn.split(", ");
			var firstISBN = searchIsbns[0].replace(/-/g,"");
			firstISBN = firstISBN.replace("(","");
			bookisbn = '&nbsp;<span id="CitationISBN">' + bookisbn + '</span>&nbsp;'; 
			} // Add context to citation so if var is blank it will not display

		searchURL = "http://consort.library.denison.edu/search/t" + bookTitleLink;

		if (genre === "bookitem") {
			genre = "book";
		}

		// Get cover art if available
		var cover_art = 'src="http://www.syndetics.com/index.aspx?isbn=' + firstISBN + '/MC.GIF&client=ohwesleyu&showCaptionBelow=f"';

		// Load default book icon if cover art is not available
		var default_icon = 'http://library.owu.edu/images/book-icon.png';

		if (atitle === title || atitle === '' ) {
			var citationDiv = '<h4 class="genre-color">Book<h4><h2 class="newtitle">' + title + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a></p><p>Published&#58; ' + pubyear + '</p><p>ISBN&#58; ' + isbn + '</p></div>';

		} else {
			var citationDiv = '<h4 class="genre-color">Book Chapter</h4><h2 class="newtitle">' + atitle + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a></p><p>Published&#58; ' + pubyear + '</p><p>In the book&#58; <a href="http://owu.summon.serialssolutions.com/search?t.TitleCombined=' + bookTitle + '">' + bookTitle + '</a></p><p>ISBN&#58; ' + isbn + '</p>';

		}
		
		var nextstepsLink = '<div id="next-steps"><p class="text-small">Still can\'t find it? Check <a href="' + ohioLink + bookTitleLink + '">OhioLINK</a> or just <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">request a copy from another library</a></p>' + refworksURL + '</div>';
	}

	// Unknown format - treat as book?
	if (format === "UnknownFormat" || format === "Unknown") {

		var bookTitle = $j("td#CitationUnknownPublicationValue").text();
		bookTitle = $j.trim(bookTitle); // Trim leading white space form book title
		
		var bookTitleLink = encodeURI(bookTitle); // Encode book titles for use in URLs. There are lots of white spaces in the title that need to be converted.

		var bookDate = $j("td#CitationUnknownDateValue").text();
		bookDate = $j.trim(bookDate); // Trim leading white space form journal name
		
		var bookisbn = $j("td#CitationBookISBNValue").text();
		bookisbn = $j.trim(bookisbn); // Trim leading white space form journal name
		if (bookisbn !== "") { 
			bookisbn = '&nbsp;<span id="CitationBookISBNValue">(ISBN:&nbsp;' + bookisbn + ')</span>&nbsp;'; }
			else {
				searchURL = "http://consort.library.denison.edu/search/t" + bookTitleLink;
			} // 

		var citationDiv = '<span id="CitationBookAuthorValue">' + authorName + '</span>&nbsp; <span id="CitationBookDateValue">(' + bookDate + ')</span>.&nbsp; <span id="CitationBookTitleValue"><em>' + bookTitle + '</em></span>&nbsp; <span id="CitationBookISBNValue">&nbsp; </span>';

		var nextstepsLink = '<li><a href="http://library.catalog.gvsu.edu/search/t' + bookTitleLink + '">Search the Daigle Catalog for this book</a></li><li>Not Available Online? <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Order a copy from Interlibrary Loan</a></li><li>Found a problem? <a href="mailto:bldaigle@owu.edu?subject=Bad%20Full%20Text%20Link&body=%0A%0AProblem%20URL:%20' + currentUrl + '">Let us know</a>!</li>';
	}

	// Dissertation
	if (format === "Dissertation" || format === "DissertationFormat") {

			var dissAuthor = $j("span.CitationAuthor").text();
			
			var dissTitle = $j("span.CitationSource").text();
			dissTitle = $j.trim(dissTitle); // Trim leading white space form dissertation title
			
			var dissTitleLink = encodeURI(dissTitle); // Encode dissertation titles for use in URLs. There are lots of white spaces in the title that need to be converted.

			var dissDate = $j("span.CitationDate").text();
			dissDate = dissDate.replace(/\(|\)/g, '');

			var dissISBN = $j("span.CitationISBN").text();
			dissISBN = dissISBN.replace('(','');
			dissISBN = dissISBN.replace(')','');

			var searchURL = "http://consort.library.denison.edu/search/t" + dissTitle;

			// Get cover art if available
			var cover_art = 'src="http://www.syndetics.com/index.aspx?isbn=' + firstISBN + '/MC.GIF&client=ohwesleyu&showCaptionBelow=f"';

			// Load default book icon if cover art is not available
			var default_icon = 'http://library.owu.edu/images/book-icon.png';

			var citationDiv = '<h4 class="genre-color">Dissertation<h4><h2 class="newtitle">' + title + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + dissAuthor + '">' + dissAuthor + '</a></p><p>Published&#58; ' + dissDate + '</p><p>ISBN&#58; ' + isbn + '</p></div>';

	}

	// Proceedings
	if (genre === "proceeding") {
		var bookTitle = $j("span.CitationSource").text();
		bookTitle = $j.trim(bookTitle); // Trim leading white space form book title
		
		var bookTitleLink = encodeURI(bookTitle); // Encode book titles for use in URLs. There are lots of white spaces in the title that need to be converted.
		
		var bookChapterTitle = atitle;

		var bookDate = $j("span.CitationDate").text();
		bookDate = $j.trim(bookDate); // Trim leading white space form pub date
		
		var bookisbn = $j("span.CitationISBN").text();
		bookisbn = $j.trim(bookisbn); // Trim leading white space form ISBN
		if (bookisbn !== "") {  //get best search param for catalog search 
			var searchIsbns = bookisbn.split(", ");
			var firstISBN = searchIsbns[0].replace(/-/g,"");
			firstISBN = firstISBN.replace("(","");
			bookisbn = '&nbsp;<span id="CitationISBN">' + bookisbn + '</span>&nbsp;'; 
		} // Add context to citation so if var is blank it will not display
		
		var searchURL = "http://consort.library.denison.edu/search/t" + bookTitleLink;
	
		// Get cover art if available
		var cover_art = 'src="http://www.syndetics.com/index.aspx?isbn=' + firstISBN + '/MC.GIF&client=ohwesleyu&showCaptionBelow=f"';

		// Load default book icon if cover art is not available
		var default_icon = 'http://library.owu.edu/images/book-icon.png';

		if (atitle === title || atitle === '' ) {
			var citationDiv = '<h4 class="genre-color">Conference Proceeding</h4><h2 class="newtitle">' + title + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a></p><p>Published&#58; ' + pubyear + '</p><p>ISBN&#58; ' + isbn + '</p></div>';

		} else {
			var citationDiv = '<h4 class="genre-color">Conference Proceeding</h4><h2 class="newtitle">' + atitle + '</h2><div id="cover-art"><img src="' + default_icon + '" alt="Book"/><img class="img-shadow title-cover"' + cover_art + ' alt="Cover Art" /></div><div id="item-details"><p>By <a href="http://owu.summon.serialssolutions.com/search?t.AuthorCombined=' + authorName + '">' + authorName + '</a></p><p>Published&#58; ' + pubyear + '</p><p>In the book&#58; <a href="http://owu.summon.serialssolutions.com/search?t.TitleCombined=' + bookTitle + '">' + bookTitle + '</a></p><p>ISBN&#58; ' + isbn + '</p></div>';

		}
		
		// Re-build the "Other Options" div with alternative options to get items, such as ILL or OhioLINK.
		var nextstepsLink = '<div id="next-steps"><p class="text-small">Still can\'t find it? Check <a href="' + ohioLink + bookTitleLink + '">OhioLINK</a> or just <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">request a copy from another library</a></p>' + refworksURL + '&nbsp;&nbsp;<img src="http://library.owu.edu/images/edit.png" alt="Edit this Citation" />&nbsp;<a class="text-small" href="' + refinerlink + '">Edit this citation</a><br /><br /></div>';
	}	

	// Patent
	if (format === "Patent" || format === "PatentFormat") {

		var patentTitle = $j("td#CitationPatentTitleValue").text();
		patentTitle = $j.trim(patentTitle);  //Trim leading white space from patent title
		
		var patentDate = $j("td#CitationPatentInventorDateValue").text();
		patentDate = $j.trim(patentDate);  //Trim leading white space from patent date
		
		authorName = $j("td#CitationPatentInventorValue").text();
		authorName = $j.trim(authorName);

		var patentTitleLink = encodeURI(patentTitle);
		
		var nextstepsLink = '<li><a href="http://www.google.com/?tbm=pts#tbm=pts&q=' + dissTitleLink + '">Search the Google Patents for this patent.</a></li><li>Not Available Online? <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">Submit a request.</a></li>';

		var citationDiv = '<span id="CitationPatentInventorValue">' + authorName + '</span>&nbsp; <span id="CitationPatentInventorDateValue">(' + patentDate + ')</span>.&nbsp; <span id="CitationPatentTitleValue"><em>' + patentTitle + '</em></span>';
	}	

	$j("table#JournalLinkTable").find("tr").each(function(index) { // Grab values from the results table

		if(index !== 0) { 

			// Get the article link, if available
			if($j(this).find("#ArticleCL a").length > 0) { // There is an article link
				var newHref = $j(this).find("#ArticleCL a").attr("href");
				articleLinksdata = articleLinksdata + newHref + "|||"; // Placing these pipe characters in the string gives us a delimiter we can use to break each value into separate strings for an array
			} else { // No article length
				articleLinksdata = articleLinksdata + "NA|||";
			}

			// Get the journal link, if available
			if($j(this).find("#JournalCL a").length > 0) { // There is a journal link
				var newHref = $j(this).find("#JournalCL a").attr("href");
				journalLinksdata = journalLinksdata + newHref + "|||";
			} else { // No article length
				journalLinksdata = journalLinksdata + "NA|||";
			}

			// Get the date range
			var newDates = $j(this).find("#DateCL").text();
			dateRangedata = dateRangedata + newDates + "|||";

			// Get the database name
			var newDBName = $j(this).find("#DatabaseCL").text();
			DatabaseNamedata = DatabaseNamedata + newDBName + "|||";

			// Get the database link
			var newDBLink = $j(this).find("#DatabaseCL a").attr("href");
			DatabaseLinkdata = DatabaseLinkdata + newDBLink + "|||";
		} 
		
		results = index; // Get total number of results
		BookLinksdata = "NA|||";

	});

	if(results === "") {

		$j("table#BookLinkTable").find("tr").each(function(index) { // Grab values from the results table

			if(index !== 0) {

				if($j(this).find("#BookCL a").length > 0) { // There is a book link
					var newHref = $j(this).find("#BookCL a").attr("href");
					//console.log(BookLinksdata);
					BookLinksdata = BookLinksdata + newHref + "|||"; // Placing these pipe characters in the string gives us a delimiter we can use to break each value into separate strings for an array
				} else { // No book link
					BookLinksdata = BookLinksdata + "NA|||";
				}

				// Get the date range
				var newDates = $j(this).find("#DateCL").text();
				dateRangedata = dateRangedata + newDates + "|||";

				// Get the database name
				var newDBName = $j(this).find("#DatabaseCL").text();
				DatabaseNamedata = DatabaseNamedata + newDBName + "|||";

				// Get the database link
				var newDBLink = $j(this).find("#DatabaseCL a").attr("href");
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
		TopDatabaseName = $j.trim(DatabaseNames[0]);


		// Offer some help in finding items in physical locations at OWU.
		if (TopDatabaseName === "OWU Beeghly Periodicals") {
			var printHelpMessage = '<p>A physical copy of article item is available in <span class="text-heavier">OWU Beeghly Periodicals</span> on the lower level of Beeghly Library.</p><p>If you have trouble locating this item, <a href="http://library.owu.edu/research-help.html">ask a librarian for help</a>.</p>';
		}

		if (TopDatabaseName === "OWU Microfilm Periodicals") {
			var printHelpMessage = '<p>A physical copy of this article in <span class="text-heavier">OWU Microfilm Periodicals</span> on the lower level of Beeghly Library.</p><p>If you have trouble locating this item, <a href="http://library.owu.edu/research-help.html">ask a librarian for help</a>.</p>';
		}

		if (TopDatabaseName === "OWU Archive Periodicals") {
			var printHelpMessage = '<p>A physical copy of this article is available in the <a class="text-heavier" href="http://library.owu.edu/archives-methodism.html">Archives of Ohio United Methodism</a> on the second floor of Beeghly Library.</p><p>Visit the <a href="http://library.owu.edu/archives-methodism.html">archives\' website</a> for information about accessing materials in this collection.</p>';
		}

		if (TopDatabaseName === "OWU Music Periodicals") {
			var printHelpMessage = '<p>A physical copy of this article is avialable in the <a class="text-heavier" href="http://library.owu.edu/music-library.html">Kinnison Music Library</a> in Sanborn Hall.</p><p>If you have trouble locating this item, <a href="http://library.owu.edu/research-help.html">ask a librairan for help</a>.</p>';
		}

		if (TopDatabaseName === "OWU Reference Periodicals") {
			var printHelpMessage = '<p>A physical copy of this item is available in the reference collection on the first floor of the Beeghly Library.</p><p>If you have trouble locating this item, <a href="http://library.owu.edu/research-help.html">ask a librarian for help</a>.</p>';
		}

		if (TopDatabaseName === "OWU Science Periodicals") {
			var printHelpMessage = '<p>A physical copy of this item is available in the <a class="text-heavier" href="http://library.owu.edu/science-library.html">Hobson Science Library</a> adjacent to the <a href="http://choose.owu.edu/campusmap/?location=14">Schimmel Conrades Science Center</a>.</p><p>If you have trouble locating this item, <a href="http://library.owu.edu/research-help.html">ask a librairan for help</a>.</p>';
		}

		// if(doi !== "") { // Build DOI links if present
			// var doiLink = 'http://dx.doi.org/' + doi;
			// var topResultdiv = '<ul id="top-result"><li><a href="' + doiLink + '" class="article-button" target="_blank">GET ARTICLE</a> &nbsp;from the publisher\'s website <a class="holding-details"><img src="images/information-skinny.png" alt="coverage" /></a><div class="tooltip" id="details"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[0] + '</p><p><a href="' + journalLinks[0] + '">Browse Journal</a></p></div></li></ul>';
		// } 

		// Check to see if top result is a print journal
		if(TopDatabaseName === "OWU Beeghly Periodicals" || TopDatabaseName === "OWU Microfilm Periodicals" || TopDatabaseName === "OWU Archive Periodicals" || TopDatabaseName === "OWU Music Periodicals" || TopDatabaseName === "OWU Reference Periodicals" || TopDatabaseName === "OWU Science Periodicals") { // Item is in print
			// var topResultdiv = '<ul id="top-result"><li><a href="' + journalLinks[0] + '" class="journal-button" target="_blank">Find a Copy</a> in ' + $j.trim(DatabaseNames[0]) + ' <a class="holding-details" id="details"><img src="http://library.owu.edu/images/information-skinny.png" alt="coverage" /></a><div class="tooltip"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[0] + '</p></div></li></ul>';
			var topResultdiv = printHelpMessage;
			var hasPrint = true;	
		} else { // Item is an electronic journal
			if(doi !== "") { // Build DOI links if present
				var doiLink = 'http://dx.doi.org/' + doi;
				var topResultdiv = '<ul id="top-result"><li><a href="' + doiLink + '" class="newbutton" target="_blank">GET ARTICLE</a> &nbsp;from the publisher\'s website <a class="holding-details"><img src="http://library.owu.edu/images/information-skinny.png" alt="coverage" /></a><div class="tooltip" id="details"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[0] + '</p><p><a class="text-heavier" href="' + journalLinks[0] + '">Go to the Journal</a></p></div></li></ul>';
			} else {
				var topResultdiv = '<ul id="top-result"><li class="floater"><a href="http://scholar.google.com/scholar?hl=en&q=%22' + atitle + '%22%20' + aulast + ',%20' + aufirst + '" class="newbutton" target="_blank">CHECK GOOGLE SCHOLAR</a>&nbsp;&nbsp;</li><li><p>Not on Google Scholar? <br />Go to the <a href="' + journalLinks[0] + '">journal&#39;s website</a> and search for the article&#39;s title.</p></li></ul>';
			}
		}	
	} 
	else { 
		if((BookLinks[0] !== "NA") && (BookLinksdata !== "")) { // There is a book Link
			var topResultdiv = '<ul id="top-result"><li><ul><li class="floater"><a href="' + BookLinks[0] + '" class="newbutton" target="_blank">READ ONLINE</a>&nbsp;&nbsp;</li><li><p>in ' + $j.trim(DatabaseNames[0]) + '</p></li></ul></li></ul>';
		} else { // There is an article link
			var topResultdiv = '<ul id="top-result"><li><a href="' + articleLinks[0] + '" class="newbutton" target="_blank">GET ARTICLE</a> &nbsp;from ' + $j.trim(DatabaseNames[0]) + ' <a class="holding-details"><img src="images/information-skinny.png" alt="coverage" /></a><div class="tooltip" id="details"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[0] + '</p><p><a class="text-heavier" href="http://scholar.google.com/scholar?hl=en&q=' + journalLinks[0] + '">Go to the Journal</a></p></div></li></ul>';
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
				onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + articleLinks[i] + '" target="_blank">Get the Article</a> &nbsp;from' + DatabaseNames[i] + ' &nbsp;<a class="holding-details"><img src="http://library.owu.edu/images/information-skinny.png" alt="coverage" /></a><div class="tooltip"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[i] + '</p><p><a class="text-heavier" href="' + journalLinks[i] + '">Go to the Journal</a></p></div></li>';
			} else { // No article link

				// Check to see if it is available in print only and save it as a separate variable to be broken out in another list
				if($j.trim(DatabaseNames[i]) === "OWU Beeghly Periodicals" || $j.trim(DatabaseNames[i]) === "OWU Microfilm Periodicals" || $j.trim(DatabaseNames[i]) === "OWU Archive Periodicals" || $j.trim(DatabaseNames[i]) === "OWU Music Periodicals" || $j.trim(DatabaseNames[i]) === "OWU Reference Periodicals" || $j.trim(DatabaseNames[i]) === "OWU Science Periodicals") { // Item is in print
					var hasPrint = true;
					if(printAdditionalResults === "") { // First print article listed, add the header
						printAdditionalResults = printAdditionalResults + "<h4>Also Available in Print</h4><ul>";
					}
					printAdditionalResults = printAdditionalResults + '<li><a href="' + journalLinks[i] + '" target="_blank">Available in Print</a> in ' + DatabaseNames[i] + '<a class="holding-details" id="details"><img src="http://library.owu.edu/images/information-skinny.png" alt="" /></a><div class="tooltip"><p><span class="text-heavier">Dates covered:</span><br />' + dateRange[i] + '</p></div>';
				} else { // Item is online
					if(onlineAdditionalResults === "") { // First online article listed, add the header
						onlineAdditionalResults = onlineAdditionalResults + "<h4>Online</h4><ul>";
					}
					if((journalLinks[i] === "NA") && (BookLinks[i] !== "NA")) { 
						onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + BookLinks[i] + '" target="_blank">Browse the Journal</a> in ' + DatabaseNames[i] + '</a><a class="holding-details"><img src="http://library.owu.edu/images/information-skinny.png" alt="" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p></div></li>';
					} else {
						onlineAdditionalResults = onlineAdditionalResults + '<li><a href="' + journalLinks[i] + '" target="_blank">Browse the Journal</a> in ' + DatabaseNames[i] + '</a><a class="holding-details"><img src="http://library.owu.edu/images/information-skinny.png" alt="" /></a><div class="tooltip"><p style="font-size: 1em;"><span class="bold">Dates covered:</span><br />' + dateRange[i] + '</p></div></li>';
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

	// No results.
	if(results === "" && format === "BookFormat") { // Item is not available online or in print
		var Resultdiv = '<div id="ContentNotAvailableTable"><br /><p class="text-smaller"><a href="' + searchURL + '" class="newbutton" target="_blank">FIND A COPY IN CONSORT</a></p><br /></div>';	
		var nextstepsLink = '<div id="next-steps"><p class="text-small">Still can\'t find it? Check <a href="' + ohioLink + bookTitleLink + '">OhioLINK</a> or just <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">request a copy from another library</a></p>' + refworksURL + '<br /><br /></div>';
	} 

	if(results === "" && format !== "BookFormat") {
		var nextstepsLink = '<div id="next-steps">' + refworksURL + '</div>';
	}

	if(results === "" && genre === "dissertation") {
		var Resultdiv = '<div id="ContentNotAvailableTable"><br /><p class="text-smaller"><a href="' + searchURL + '" class="newbutton" target="_blank">FIND A COPY IN CONSORT</a></p><br /></div>';	
		var nextstepsLink = '<div id="next-steps"><p class="text-small">Still can\'t find it? Check <a href="' + ohioLink + bookTitleLink + '">OhioLINK</a> or just <a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '">request a copy from another library</a></p>' + refworksURL + '<br /><br /></div>';
	} 


	if(results === "" && format === "JournalFormat") {
		var Resultdiv = '<div id="ContentNotAvailableTable"><p class="text-small">This article is not available online from the library.</p><br /><p class="text-smaller"><a href="https://owu.illiad.oclc.org/illiad/illiad.dll/OpenURL?' + illiadLink + '" class="newbutton">REQUEST A COPY</a></p><br /></div>';
		var nextstepsLink = '<div id="next-steps">' + refworksURL + '</div>';
	}

	if(results !== "" && format === "Journal") {
		var nextstepsLink = '<div id="next-steps">' + refworksURL + '</div>';
	}

	var query = document.location.search;
	var pairvalues = query.split("&");

	if(pairvalues[0] !== "?SS_Page=refiner") { // Don't rewrite the page if this is the citation form
		
		if (format === "Book" || format === "BookFormat") {
			var cover_art = 'src="http://www.syndetics.com/index.aspx?isbn=' + firstISBN + '/MC.GIF&client=ohwesleyu&showCaptionBelow=f"';
		} else {
			var cover_art = 'src="http://www.syndetics.com/index.php?client=ohwesleyu&issn=' + searchissn + '/mc.jpg"';
		}

		if (genre === "bookitem" || genre === "book") {
			var default_icon = 'http://library.owu.edu/images/book-icon.png';
		} else {
			var default_icon = 'http://library.owu.edu/images/magazine.png';
		}

		$j("#360link-reset").html('<div id="page-content"><div id="citation">' + citationDiv + '</div></div>' + Resultdiv + nextstepsLink + '</div><div class="clear"></div></div>');


	}

	$j(".event-body").hide(); 
	$j(".event-head").click(function() {
	$j(".event-body").slideToggle(400);
		var current_text = $j(".event-head").text();
		if(current_text === "Hide additional sources") {
		  $j(".event-head").text('Show more sources');
		  } else {
		  $j(".event-head").text('Hide additional sources');
		  }
	});

	if (format === "Journal" || format === "JournalFormat") {
	$j(".holding-details").tooltip({effect: 'toggle',offset:[50,110]});
	};

});