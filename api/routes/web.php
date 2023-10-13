<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// SECURITY: disable all web routes
//Route::get('/', function () {
//    return view('welcome');
//});

// we'll use this Laravel app for only "api" routes
// Frontent will be served under different URL
// redirect browser access for api URL to FE-web-client URL
Route::fallback(function () {
    return Redirect::away(env('APP_URL', "https://isari.me"));
});
