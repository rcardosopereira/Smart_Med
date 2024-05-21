
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import BedanktPage from '../pages/BedanktPage';
import SolutionsPage from '../pages/SolutionsPage';
import AboutPage from '../pages/AboutPage';
import SupportPage from '../pages/SupportPage';
import NewsPage from '../pages/NewsPage';
import SearchPage from '../pages/SearchPage';

describe('Given the smartmed.world web page', () => {
    beforeEach(() => {
        HomePage.visitHomePage();
    });

    it('Check the "Solutions" menu and its sub-functionalities', () => {
      
        SolutionsPage.openSolutionsMenu();
        SolutionsPage.verifySolutionOptions(['Clinic', 'forYou', 'Care', 'Pharmacy', 'Hospital']);

        SolutionsPage.selectSolutionOption(1);
        SolutionsPage.verifySolutionDetails('/solution/clinic', 'Het slimme EVS voor de kliniek.', 'Uit te breiden met onze eTDR en ZAIS, maar ook standalone en gekoppeld aan uw EPD.');

        SolutionsPage.openSolutionsMenu();
        SolutionsPage.selectSolutionOption(2);
        SolutionsPage.verifySolutionDetails('/solution/foryou', 'Zorgverlening via een digitale patiëntrelatie.', 'En met een verbeterde logistieke efficiëntie.');

        SolutionsPage.openSolutionsMenu();
        SolutionsPage.selectSolutionOption(3);
        SolutionsPage.verifySolutionDetails('/solution/care', 'Betrouwbaar medicatie-management.', 'Slim, efficiënt en persoonlijk.');

        SolutionsPage.openSolutionsMenu();
        SolutionsPage.selectSolutionOption(4);
        SolutionsPage.verifySolutionDetails('/solution/pharmacy', 'Méér dan een AIS.', 'Bespaar tijd en geld met hyperautomation en moderne technologie');

        SolutionsPage.openSolutionsMenu();
        SolutionsPage.selectSolutionOption(5);
        SolutionsPage.verifySolutionDetails('/solution/hospital', 'De slimme EVS + ZAIS + eTDR combinatie.', 'Nu. En in de toekomst.');
    });

    it('Check the "Over ons" menu', () => {
        AboutPage.verifyPageElements();
        AboutPage.clickAbsoluteLink();
        AboutPage.verifyUrlContains('/over-smartmed');
        AboutPage.verifyHeaderText('InnovatingMedicationManagement');
        AboutPage.verifySubheaderText('Now, and in the future.');
    });

    it('Check the "Support" menu', () => {
        SupportPage.verifySupportMenu();
        SupportPage.clickSupportLink();
        SupportPage.verifySupportPageUrl();
        SupportPage.verifySupportPageHeading();
        SupportPage.verifySupportPageParagraph();
    });

    it('Check the "Nieuws" menu', () => {
        NewsPage.verifyNewsMenu();
        NewsPage.clickNewsLink();
        NewsPage.verifyNewsPageUrl();
        NewsPage.verifyNewsPageHeading();
    });

    it('Check the "Zoeken" menu', () => {
        SearchPage.verifySearchMenu();
        SearchPage.clickSearchLink();
        SearchPage.verifySearchResultPageHeading();
        SearchPage.searchFor('Quality Assurance Developer');
        SearchPage.verifySearchResults(
            'SmartMed | Quality Assurance Engineer (M/F/X)',
            'SmartMed | Advanced C# Developer'
        );
        SearchPage.verifySearchResultsDescription(
            ' & Regulatory Affairs: "Ik ben trots dat SmartMed deze certificaten voor het zesde jaar op rij met succes behaald heeft.'
        );
    });

    it('Check the "Contact" menu and fill the form to send it.', () => {
        ContactPage.visitContactPage();
        ContactPage.submitForm();
        ContactPage.validateNameErrorMessage();
        ContactPage.fillName();
        ContactPage.submitForm();

        ContactPage.validateEmailErrorMessage();
        ContactPage.fillEmail();
        ContactPage.submitForm();

        ContactPage.validateCompanyErrorMessage();
        ContactPage.fillCompany();
        ContactPage.submitForm();

        ContactPage.validatePhoneNumberErrorMessage();
        ContactPage.fillPhoneNumber();

        ContactPage.agreeToTerms();
        ContactPage.submitForm();
        BedanktPage.visitHomePage();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

});
