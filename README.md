link-resolver
=============

Customizations to OWU Libraries' 360 Link OpenURL Resolver

These customizations are heavily based on code by Matthew Reidsma here:
https://github.com/mreidsma/360link-reset-2.0

This repository consists of two main files:
360link-reset.js
360link-resolver.css

**** INSTALLATION ****

Upload the 360link-reset.js and 360link-resolver.css files to your web server and note the paths.

In the Serials Solutions Client Center, navigate to 360 Link > Admin Console > Branding Options

Click Edit.

Add the following to the Header HTML box:

      <-- Begin custom link resolver header -->

      <div id="360header">
        </div>
      
        <div class="inner">
      </div>
      
      <div id="contentArea"> 
        <div id="360link-reset">
      
      <-- End custom link resolver header -->

Add the following to the Footer HTML box:

      <!-- Begin custom footer code here -->
      
      </div>
              </div>
      		  </div>
          </div>
      	</div>
      
      <div id="footer">
        <div id="footerContentWrapper">
      	    
        </div>
      </div>
      <script src="http://cdn.jquerytools.org/1.2.6/jquery.tools.min.js" type="text/javascript"></script>
      <script src="PATH/TO/360link-reset.js" type="text/javascript"></script>
            
      <!-- End custom footer code here -->


**** CUSTOMIZATION ****

From Matthew Reidsma:
"360Link Reset runs through the crummy default 360Link page and grabs all of the important bits: URLs, citation information, database names, and then clears away all the cruft Serials Solutions adds to your page (except scripts) and starts fresh with a new batch of clean, simple semantic HTML. It then makes it look pretty, simplifying the citation into a single line and showing only the first result in a list, hiding the rest until the user clicks "Show More Results." The number one problem we found in our monthly usability tests of our link resolver was that multiple results confused everyone who used the site. This solution attempts to remedy the problem."

What I found when implementing Reidsma's script was that it wasn't an immediate turn-key solution. In addition to stripping out all the default CSS, the jQuery in the script works by calling specific elements by their css class or id. I found that these classes or ids may differ depending on your stock 360Link implementation so you will need to view the source code of your link resolver pages to find the class or id names for each element.




