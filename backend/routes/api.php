<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', 'UserController@index');
Route::post('users', 'UserController@store');
Route::get('users/{id}', 'UserController@find');
Route::put('users/{id}', 'UserController@update');
Route::delete('users/{id}', 'UserController@delete');