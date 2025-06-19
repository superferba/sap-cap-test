sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nct/project1/test/integration/FirstJourney',
		'nct/project1/test/integration/pages/BooksList',
		'nct/project1/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nct/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);