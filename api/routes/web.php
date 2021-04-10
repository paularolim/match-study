<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('/login', 'UserController@login');
    $router->post('/register', 'UserController@store');

    $router->group(['middleware' => 'authenticator'], function () use ($router) {
        $router->group(['prefix' => 'users'], function () use ($router) {
            $router->get('/{id}/contacts', 'ContactController@showContacts');
        });

        $router->group(['prefix' => 'contacts'], function () use ($router) {
            $router->post('/{user_id}', 'ContactController@store');
        });
    });
});
