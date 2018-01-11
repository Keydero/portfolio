<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// laravel reconization

Route::get('/articles', function() {
    $tasks = DB::table('posts')->get();
    return $tasks;
});

Route::post('contact', 'ContactController@store')->name('contact.store');
// Route::get('/posts/{id}', function($id) {
//     $tasks = DB::table('posts')->find($id);
//     return view('posts.show', compact('tasks'));
// });
Route::get('/{vue?}', function () {

$tasks = DB::table('posts')->get();

    return view('welcome', compact('tasks'));

})->where('vue', '[\/\w\.-]*');




