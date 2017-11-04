<?php

/**
 * The Booking API root entry point
 * This is the router
 *
 */
error_reporting(E_ALL);
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);

require_once ('BookingServerApi.php');

$app = new \Booking\Api\Server(array(
    'mode' => 'development',
    'debug' => true
));

$app->get('/', function () {
    echo "Authorization is required.";
});

/**
 * Check authorization middleware
 *
 * @return Closure
 */
$checkAuth = function () {
    return function () {
        $app = \Booking\Api\Server::getInstance();

        $appConfig = $app->getConfig();

        // Get auth username/password = HTTP basic authorization
        $auth = $app->request->headers->get('Authorization');
        if (empty($auth)) {
            $app->halt(403, 'Authorization is require');
        }

        // Check auth type
        $auth = explode(' ', $auth);
        if (strtolower(reset($auth)) != 'basic') {
            $app->halt(403, 'Authorization is require');
        }

        // Check BASE64 encode
        if (strpos(base64_decode(end($auth)), ':') === false)
            $auth = explode(':', end($auth));
        else
            $auth = explode(':', base64_decode(end($auth)));
        $username = reset($auth);
        $password = end($auth);

        // Check ip address
        /*
         * if( $username !== $appConfig['username'] ||
         * $password !== $appConfig['password'] ||
         * array_search(
         * $app->getIpAddress(),
         * $appConfig['host']
         * ) === false
         * )
         * {
         * $app->halt(403, 'Authorization is require');
         * }
         */
    };
};

$acceptCORSRequestWithFields = function ($fields, $methods) {
    return function () use ($fields, $methods) {

        /**
         * Get an API server instance
         *
         * @var Booking\Api\Server $app
         */
        $app = \Booking\Api\Server::getInstance();
        $app->response->headers->set('Access-Control-Allow-Origin', '*');
        $app->response->headers->set('Access-Control-Allow-Methods', $methods . ', OPTIONS');
        $app->response->headers->set('Access-Control-Allow-Headers', $fields);
    };
};

/**
 * Check minimal `application state`/`user state` parameters
 *
 * @return Closure
 */
$checkMinimalRequiredHeaders = function () {
    return function () {

        /**
         * Get an API server instance
         *
         * @var Booking\Api\Server $app
         */
        $app = \Booking\Api\Server::getInstance();

        // Get the portal ID from the request header
        $app->setPortalId($app->request->headers->get('PortalId'));

        // Get the structure ID from the request header
        $app->setStructureId($app->request->headers->get('StructureId'));

        // Get the language code from the request header
        $app->setUserLanguageCode($app->request->headers->get('UserLanguageCode'));
    };
};

// Ping/Pong API
$app->get('/ping/:name', function ($name) {
    echo "Pong $name :-)";
});

$app->options('/flowSetup', $acceptCORSRequestWithFields('StructureId,PortalId', 'GET'));
$app->get('/flowSetup', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId', 'GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $app->getApi('/booking/structure/flowSetup/', $params);
});

$app->options('/config', $acceptCORSRequestWithFields('StructureId', 'GET'));
$app->get('/config', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId', 'GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $app->getApi('/booking/structure/ecommerceConfig/', $params);
});

$app->options('/booking/specialservices', $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode', 'GET'));
$app->get('/booking/specialservices', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode', 'GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->language = $app->getUserLanguageCode();
    $app->getApi('/booking/Structure/Accessories/', $params);
});

$app->options('/booking/specialservices/:id', $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode', 'GET'));
$app->get('/booking/specialservices/:id', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode', 'GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->language = $app->getUserLanguageCode();

    $app->getApi('/booking/structure/accessories/', $params);
});

$app->options('/booking/cart', $acceptCORSRequestWithFields('StructureId,PortalId', 'POST,PUT,GET'));

$app->options('/booking/cart/:cartId', $acceptCORSRequestWithFields('StructureId,PortalId,Content-Type', 'POST,PUT,GET'));

$app->options('/booking/cart/quote/', $acceptCORSRequestWithFields('Content-Type,StructureId,PortalId,UserLanguageCode', 'POST'));

// {"itemId":1,"variants":[{"vCatId":1,"vId":1,"vValue":1},{{"vCatId":1,"vId":2,"vValue":2}}]}
// vCatId sempre 0 , varianti booking
// vId 1 , notti
// vId 2 , pax
// vId 3 , adults
// vId 4 , children
$app->post('/booking/cart/quote/', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('Content-Type,StructureId,PortalId,UserLanguageCode', 'POST'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->language = $app->getUserLanguageCode();
    $params->itemData = $app->request->getBody();

    $app->getApi('/booking/cart/quote/', $params);
});

$app->post('/booking/cart', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId', 'POST,PUT,GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();

    $app->getApi('/booking/cart/', $params);
});

$app->get('/booking/cart/:cartId', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId', 'POST,PUT,GET'), function ($cartId) use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->cartId = $cartId;

    $app->getApi('/booking/cart/', $params);
});

$app->put('/booking/cart/:cartId', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId,Content-Type', 'POST,PUT,GET'), function ($cartId) use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->cartId = $cartId;
    $params->body = $app->request->getBody();
    $app->getApi('/booking/cart/', $params);
});

// Manage 404
$app->notFound(function () use (&$app) {
    header('Content-type: application/json; charset="utf-8"');
    echo (json_encode(array(
        'error' => "Api `{$app->request->getPath()}` not found. If you want use this API, you must be set it in to the router first"
    )));
});

// Manage generic error
$app->error(function (\Exception $e) use (&$app) {
    header('Content-type: application/json; charset="utf-8"');
    echo (json_encode(array(
        'error' => $e->getMessage()
    )));
});

$app->options('/booking/allianz/quote', $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode,Total,InsuranceType,Adults,Checkin,Checkout,Children', 'GET'));
$app->get('/booking/allianz/quote', $checkMinimalRequiredHeaders(), $acceptCORSRequestWithFields('StructureId,PortalId,UserLanguageCode,Total,InsuranceType,Adults,Checkin,Checkout,Children', 'GET'), function () use (&$app) {
    $params = new stdClass();
    $params->structureId = $app->getStructureId();
    $params->portalId = $app->getPortalId();
    $params->language = $app->getUserLanguageCode();
    $params->total = $app->request->headers->get('Total');
    $params->insuranceType = $app->request->headers->get('InsuranceType');
    $params->checkin = $app->request->headers->get('Checkin');
    $params->checkout = $app->request->headers->get('Checkout');
    $params->adults = $app->request->headers->get('Adults');
    $params->children = $app->request->headers->get('Children');
    $app->getApi('/booking/allianz/quote/', $params);
});

// Run the app
$app->run();
