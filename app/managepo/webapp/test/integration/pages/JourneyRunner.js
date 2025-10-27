sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"saipriya/po/managepo/test/integration/pages/POsList",
	"saipriya/po/managepo/test/integration/pages/POsObjectPage",
	"saipriya/po/managepo/test/integration/pages/POItemsObjectPage"
], function (JourneyRunner, POsList, POsObjectPage, POItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('saipriya/po/managepo') + '/test/flp.html#app-preview',
        pages: {
			onThePOsList: POsList,
			onThePOsObjectPage: POsObjectPage,
			onThePOItemsObjectPage: POItemsObjectPage
        },
        async: true
    });

    return runner;
});

